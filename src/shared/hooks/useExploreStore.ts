import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { backpackListExample} from '../../data/fixtures'
import { onLoadBackpackList } from '../../store/explore'



export const useExploreStore = () => {
    const { backpackList} = useAppSelector(state => state.explore)
    const dispatch = useAppDispatch()


    const startLoadingBackpackList = async () => {
        console.log("Hola iniciando carga de mochila");
        
        dispatch(onLoadBackpackList(backpackListExample));
    };
    
    return {
        //props
        backpackList,
        
        //actions
        startLoadingBackpackList
    }
}
