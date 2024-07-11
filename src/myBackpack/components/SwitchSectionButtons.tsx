import React, { FC, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../../shared/hooks';

export const SwitchSectionButtons = () => {
    const { buttons, screens, changeTheme, themeSeleted, primaryColor, secondaryColor } = useAppTheme()
    
  return (
    <>
         <View
      style={{backgroundColor: screens.secondaryColor}}
      className='w-full flex flex-row justify-end '>
          <ButtonSelectTheme
            iconName='book-outline'
            onPress={() => changeTheme('light')}
            title='Materias'
            backgroundColor={themeSeleted === 'light' ? primaryColor : buttons.backgroundColor}
            textColor={themeSeleted === 'light' ? secondaryColor : buttons.textColor}
          />
          
          <ButtonSelectTheme
            iconName='library-outline'
            onPress={() => changeTheme('dark')}
            title='Libros'
            backgroundColor={themeSeleted === 'dark' ? primaryColor : buttons.backgroundColor}
            textColor={themeSeleted === 'dark' ? secondaryColor : buttons.textColor}
          />
          
{/* 
          <ButtonSelectTheme
            iconName='sunny-outline'
            onPress={() => changeTheme('dark')}
            title='Fime'
            backgroundColor={themeSeleted === 'fime' ? '#05c46b' : buttons.backgroundColor}
            textColor={themeSeleted === 'fime' ? '#111' : buttons.textColor}
          /> */}
          
      </View>
    </>
  )
}


interface ButtonSelectThemeProps {
    iconName: string,
    title: string,
    onPress: () => void,
    textColor: string,
    backgroundColor:string
  
  }
  const ButtonSelectTheme: FC<ButtonSelectThemeProps> = ({iconName, backgroundColor, textColor,onPress,title}) => {
    
    return(
      <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: backgroundColor }}
      className='w-6/12  flex flex-row flex-nowrap items-center justify-center py-2'
      >
        <Icon name={iconName} size={25} color={textColor} />
        <Text
        style={{color: textColor}}
        className='font-semibold text-sm ml-1'>{title}</Text>
    </TouchableOpacity>
    )
  }
