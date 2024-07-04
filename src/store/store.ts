import { configureStore } from "@reduxjs/toolkit";
import { backpackSlice, notebookSlice } from "./explore";

export const store = configureStore({
    reducer: {
        notebook: notebookSlice.reducer,
        backpack: backpackSlice.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;