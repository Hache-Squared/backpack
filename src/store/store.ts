import { configureStore } from "@reduxjs/toolkit";
import { backpackSlice, notebookSlice } from "./explore";
import { exploreSlice } from "./explore/exploreSlice";
import { appThemeSlice } from "./profile";
import { permissionsSlice } from "./permissions";
import { myBackpackSlice } from "./myBackpack/myBackpackSlice";

export const store = configureStore({
    reducer: {
        notebook: notebookSlice.reducer,
        backpack: backpackSlice.reducer,
        explore: exploreSlice.reducer,
        appTheme: appThemeSlice.reducer,
        permissions: permissionsSlice.reducer,
        myBackpack: myBackpackSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;