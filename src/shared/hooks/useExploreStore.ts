import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { backpackListExample} from '../../data/fixtures'
import { onFinishedLoadingExplore, onBackpackAdded,onLoadBackpackList, onLoadingExplore } from '../../store/explore'
import { BackpackListItem } from '../../types'



export const useExploreStore = () => {
    const { backpackList, isLoadingExplore} = useAppSelector(state => state.explore)
    const dispatch = useAppDispatch()


    const startLoadingBackpackList = async () => {
        // console.log("Hola iniciando carga de mochila");
        dispatch( onLoadingExplore() );
        await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 700) })
        dispatch(onLoadBackpackList(backpackListExample));
        // dispatch( onFinishedLoadingExplore() );
    };

    const startAddingBackpackItem = async (item: Partial<BackpackListItem>) => {
        // console.log("Hola iniciando carga de mochila");
        let data: BackpackListItem = {
            id: '' + backpackList.length +  1,
            title: item.title || 'Nueva Mochila',
            image: item.image || ''
        }
        dispatch( onLoadingExplore() );
        await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 700) })
        dispatch(onBackpackAdded(data));
        // dispatch( onFinishedLoadingExplore() );
    };
    
    return {
        //props
        isLoadingExplore,
        backpackList,
        
        //actions
        startLoadingBackpackList,
        startAddingBackpackItem,
        
    }
}
