import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackpackContents, BackpackListItem, BookListItem, NotebookListItem, PublicationListItem } from "../../types";


const initialState: BackpackContents = {
    currentBackpack: null,
    backpackList: [],
    notebookList: [],
    bookList: [],
    publicationList: [],
};

export const backpackSlice = createSlice({
    name: "backpack",
    initialState: initialState,
    reducers: {
       onLoadCurrentBackpack: (state, action: PayloadAction<BackpackListItem>) => {
          state.currentBackpack = { ...action.payload }
       },

       onLoadBackpackList: (state, action: PayloadAction<BackpackListItem[]>) => {
          state.backpackList = [ ...action.payload ]
       },

       onLoadNotebooks: (state, action: PayloadAction<NotebookListItem[]>) => {
            state.notebookList = [...action.payload]
       },
       onLoadBooks: (state, action: PayloadAction<BookListItem[]>) => {
            state.bookList = [...action.payload]
       },
       onLoadPublications: (state, action: PayloadAction<PublicationListItem[]>) => {
            state.publicationList = [...action.payload]
       },
       
    }
});

export const { onLoadBooks, onLoadNotebooks, onLoadPublications, onLoadBackpackList, onLoadCurrentBackpack } = backpackSlice.actions;