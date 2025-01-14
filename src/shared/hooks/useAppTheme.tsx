import React, { useState } from 'react'


const colorsForApp = {
    screens: {
        primaryColor: "#fff",
        secondaryColor: "#f1f2f6",
    },
    buttons: {
        backgroundColor: '#fff',
        textColor: '#111'
    },
    texts: {
        labelColor: '#1B9CFC'
    },
    tabBar: {
        backgroundColor: '#1B9CFC',
        labelColorActive: '#fff',
        labelColorInactive: '#111'
    },
    menuNotebookContent: {

        colorStatusActive: '#1B9CFC',
        colorStatusInactive: '#747d8c',
    },
    headerMenuNotebookContent: {
        backgroundColor: '#111',
        textColor: '#fff',
        buttonMenuLabelColor: "#111"
    },
    sheetContent:{
        textTitleColor: '#111',
        textSubtitleColor: '#111',
        textColor: '#111',
    }
}

export const useAppTheme = () => {
  const [appTheme, setAppTheme] = useState(colorsForApp)
  
  return {
    ...appTheme
  }
}

