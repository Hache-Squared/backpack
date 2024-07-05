import React, { FC, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../../shared/hooks';

export const SwitchThemeButtons = () => {
    const { buttons, screens } = useAppTheme()
  const [selectedView, setSelectedView] = useState('notebooks')
  return (
    <>
         <View
      style={{backgroundColor: screens.secondaryColor}}
      className='w-full flex flex-row justify-end '>
          <ButtonSelectTheme
            iconName='sunny-outline'
            onPress={() => setSelectedView('notebooks')}
            titile='Claro'
            backgroundColor={selectedView === 'notebooks' ? buttons.textColor : buttons.backgroundColor}
            textColor={selectedView === 'notebooks' ? buttons.backgroundColor : buttons.textColor}
          />
          
          <ButtonSelectTheme
            iconName='sunny'
            onPress={() => setSelectedView('books')}
            titile='Oscuro'
            backgroundColor={selectedView === 'books' ? buttons.textColor : buttons.backgroundColor}
            textColor={selectedView === 'books' ? buttons.backgroundColor : buttons.textColor}
          />
          

          <ButtonSelectTheme
            iconName='sunny-outline'
            onPress={() => setSelectedView('publications')}
            titile='Fime'
            backgroundColor={selectedView === 'publications' ? buttons.textColor : buttons.backgroundColor}
            textColor={selectedView === 'publications' ? buttons.backgroundColor : buttons.textColor}
          />
          
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
      className='w-4/12  flex flex-row flex-nowrap items-center justify-center py-2'
      >
        <Icon name={iconName} size={25} color={textColor} />
        <Text
        style={{color: textColor}}
        className='font-semibold text-sm ml-1'>{titile}</Text>
    </TouchableOpacity>
    )
  }
