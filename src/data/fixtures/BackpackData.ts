// Datos ficticios

import { BackpackContents, BackpackListItem, BookListItem, NotebookListItem, PublicationListItem } from "../../types";

export const backpackListExample: BackpackListItem[] = [
    { id: "1", title: "Mochila de Estudio", image: "https://example.com/backpack1.png" },
    { id: "2", title: "Mochila de Viaje", image: "https://example.com/backpack2.png" }
];

export const notebookListExample: NotebookListItem[] = [
    { id: "1", title: "Cuaderno de Matemáticas" },
    { id: "2", title: "Cuaderno de Física" },
    { id: "3", title: "Cuaderno de Química" }
];

export const bookListExample: BookListItem[] = [
    { id: "1", title: "Libro de Álgebra", uriDocument:'https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf' },
    { id: "2", title: "Libro de Mecánica", uriDocument:'https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf' },
    { id: "3", title: "Libro de Termodinámica", uriDocument:'https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf' }
];

export const publicationListExample: PublicationListItem[] = [
    { id: "1", title: "Artículo sobre Ecuaciones Diferenciales", link: "https://example.com/article1", image: "https://example.com/article1.png" },
    { id: "2", title: "Publicación sobre Física Cuántica", link: "https://example.com/publication2", image: "https://example.com/publication2.png" },
    { id: "3", title: "Revista de Química Orgánica", link: "https://example.com/magazine3", image: "https://example.com/magazine3.png" }
];

export const backpackContents: BackpackContents = {
    currentBackpack: backpackListExample[0],
    backpackList: backpackListExample,
    notebookList: notebookListExample,
    bookList: bookListExample,
    publicationList: publicationListExample
};