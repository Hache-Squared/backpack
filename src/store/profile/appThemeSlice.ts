import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThemeState } from "../../types";
import { lightColorsTheme } from "../../shared/utils";


export type themeSelected = 'light' | 'dark' | 'fime';
export const appThemeSlice = createSlice({
    name: "appTheme",
    initialState: {
        colors: lightColorsTheme,
        theme: 'light' as themeSelected,
    },
    reducers: {
        onChangeTheme: (state, { payload}) => {
            state.colors = {...payload}
        }
    }
});

export const { onChangeTheme } = appThemeSlice.actions;