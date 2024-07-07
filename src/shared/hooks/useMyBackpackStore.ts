import { Alert } from 'react-native';
import { useAppDispatch, useAppSelector, onLoadLocalNotebookList, onLoadCurrentLocalNotebook, onLoadCurrentLocalSheetWatching } from '../../store';
import { LocalNotebookState, LocalSheetState, NotebookFolder, NotebookStuctureFolders, SheetContent, SheetContentType, SheetFolder } from '../../types';
import { useLocalStorage } from './useLocalStorage';

export const useMyBackpackStore = () => {
    const { currentLocalNotebook,currentLocalSheetWatching,localNotebookList,localkBookList  } = useAppSelector(state => state.myBackpack);
    const { getNotebookContent, getNotebooksSaved, getSheetContent, createImageElementFile, createTextElementFile } = useLocalStorage();
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     console.log('Re-render usebackpack');
        
    // },[currentBackpack]);

    const startLoadingLocalNotebookList = async () => {
        let notebooks = await getNotebooksSaved();

        dispatch( onLoadLocalNotebookList( notebooks ) )
    };

    const startLoadingCurrentLocalNotebook = async (notebook: NotebookFolder) => {
        let sheets = await getNotebookContent(notebook);
        const data:LocalNotebookState  = {
            data: notebook,
            sheets: sheets
        }
        dispatch( onLoadCurrentLocalNotebook( data ) )
    };

    const startLoadingCurrentLocalSheetWatching = async(sheet: SheetFolder): Promise<boolean> => {
        if(!currentLocalNotebook || !currentLocalNotebook.data){
            return false;
        }
        let sheetPathStructure:NotebookStuctureFolders = {
            notebook_id: currentLocalNotebook?.data?.id ?? '',
            notebook_title: currentLocalNotebook?.data?.title ?? '',
            sheet_id: sheet.id,
            sheet_title: sheet.title
        }
        let content = await getSheetContent(sheetPathStructure);

        dispatch( onLoadCurrentLocalSheetWatching({
            data: sheet,
            content
        }))
        return true;
    }

    const startDownloadingSheet = async(structure: NotebookStuctureFolders, contents: SheetContent[]): Promise<boolean> => {
        try {
            // Crear carpetas necesarias al inicio
            let results: Array<boolean> = [];
            for (const content of contents) {
                let result = false;
                if(content.type === SheetContentType.Text) {
                    result = await createTextElementFile(structure, content);
                    results.push(result);
                } else if(content.type === SheetContentType.Image) {
                    result = await createImageElementFile(structure, content);
                    results.push(result);
                }
            }
            // console.log("Result: ", results);
            
            let ok = results.includes(false) ? false : true;
            if(!ok){
                return false;
            }
            return true;
        } catch (error) {
            console.error("Error en startDownloadingSheet:", error);
            return false;
        }
    }


 

    return {
        //properties
        currentLocalNotebook,
        currentLocalSheetWatching,
        localNotebookList,
        localkBookList,

        // actions
        startLoadingLocalNotebookList,
        startLoadingCurrentLocalNotebook,
        startLoadingCurrentLocalSheetWatching,
        startDownloadingSheet
    };
};
