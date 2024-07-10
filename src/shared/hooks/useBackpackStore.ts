import { onLoadCurrentBackpack, onLoadBooks, onLoadNotebooks, onLoadPublications, useAppDispatch, useAppSelector, onResetBackpackState, onLoadingBackpack, onFinishedLoadingBackpack } from '../../store';
import {  backpackListContentExample, backpackListExample } from '../../data/fixtures';
import { useEffect } from 'react';

export const useBackpackStore = () => {
    const { currentBackpack, currentBackpackNotebookList, currentBackpackBookList, currentBackpackPublicationList, isLoadingBackpack } = useAppSelector(state => state.backpack);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     console.log('Re-render usebackpack');
        
    // },[currentBackpack]);

    const startLoadingCurrentBackpack = async (id: string) => {
        // dispatch( onLoadingBackpack() );
        // await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 2000) })
        const backpackItem = backpackListExample.find(item => item.id === id);
        if (backpackItem) {
            dispatch(onLoadCurrentBackpack({
                ...backpackItem
            }));
        }
        // dispatch( onFinishedLoadingBackpack() );
    };

    const startLoadingNotebooks = async (backpackId: string) => {
        dispatch( onLoadingBackpack() );
        await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 2000) })
        const backpack = backpackListContentExample.find(backpack => backpack.currentBackpack?.id === backpackId);
        if(backpack) {
            dispatch(onLoadNotebooks(backpack.currentBackpackNotebookList));
        }
        // dispatch( onFinishedLoadingBackpack() );
    };

    const startLoadingBooks = async (backpackId: string) => {
        dispatch( onLoadingBackpack() );
        await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 2000) })
        const backpack = backpackListContentExample.find(backpack => backpack.currentBackpack?.id === backpackId);
        if(backpack) {
            dispatch(onLoadBooks(backpack.currentBackpackBookList));
        }
        // dispatch( onFinishedLoadingBackpack() );
    };

    const startLoadingPublications = async (backpackId: string) => {
        dispatch( onLoadingBackpack() );
        await new Promise((resolve, reject) => { setTimeout(() => resolve(true), 2000) })
        const backpack = backpackListContentExample.find(backpack => backpack.currentBackpack?.id === backpackId);
        if(backpack) {
            dispatch(onLoadPublications(backpack.currentBackpackPublicationList));
        }
        // dispatch( onFinishedLoadingBackpack() );
    };
    
    const startResetingBackpack = async () => {
        dispatch( onLoadingBackpack() );
        dispatch( onResetBackpackState() );
        // dispatch( onFinishedLoadingBackpack() );
    };

    return {
        // props
        isLoadingBackpack,
        currentBackpack,
        currentBackpackBookList,
        currentBackpackPublicationList,
        currentBackpackNotebookList,
        

        // actions
        startLoadingCurrentBackpack,
        startLoadingNotebooks,
        startLoadingBooks,
        startLoadingPublications,
        startResetingBackpack
    };
};
