import React, { useState } from 'react'


const colorsForApp = {
    screens: {
        primaryColor: "#fff",
        secondaryColor: "#f1f2f6",
    },
    buttons: {
        backgroundColor: '#fff',
        textColor: '#1B9CFC'
    },
    texts: {
        labelColor: '#1B9CFC'
    },
    tabBar: {
        backgroundColor: '#fff',
    }
}

export const useAppTheme = () => {
  const [appTheme, setAppTheme] = useState(colorsForApp)
  
  return {
    ...appTheme
  }
}

