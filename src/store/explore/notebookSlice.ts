import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentSheetShowing, InitNotebookState, NotebookState, SheetItem } from "../../types";


const initialState: NotebookState = {
    id: '',
    title: '',
    currentSheetShowing: null,
    menuSheetItemList: [],
    isLoadingNotebook: true,
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
        },
        onResetNotebookState: (state) => {
            state.id =  '';
            state.title =  '';
            state.currentSheetShowing =  null;
            state.menuSheetItemList =  [];
        },
        onLoadingNotebook: (state) => {
            state.isLoadingNotebook = true;
        },
        onFinishedLoadingNotebook: (state) => {
            state.isLoadingNotebook = false;
        },

    }
});

export const { onLoadSheet, onLoadNotebook, onResetNotebookState, onFinishedLoadingNotebook, onLoadingNotebook } = notebookSlice.actions;