import { BookListItem, NotebookListItem } from "./BackpackTypes";
import { SheetContent } from "./SheetContentTypes";

export interface MyBackpackContents {
    currentLocalNotebook: LocalNotebookState | null;
    currentLocalSheetWatching: LocalSheetState | null;
    localNotebookList: NotebookListItem[];
    localkBookList: BookListItem[];
}

export interface LocalNotebookState {
    data: NotebookFolder,
    sheets: SheetFolder[]
}
export interface LocalSheetState {
    data: SheetFolder,
    content: SheetContent[]
}

export interface NotebookStuctureFolders {
    notebook_id: string,
    notebook_title: string,
    sheet_id: string,
    sheet_title: string,
  }
  
export interface NotebookFolder {
    id: string,
    title: string
  }
  
export interface SheetFolder {
    id: string,
    title: string
  }