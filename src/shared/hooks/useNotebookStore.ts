import React from 'react'
import { onFinishedLoadingNotebook, onLoadingNotebook, onLoadNotebook, onLoadSheet, onResetNotebookState, useAppDispatch, useAppSelector } from '../../store'
import { currentSheetShowingExample, menuSheetItemNotebookListExample } from '../../data/fixtures'
import { CurrentSheetShowing } from '../../types'



export const useNotebookStore = () => {
    const { currentSheetShowing, menuSheetItemList, title, id, isLoadingNotebook } = useAppSelector(state => state.notebook)
    const dispatch = useAppDispatch()

    const startLoadingNotebook = async(id: string) => {
        dispatch( onLoadingNotebook() );
        await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 2000) })
        const notebook = menuSheetItemNotebookListExample.find(notebook => notebook.id === id)
        if(notebook) {
            dispatch( onLoadNotebook(notebook) ) 
        }
        dispatch( onFinishedLoadingNotebook() );
    }

    const startLoadingSheet = async(id: string) => {
        dispatch( onLoadingNotebook() );
        await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 2000) })
        const sheetIndex = currentSheetShowingExample.findIndex(sheet => sheet.id === id)

        const previous = sheetIndex > 0 ? currentSheetShowingExample[sheetIndex - 1] : null;
        const current = currentSheetShowingExample[sheetIndex];
        const next = sheetIndex < currentSheetShowingExample.length - 1 ? currentSheetShowingExample[sheetIndex + 1] : null;

        const sheet:CurrentSheetShowing  = {
            id: current.id,
            title: current.title,
            content: current.content,
            prev: previous,
            next: next
        }

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
