import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  BackpackListItem } from "../../types";
import { ExploreState } from "../../types/ExploreTypes";
import { backpackListContentExample } from "../../data/fixtures";


const initialState: ExploreState = {
    backpackList: [],
    backpackContents: backpackListContentExample,
    isLoadingExplore: true,
    isUserAdmin: false, 
};

export const exploreSlice = createSlice({
    name: "explore",
    initialState: initialState,
    reducers: {
       onLoadBackpackList: (state, action: PayloadAction<BackpackListItem[]>) => {
          state.backpackList = [ ...action.payload ]
          state.isLoadingExplore = false;
       },
       onLoadingExplore: (state) => {
        state.isLoadingExplore = true;
       },
       onFinishedLoadingExplore: (state) => {
        state.isLoadingExplore = false;
       },
       onUserAdminState: (state,action: PayloadAction<boolean> ) => {
        state.isUserAdmin = false;
       },

       onBackpackAdded: (state,action: PayloadAction<BackpackListItem> ) => {
        state.backpackList = [...state.backpackList, action.payload];
        state.backpackContents = [
            ...state.backpackContents,
            {
             currentBackpack: action.payload,
             currentBackpackBookList: [],
             currentBackpackPublicationList:[],
             currentBackpackNotebookList: []
            }
        ];
        state.isLoadingExplore = false;
       },
       
       
    }
});

export const { 
     onLoadBackpackList,
     onFinishedLoadingExplore, 
     onLoadingExplore,
     onUserAdminState,
     onBackpackAdded

    } = exploreSlice.actions;