import { onLoadCurrentBackpack, onLoadBackpackList, onLoadBooks, onLoadNotebooks, onLoadPublications, useAppDispatch, useAppSelector } from '../../store';
import { backpackListExample, bookListExample, notebookListExample, publicationListExample } from '../../data/fixtures';

export const useBackpackStore = () => {
    const { currentBackpack, backpackList, notebookList, bookList,publicationList } = useAppSelector(state => state.backpack);
    const dispatch = useAppDispatch();

    const startLoadingCurrentBackpack = async (id: string) => {
        const backpackItem = backpackListExample.find(item => item.id === id);
        if (backpackItem) {
            dispatch(onLoadCurrentBackpack(backpackItem));
        }
    };

    const startLoadingBackpackList = async () => {
        console.log("Hola iniciando carga de mochila");
        
        dispatch(onLoadBackpackList(backpackListExample));
    };

    const startLoadingNotebooks = async () => {
        dispatch(onLoadNotebooks(notebookListExample));
    };

    const startLoadingBooks = async () => {
        dispatch(onLoadBooks(bookListExample));
    };

    const startLoadingPublications = async () => {
        dispatch(onLoadPublications(publicationListExample));
    };

    return {
        // props
        currentBackpack,
        backpackList,
        notebookList,
        bookList,
        publicationList,

        // actions
        startLoadingCurrentBackpack,
        startLoadingBackpackList,
        startLoadingNotebooks,
        startLoadingBooks,
        startLoadingPublications
    };
};
