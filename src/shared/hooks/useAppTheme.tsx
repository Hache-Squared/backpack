import React, { useEffect, useState } from 'react'
import { darkColorsTheme, lightColorsTheme } from '../utils';
import { onChangeTheme, useAppDispatch, useAppSelector } from '../../store';
import { ThemeSelected } from '../../types';





export const useAppTheme = () => {
  
  const { colors, theme: themeSeleted} = useAppSelector(state => state.appTheme)
  const dispatch = useAppDispatch();
  
  
  const changeTheme = (themeSelected: ThemeSelected) => {
    console.log(themeSelected)
    if(themeSelected === 'light'){
        dispatch( onChangeTheme({ 
          colors: {
            ...lightColorsTheme
          },
          theme: 'light'
        }));
    }
    if(themeSelected === 'dark'){
      
        dispatch( onChangeTheme({ 
          colors: {
            ...darkColorsTheme
          },
          theme: 'dark'
        }));
    }
    
  }

  useEffect(() => {

  },[])

  return {
    //properties
    ...colors,
    themeSeleted,
    

    //actions
    changeTheme
  }
}

