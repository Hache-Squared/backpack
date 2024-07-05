import React, { useEffect, useState } from 'react'
import { darkColorsTheme, lightColorsTheme } from '../utils';
import { onChangeTheme, themeSelected, useAppDispatch, useAppSelector } from '../../store';





export const useAppTheme = () => {
  
  const { colors, theme: themeSeleted} = useAppSelector(state => state.appTheme)
  const dispatch = useAppDispatch();
  
  
  const changeTheme = (themeSelected: themeSelected) => {
    console.log(themeSelected)
    if(themeSelected === 'light'){
        dispatch( onChangeTheme({ ...lightColorsTheme }) );
    }
    if(themeSelected === 'dark'){
        dispatch( onChangeTheme({...darkColorsTheme}) );
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

