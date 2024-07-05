import { onLoadCurrentBackpack, onLoadBooks, onLoadNotebooks, onLoadPublications, useAppDispatch, useAppSelector } from '../../store';
import {  backpackListContentExample, backpackListExample } from '../../data/fixtures';
import { useEffect } from 'react';

export const useBackpackStore = () => {
    const { currentBackpack, currentBackpackNotebookList, currentBackpackBookList, currentBackpackPublicationList } = useAppSelector(state => state.backpack);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     console.log('Re-render usebackpack');
        
    // },[currentBackpack]);

    const startLoadingCurrentBackpack = async (id: string) => {
        const backpackItem = backpackListExample.find(item => item.id === id);
        if (backpackItem) {
            dispatch(onLoadCurrentBackpack(backpackItem));
        }
    };

    const startLoadingNotebooks = async (backpackId: string) => {
        const backpack = backpackListContentExample.find(backpack => backpack.currentBackpack?.id === backpackId);
        if(backpack) {
            dispatch(onLoadNotebooks(backpack.currentBackpackNotebookList));
        }
    };

    const startLoadingBooks = async (backpackId: string) => {

        const backpack = backpackListContentExample.find(backpack => backpack.currentBackpack?.id === backpackId);
        if(backpack) {
            dispatch(onLoadBooks(backpack.currentBackpackBookList));
        }
    };

    const startLoadingPublications = async (backpackId: string) => {
        
        const backpack = backpackListContentExample.find(backpack => backpack.currentBackpack?.id === backpackId);
        if(backpack) {
            dispatch(onLoadPublications(backpack.currentBackpackPublicationList));
        }
    };

    return {
        // props
        currentBackpack,
        currentBackpackBookList,
        currentBackpackPublicationList,
        currentBackpackNotebookList,
        

        // actions
        startLoadingCurrentBackpack,
        startLoadingNotebooks,
        startLoadingBooks,
        startLoadingPublications
    };
};
