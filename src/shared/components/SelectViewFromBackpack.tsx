import React, { FC, ReactElement, ReactNode, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAppTheme } from '../hooks'
import Icon from 'react-native-vector-icons/Ionicons'

interface SelectViewFromBackpackProps {
  ViewForNotebooks:  ReactElement,
  ViewForBooks:  ReactElement,
  ViewForPublications?:  ReactElement,
  applyPublications?: boolean,
}

type selectedView = 'notebooks' | 'books' | 'publications';


export const SelectViewFromBackpack: FC<SelectViewFromBackpackProps> = ({ ViewForBooks, ViewForNotebooks, ViewForPublications, applyPublications = true }) => {
  const { buttons, screens,primaryColor } = useAppTheme()
  const [selectedView, setSelectedView] = useState<selectedView>('notebooks')
  return (
    <View className='w-full flex flex-col'>
      <View 
      style={{
        backgroundColor: screens.secondaryColor,
        borderBottomWidth: 2,
        borderBottomColor: 'gray'

      }}
      className='w-full flex flex-row justify-end mb-3'>
          <ButtonSelectView
            iconName='book-outline'
            onPress={() => setSelectedView('notebooks')}
            title='Libretas'
            backgroundColor={selectedView === 'notebooks' ? buttons.textColor : screens.secondaryColor}
            textColor={selectedView === 'notebooks' ? screens.secondaryColor : buttons.textColor}
          />
          
          <ButtonSelectView
            iconName='library-outline'
            onPress={() => setSelectedView('books')}
            title='Libros'
            backgroundColor={selectedView === 'books' ? buttons.textColor : screens.secondaryColor}
            textColor={selectedView === 'books' ? screens.secondaryColor : buttons.textColor}
          />
          
          {
            applyPublications &&
            (
              <ButtonSelectView
                iconName='albums-outline'
                onPress={() => setSelectedView('publications')}
                title='Publicaciones'
                backgroundColor={selectedView === 'publications'? buttons.textColor : screens.secondaryColor}
                textColor={selectedView === 'publications'? screens.secondaryColor : buttons.textColor}
              />
            )
          }
          
          
      </View>

      {
        selectedView === 'notebooks' ?
        ( ViewForNotebooks ) : 
        selectedView === 'books' ?
        ( ViewForBooks ) :
        (selectedView === 'publications' && applyPublications) ?
        ( ViewForPublications )
        : null
      }



    </View>
  )
}
interface ButtonSelectViewProps {
  iconName: string,
  title: string,
  onPress: () => void,
  textColor: string,
  backgroundColor:string

}
const ButtonSelectView: FC<ButtonSelectViewProps> = ({iconName, backgroundColor, textColor,onPress,title}) => {
  
  return(
    <TouchableOpacity
    onPress={onPress}
    style={{ backgroundColor: backgroundColor }}
    className='  flex-1 flex-row flex-nowrap items-center justify-center py-2'
    >
      <Icon name={iconName} size={25} color={textColor} />
      <Text
      style={{color: textColor}}
      className='font-semibold text-sm ml-1'>{title}</Text>
  </TouchableOpacity>
  )
}