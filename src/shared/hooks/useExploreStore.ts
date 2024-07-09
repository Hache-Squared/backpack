import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { backpackListExample} from '../../data/fixtures'
import { onFinishedLoadingExplore, onLoadBackpackList, onLoadingExplore } from '../../store/explore'



export const useExploreStore = () => {
    const { backpackList, isLoadingExplore} = useAppSelector(state => state.explore)
    const dispatch = useAppDispatch()


    const startLoadingBackpackList = async () => {
        // console.log("Hola iniciando carga de mochila");
        dispatch( onLoadingExplore() );
        dispatch(onLoadBackpackList(backpackListExample));
        dispatch( onFinishedLoadingExplore() );
    };
    
    return {
        //props
        isLoadingExplore,
        backpackList,
        
        //actions
        startLoadingBackpackList
    }
}
