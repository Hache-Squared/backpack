// Datos ficticios

import { BackpackContents, BackpackListItem, BookListItem, NotebookListItem, PublicationListItem } from "../../types";

export const backpackListExample: BackpackListItem[] = [
    { id: "1", title: "Mochila de Estudio", image: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg" },
    { id: "2", title: "Mochila de Viaje", image: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg" }
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
    { id: "1", title: "Artículo sobre Ecuaciones Diferenciales", link: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg", image: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg" },
    { id: "2", title: "Publicación sobre Física Cuántica", link: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg", image: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg" },
    { id: "3", title: "Revista de Química Orgánica", link: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg", image: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg" }
];

export const backpackContents: BackpackContents = {
    currentBackpack: backpackListExample[0],
    backpackList: backpackListExample,
    notebookList: notebookListExample,
    bookList: bookListExample,
    publicationList: publicationListExample
};