import { CurrentSheetShowing, SheetItem } from "./SheetContentTypes";

export interface NotebookState {
    title: string;
    menuSheetItemList: SheetItem[];
    currentSheetShowing: CurrentSheetShowing | null;
}

export interface InitNotebookState {
    title: string;
    menuSheetItemList: SheetItem[];
}