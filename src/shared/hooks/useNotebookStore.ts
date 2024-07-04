import React from 'react'
import { onLoadNotebook, onLoadSheet, useAppDispatch, useAppSelector } from '../../store'
import { currentSheetShowingExample, initialStateNotebookExample } from '../../data/fixtures'



export const useNotebookStore = () => {
    const { currentSheetShowing, menuSheetItemList, title } = useAppSelector(state => state.notebook)
    const dispatch = useAppDispatch()
    const startLoadingNotebook = async(id: string) => {

        dispatch( onLoadNotebook(initialStateNotebookExample) ) 
        
    }

    const startLoadingSheet = async(id: string) => {

        dispatch( onLoadSheet(currentSheetShowingExample[0]) ) 
        
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
