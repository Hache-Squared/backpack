import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentSheetShowing, InitNotebookState, NotebookState, SheetItem } from "../../types";


const initialState: NotebookState = {
    id: '',
    title: '',
    currentSheetShowing: null,
    menuSheetItemList: []
};

export const notebookSlice = createSlice({
    name: "notebook",
    initialState: initialState,
    reducers: {
        onLoadSheet: (state, action: PayloadAction<CurrentSheetShowing>) => {
            state.currentSheetShowing = {
                ...action.payload
            };
        },
        onLoadNotebook: (state, action: PayloadAction<InitNotebookState>) => {
            state.id = action.payload.id;
            state.title = action.payload.title;
            state.menuSheetItemList = [ ...action.payload.menuSheetItemList ];
        }
    }
});

export const { onLoadSheet, onLoadNotebook } = notebookSlice.actions;