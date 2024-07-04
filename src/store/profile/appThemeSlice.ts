import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThemeState } from "../../types";


const initialState: AppThemeState = {

};

export const appThemeSlice = createSlice({
    name: "appTheme",
    initialState: initialState,
    reducers: {

    }
});

export const { } = appThemeSlice.actions;