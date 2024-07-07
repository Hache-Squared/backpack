import { useAppDispatch, useAppSelector, onLoadLocalNotebookList, onLoadCurrentLocalNotebook, onLoadCurrentLocalSheetWatching } from '../../store';
import { LocalNotebookState, LocalSheetState, NotebookFolder, NotebookStuctureFolders, SheetFolder } from '../../types';
import { useLocalStorage } from './useLocalStorage';

export const useMyBackpackStore = () => {
    const { currentLocalNotebook,currentLocalSheetWatching,localNotebookList,localkBookList  } = useAppSelector(state => state.myBackpack);
    const { getNotebookContent, getNotebooksSaved, getSheetContent } = useLocalStorage();
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


 

    return {
        //properties
        currentLocalNotebook,
        currentLocalSheetWatching,
        localNotebookList,
        localkBookList,

        // actions
        startLoadingLocalNotebookList,
        startLoadingCurrentLocalNotebook,
        startLoadingCurrentLocalSheetWatching
    };
};
