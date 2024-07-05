import React from 'react'
import { useAppTheme } from '../hooks';
import { Image } from 'react-native';

const logoWhite = require('../../assets/logos/oso_fime_blanco.png');
const logoBlack = require('../../assets/logos/oso_fime_negro.png');
export const HeaderLogo = () => {
  const { themeSeleted } = useAppTheme()
  return (
    <Image source={
        themeSeleted === 'light'
        ? logoBlack : logoWhite
    } 
    className='object-contain overflow-hidden'
    style={{width: 40, height: 40}} />
  )
}
