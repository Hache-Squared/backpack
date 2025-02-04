import React, { FC, ReactElement, ReactNode, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppTheme } from '../hooks'
import Icon from 'react-native-vector-icons/Ionicons'

interface SelectViewFromBackpackProps {
  ViewForNotebooks:  ReactElement,
  ViewForBooks:  ReactElement,
}

type selectedView = 'notebooks' | 'books';


export const SelectViewFromBackpack: FC<SelectViewFromBackpackProps> = ({ ViewForBooks, ViewForNotebooks }) => {
  const { buttons, screens } = useAppTheme()
  const [selectedView, setSelectedView] = useState<selectedView>('notebooks')
  return (
    <View className='w-full flex flex-col'>
      <View 
      style={{backgroundColor: screens.secondaryColor}}
      className='w-full flex flex-row justify-end '>
          <ButtonSelectView
            iconName='book-outline'
            onPress={() => setSelectedView('notebooks')}
            titile='Libretas'
            backgroundColor={selectedView === 'notebooks' ? buttons.textColor : buttons.backgroundColor}
            textColor={selectedView === 'notebooks' ? buttons.backgroundColor : buttons.textColor}
          />
          
          <ButtonSelectView
            iconName='albums-outline'
            onPress={() => setSelectedView('books')}
            titile='Libros'
            backgroundColor={selectedView === 'books' ? buttons.textColor : buttons.backgroundColor}
            textColor={selectedView === 'books' ? buttons.backgroundColor : buttons.textColor}
          />
          
          
      </View>

      {
        selectedView === 'notebooks' ?
        ( ViewForNotebooks ) 
        : ( ViewForBooks )
      }



    </View>
  )
}
interface ButtonSelectViewProps {
  iconName: string,
  titile: string,
  onPress: () => void,
  textColor: string,
  backgroundColor:string

}
const ButtonSelectView: FC<ButtonSelectViewProps> = ({iconName, backgroundColor, textColor,onPress,titile}) => {
  
  return(
    <TouchableOpacity
    onPress={onPress}
    style={{ backgroundColor: backgroundColor }}
    className='w-6/12  flex flex-row flex-nowrap items-center justify-center py-2'
    >
      <Icon name={iconName} size={30} color={textColor} />
      <Text
      style={{color: textColor}}
      className='font-semibold text-lg ml-1'>{titile}</Text>
  </TouchableOpacity>
  )
}