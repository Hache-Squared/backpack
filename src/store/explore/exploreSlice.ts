import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  BackpackListItem } from "../../types";
import { ExploreState } from "../../types/ExploreTypes";


const initialState: ExploreState = {
    backpackList: [],
    isLoadingExplore: true,
};

export const exploreSlice = createSlice({
    name: "explore",
    initialState: initialState,
    reducers: {
       onLoadBackpackList: (state, action: PayloadAction<BackpackListItem[]>) => {
          state.backpackList = [ ...action.payload ]
       },
       onLoadingExplore: (state) => {
        state.isLoadingExplore = true;
       },
       onFinishedLoadingExplore: (state) => {
        state.isLoadingExplore = false;
       }
       
    }
});

export const { onLoadBackpackList, onFinishedLoadingExplore, onLoadingExplore } = exploreSlice.actions;