export interface BackpackContents {
    currentBackpack: BackpackListItem | null;
    backpackList: BackpackListItem[];
    notebookList: NotebookListItem[];
    bookList: BookListItem[];
    publicationList: PublicationListItem[];
}

export interface BackpackListItem {
    id: string;
    title: string;
    image?: string;
}

export interface NotebookListItem {
    id: string;
    title: string;
}

export interface BookListItem {
    id: string;
    title: string;
    uriDocument: string;
}

export interface PublicationListItem {
    id: string;
    title: string;
    link?: string,
    image?: string,
}


