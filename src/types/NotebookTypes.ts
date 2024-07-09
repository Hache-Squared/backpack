import { CurrentSheetShowing, SheetItem } from "./SheetContentTypes";

export interface NotebookState {
    id: string;
    title: string;
    menuSheetItemList: SheetItem[];
    currentSheetShowing: CurrentSheetShowing | null;
    isLoadingNotebook: boolean;
}

export interface InitNotebookState {
    id: string;
    title: string;
    menuSheetItemList: SheetItem[];
}