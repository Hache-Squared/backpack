import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackpackContents, BackpackListItem, BookFile, BookListItem, LocalNotebookState, LocalSheetState, MyBackpackContents, NotebookListItem, PublicationListItem } from "../../types";


const initialState: MyBackpackContents = {
   currentBookWatching: null,
   currentLocalNotebook: null,
   currentLocalSheetWatching: null,
   localNotebookList: [],
   localBookList: [],
};

export const myBackpackSlice = createSlice({
    name: "myBackpack",
    initialState: initialState,
    reducers: {
       onLoadLocalNotebookList: (state, action: PayloadAction<NotebookListItem[]>) => {
         state.localNotebookList = action.payload;
       },

       onLoadLocalBookList: (state, action: PayloadAction<BookListItem[]>) => {
         state.localBookList = action.payload;
       },
       onLoadCurrentLocalNotebook: (state, action: PayloadAction<LocalNotebookState>) => {
         state.currentLocalNotebook = action.payload;
       },
       onLoadCurrentLocalSheetWatching: (state, action: PayloadAction<LocalSheetState>) => {
         state.currentLocalSheetWatching = action.payload;
       },
       onLoadCurrentLocalBookWatching: (state, action: PayloadAction<BookFile>) => {
         state.currentBookWatching = action.payload;
       },


       
    }
});

export const { onLoadLocalBookList, onLoadLocalNotebookList, onLoadCurrentLocalNotebook,onLoadCurrentLocalSheetWatching, onLoadCurrentLocalBookWatching } = myBackpackSlice.actions;