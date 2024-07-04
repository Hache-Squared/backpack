import { CurrentSheetShowing, InitNotebookState, SheetContentType, SheetItem } from "../../types";


export const menuSheetItemListExample: SheetItem[] = [
    { id: "1", title: "Introducción a React Native" },
    { id: "2", title: "Componentes Básicos" },
    { id: "3", title: "Navegación" }
];

export const initialStateNotebookExample: InitNotebookState = {
    title: "Libreta...",
    menuSheetItemList: menuSheetItemListExample
}


export const currentSheetShowingExample: CurrentSheetShowing[] = [
    {
        id: "1",
        title: "Introducción a React Native",
        content: [
            { type: SheetContentType.Text, content: "React Native es un framework para construir aplicaciones móviles usando React." },
            { type: SheetContentType.Subtitle, content: "Características" },
            { type: SheetContentType.Text, content: "Desarrollo multiplataforma, reutilización de código, soporte de la comunidad." },
            { type: SheetContentType.Image, content: "https://reactnative.dev/img/header_logo.svg" },
            { type: SheetContentType.YoutubeVideo, content: "0-S5a0eXPoc" }
        ]
    },
    {
        id: "2",
        title: "Componentes Básicos",
        content: [
            { type: SheetContentType.Text, content: "React Native proporciona varios componentes básicos como View, Text, Image, etc." },
            { type: SheetContentType.Subtitle, content: "View" },
            { type: SheetContentType.Text, content: "El componente View es el contenedor principal para los componentes hijos." },
            { type: SheetContentType.Image, content: "https://reactnative.dev/docs/assets/p_cat2.png" },
            { type: SheetContentType.Subtitle, content: "Text" },
            { type: SheetContentType.Text, content: "El componente Text se usa para mostrar texto en la pantalla." },
            { type: SheetContentType.Image, content: "https://reactnative.dev/docs/assets/p_cat1.png" }
        ]
    },
    {
        id: "3",
        title: "Navegación",
        content: [
            { type: SheetContentType.Text, content: "React Native tiene varias bibliotecas de navegación como React Navigation y React Native Navigation." },
            { type: SheetContentType.Subtitle, content: "React Navigation" },
            { type: SheetContentType.Text, content: "React Navigation es una biblioteca ampliamente utilizada para la navegación en aplicaciones React Native." },
            { type: SheetContentType.YoutubeVideo, content: "6DxgSvD6eUc" },
            { type: SheetContentType.Subtitle, content: "React Native Navigation" },
            { type: SheetContentType.Text, content: "React Native Navigation es otra opción popular que proporciona una navegación más nativa." }
        ]
    }
];
