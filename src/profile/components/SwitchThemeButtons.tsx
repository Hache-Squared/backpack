import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../../shared/hooks';

export const SwitchThemeButtons = () => {
    const { buttons, screens, changeTheme, themeSeleted } = useAppTheme()
  
  return (
    <>
         <View
      style={{backgroundColor: screens.secondaryColor}}
      className='w-full flex flex-row justify-end '>
          <ButtonSelectTheme
            iconName='sunny-outline'
            onPress={() => changeTheme('light')}
            titile='Claro'
            backgroundColor={themeSeleted === 'light' ? buttons.backgroundColor : buttons.textColor}
            textColor={themeSeleted === 'light' ? buttons.textColor : buttons.backgroundColor}
          />
          
          <ButtonSelectTheme
            iconName='moon'
            onPress={() => changeTheme('dark')}
            titile='Oscuro'
            backgroundColor={themeSeleted === 'dark' ? buttons.backgroundColor : buttons.textColor}
            textColor={themeSeleted === 'dark' ? buttons.textColor : buttons.backgroundColor}
          />
          
{/* 
          <ButtonSelectTheme
            iconName='sunny-outline'
            onPress={() => changeTheme('dark')}
            titile='Fime'
            backgroundColor={themeSeleted === 'fime' ? '#05c46b' : buttons.backgroundColor}
            textColor={themeSeleted === 'fime' ? '#111' : buttons.textColor}
          /> */}
          
      </View>
    </>
  )
}


interface ButtonSelectThemeProps {
    iconName: string,
    titile: string,
    onPress: () => void,
    textColor: string,
    backgroundColor:string
  
  }
  const ButtonSelectTheme: FC<ButtonSelectThemeProps> = ({iconName, backgroundColor, textColor,onPress,titile}) => {
    
    return(
      <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: backgroundColor }}
      className='w-6/12  flex flex-row flex-nowrap items-center justify-center py-2'
      >
        <Icon name={iconName} size={25} color={textColor} />
        <Text
        style={{color: textColor}}
        className='font-semibold text-sm ml-1'>{titile}</Text>
    </TouchableOpacity>
    )
  }
