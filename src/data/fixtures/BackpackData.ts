// Datos ficticios

import { BackpackContents, BookListItem, NotebookListItem, PublicationListItem } from "../../types";

export const backpackListContentExample: BackpackContents[] =  [
    {
        currentBackpack: {
            id: "1",
            title: "Mochila de Matematicas",
            image: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg",
        },
        currentBackpackNotebookList: [
            { id: "1", title: "Libreta de Derivadas" },
            { id: "2", title: "Introducción a Calculo Integral" },
            
        ],
        currentBackpackBookList: [
            { id: "1", title: "Libro de Álgebra 1", uriDocument:'https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf' },
            { id: "3", title: "Libro de Geometria Analitica", uriDocument:'https://bdigital.uncu.edu.ar/objetos_digitales/11619/raichman-geometriaanalitica-actividadesaprendizaje.pdf' }
        ],
        currentBackpackPublicationList: [
            { id: "2", title: "Reunion Con Profesores De INSA-Lyon", link: "https://www.fime.uanl.mx/noticias/aumentan-acuerdos-de-colaboracion-entre-fime-y-insa-lyon/", image: 'https://www.fime.uanl.mx/wp-content/uploads/2022/04/francia2-768x512.jpeg' },
            { id: "3", title: "Ingenieros En Fime", link: "https://www.fime.uanl.mx/noticias/aumentan-acuerdos-de-colaboracion-entre-fime-y-insa-lyon/", image: "https://www.fime.uanl.mx/wp-content/uploads/2022/04/francia3.jpeg" }
        ]
    },
    {
        currentBackpack: {
            id: "2",
            title: "Mochila de Tecnologia",
            image: "https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg",
        },
        currentBackpackNotebookList: [
            { id: "3", title: "Aplicaciones Hibridas" },
            { id: "4", title: "Introducción a React Native" },
            
        ],
        currentBackpackBookList: [
            { id: "1", title: "Libro de android studio", uriDocument:'https://elhacker.info/manuales/Lenguajes%20de%20Programacion/Android/Programaci%C3%B3n%20Android%20con%20Android%20Studio%20-%20Rev%202.0.pdf' },
            { id: "2", title: "Libro de react-native", uriDocument:'https://www.tutorialspoint.com/react_native/react_native_tutorial.pdf' },
            { id: "3", title: "Libro de flutter", uriDocument:'https://www.tutorialspoint.com/flutter/flutter_tutorial.pdf' }
        ],
        currentBackpackPublicationList: [
            { id: "1", title: "Estreno De La Aplicacion E-UANL", link: "https://campusdigital.uanl.mx/", image: "https://campusdigital.uanl.mx/assets/uanl_app_icon.3abee41f.png" },
            
        ]
    },
]


