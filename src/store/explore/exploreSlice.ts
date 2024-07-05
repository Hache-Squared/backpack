import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  BackpackListItem } from "../../types";
import { ExploreState } from "../../types/ExploreTypes";


const initialState: ExploreState = {
    backpackList: []
};

export const exploreSlice = createSlice({
    name: "explore",
    initialState: initialState,
    reducers: {
       onLoadBackpackList: (state, action: PayloadAction<BackpackListItem[]>) => {
          state.backpackList = [ ...action.payload ]
       },
       
    }
});

export const { onLoadBackpackList} = exploreSlice.actions;