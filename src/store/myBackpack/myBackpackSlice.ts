import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackpackContents, BackpackListItem, BookListItem, LocalNotebookState, LocalSheetState, MyBackpackContents, NotebookListItem, PublicationListItem } from "../../types";


const initialState: MyBackpackContents = {
    
   currentLocalNotebook: null,
   currentLocalSheetWatching: null,
   localNotebookList: [],
   localkBookList: [],
};

export const myBackpackSlice = createSlice({
    name: "myBackpack",
    initialState: initialState,
    reducers: {
       onLoadLocalNotebookList: (state, action: PayloadAction<NotebookListItem[]>) => {
         state.localNotebookList = action.payload;
       },

       onLoadLocalBookList: (state, action: PayloadAction<BookListItem[]>) => {
         state.localkBookList = action.payload;
       },
       onLoadCurrentLocalNotebook: (state, action: PayloadAction<LocalNotebookState>) => {
         state.currentLocalNotebook = action.payload;
       },
       onLoadCurrentLocalSheetWatching: (state, action: PayloadAction<LocalSheetState>) => {
         state.currentLocalSheetWatching = action.payload;
       },


       
    }
});

export const { onLoadLocalBookList, onLoadLocalNotebookList, onLoadCurrentLocalNotebook,onLoadCurrentLocalSheetWatching } = myBackpackSlice.actions;