import { ColorsTheme } from "../../types"

export const lightColorsTheme: ColorsTheme = {
    primaryColor: '#20bf6b',
    secondaryColor: '#fff',

    screens: {
        primaryColor: "#fff",
        secondaryColor: "#f1f2f6",
        titleColor: "#111",
    },
    statusBarColor: '#20bf6b',
    buttons: {
        backgroundColor: '#fff',
        textColor: '#111'
    },
    texts: {
        labelColor: '#111'
    },
    tabBar: {
        backgroundColor: '#fff',
        labelColorActive: '#20bf6b',
        labelColorInactive: '#111'
    },
    menuNotebookContent: {
        titleBackgroundColor: '#111',
        titleTextColor: '#fff',
        colorStatusActive: '#BB86FC',
        colorStatusInactive: '#747d8c',
    },
    headerMenuNotebookContent: {
        buttonMenuLabelColor: "#111",
        buttonMenuBackgroundColor: "#d2dae2",
    },
    sheetContent:{
        sheetTitle: '#BB86FC',
        textTitleColor: '#111',
        textSubtitleColor: '#111',
        textColor: '#111',
    },
    publications:{
        backgroundColor: '#fff',
        textColor: '#111',
    },
}

export const darkColorsTheme: ColorsTheme = {
    primaryColor: '#2ed573',
    secondaryColor: '#111',
    screens: {
        primaryColor: "#000000",
        secondaryColor: "#121212",
        titleColor: "#fff",
    },
    statusBarColor: '#2ed573',
    buttons: {
        backgroundColor: '#2f3542',
        textColor: '#fff'
    },
    texts: {
        labelColor: '#FFF'
    },
    tabBar: {
        backgroundColor: '#111',
        labelColorActive: '#2ed573',
        labelColorInactive: '#fff'
    },
    menuNotebookContent: {
        titleBackgroundColor: '#111',
        titleTextColor: '#fff',
        colorStatusActive: '#2ed573',
        colorStatusInactive: '#FFF',
    },
    headerMenuNotebookContent: {
        buttonMenuLabelColor: "#d2dae2",
        buttonMenuBackgroundColor: "#111",
    },
    sheetContent:{
        sheetTitle: '#2ed573',
        textTitleColor: '#fff',
        textSubtitleColor: '#fff',
        textColor: '#fff',
    },
    publications:{
        backgroundColor: '#111',
        textColor: '#fff',
    },
}