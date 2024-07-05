import React from 'react'
import { onLoadNotebook, onLoadSheet, useAppDispatch, useAppSelector } from '../../store'
import { currentSheetShowingExample, menuSheetItemNotebookListExample } from '../../data/fixtures'



export const useNotebookStore = () => {
    const { currentSheetShowing, menuSheetItemList, title } = useAppSelector(state => state.notebook)
    const dispatch = useAppDispatch()

    const startLoadingNotebook = async(id: string) => {
        const notebook = menuSheetItemNotebookListExample.find(notebook => notebook.id === id)
        if(notebook) {
            dispatch( onLoadNotebook(notebook) ) 
        }
        
    }

    const startLoadingSheet = async(id: string) => {
        const sheet = currentSheetShowingExample.find(sheet => sheet.id === id)
        if(sheet) dispatch( onLoadSheet(sheet) ) 
        
    }
    
    return {
        //props
        title,
        currentSheetShowing,
        menuSheetItemList,
        
        //actions
        startLoadingNotebook,
        startLoadingSheet
    }
}
