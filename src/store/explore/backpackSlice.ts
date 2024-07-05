import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackpackContents, BackpackListItem, BookListItem, NotebookListItem, PublicationListItem } from "../../types";


const initialState: BackpackContents = {
    currentBackpack: null,
    currentBackpackNotebookList: [],
    currentBackpackBookList: [],
    currentBackpackPublicationList: [],
};

export const backpackSlice = createSlice({
    name: "backpack",
    initialState: initialState,
    reducers: {
       onLoadCurrentBackpack: (state, action: PayloadAction<BackpackListItem>) => {
          state.currentBackpack = { ...action.payload }
       },


       onLoadNotebooks: (state, action: PayloadAction<NotebookListItem[]>) => {
            state.currentBackpackNotebookList = [...action.payload]
       },
       onLoadBooks: (state, action: PayloadAction<BookListItem[]>) => {
            state.currentBackpackBookList = [...action.payload]
       },
       onLoadPublications: (state, action: PayloadAction<PublicationListItem[]>) => {
            state.currentBackpackPublicationList = [...action.payload]
       },
       onResetBackpackState: (state) => {
          state.currentBackpack = null;
          state.currentBackpackNotebookList = [];
          state.currentBackpackBookList = [];
          state.currentBackpackPublicationList = [];
       }
       
    }
});

export const { onLoadBooks, onLoadNotebooks, onLoadPublications, onLoadCurrentBackpack, onResetBackpackState } = backpackSlice.actions;