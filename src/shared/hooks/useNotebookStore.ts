import React from 'react'
import { onFinishedLoadingNotebook, onLoadingNotebook, onLoadNotebook, onLoadSheet, onResetNotebookState, useAppDispatch, useAppSelector } from '../../store'
import { currentSheetShowingExample, menuSheetItemNotebookListExample } from '../../data/fixtures'



export const useNotebookStore = () => {
    const { currentSheetShowing, menuSheetItemList, title, id, isLoadingNotebook } = useAppSelector(state => state.notebook)
    const dispatch = useAppDispatch()

    const startLoadingNotebook = async(id: string) => {
        dispatch( onLoadingNotebook() );

        const notebook = menuSheetItemNotebookListExample.find(notebook => notebook.id === id)
        if(notebook) {
            dispatch( onLoadNotebook(notebook) ) 
        }
        dispatch( onFinishedLoadingNotebook() );
    }

    const startLoadingSheet = async(id: string) => {
        dispatch( onLoadingNotebook() );
        const sheet = currentSheetShowingExample.find(sheet => sheet.id === id)
        if(sheet) dispatch( onLoadSheet(sheet) ) 
        dispatch( onFinishedLoadingNotebook() );
        
    }

    const startResetingNotebook = async() => { 
        dispatch( onLoadingNotebook() );
        dispatch( onResetNotebookState() )
        dispatch( onFinishedLoadingNotebook() );
    }
    
    return {
        //props
        isLoadingNotebook,
        id,
        title,
        currentSheetShowing,
        menuSheetItemList,
        
        //actions
        startLoadingNotebook,
        startLoadingSheet,
        startResetingNotebook
    }
}
