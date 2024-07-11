import React, { FC, ReactElement, ReactNode, useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { useAppTheme, useBackpackStore } from '../hooks'
import Icon from 'react-native-vector-icons/Ionicons'
const imageBackgroundLight = require('../../assets/logos/oso_fime_gris_light.png');
const imageBackgroundDark = require('../../assets/logos/oso_fime_gris_dark.png');
const imageTransparent = require('../../assets/logos/transparent.png');

interface SelectViewFromBackpackProps {
  ViewForNotebooks:  ReactElement,
  ViewForBooks:  ReactElement,
  ViewForPublications?:  ReactElement,
  applyPublications?: boolean,
}

type selectedView = 'notebooks' | 'books' | 'publications';


export const SelectViewFromBackpack: FC<SelectViewFromBackpackProps> = ({ ViewForBooks, ViewForNotebooks, ViewForPublications, applyPublications = true }) => {
  const { buttons, screens,secondaryColor, themeSeleted } = useAppTheme()
  const [selectedView, setSelectedView] = useState<selectedView>('notebooks')
  const { isLoadingBackpack} = useBackpackStore()
  return (
    <>
      <View 
      style={{
        backgroundColor: secondaryColor,
        borderBottomWidth: 2,
        borderBottomColor: secondaryColor

      }}
      className='w-full flex flex-row justify-end mb-3'>
          <ButtonSelectView
            iconName='book-outline'
            onPress={() => setSelectedView('notebooks')}
            title='Libretas'
            backgroundColor={selectedView === 'notebooks' ? buttons.textColor : secondaryColor}
            textColor={selectedView === 'notebooks' ? secondaryColor : buttons.textColor}
          />
          
          <ButtonSelectView
            iconName='library-outline'
            onPress={() => setSelectedView('books')}
            title='Libros'
            backgroundColor={selectedView === 'books' ? buttons.textColor : secondaryColor}
            textColor={selectedView === 'books' ? secondaryColor : buttons.textColor}
          />
          
          {
            applyPublications &&
            (
              <ButtonSelectView
                iconName='albums-outline'
                onPress={() => setSelectedView('publications')}
                title='Publicaciones'
                backgroundColor={selectedView === 'publications'? buttons.textColor : secondaryColor}
                textColor={selectedView === 'publications'? secondaryColor : buttons.textColor}
              />
            )
          }
          
          
      </View>
      <ImageBackground  
        imageStyle={{ width: isLoadingBackpack ? 0 : "100%", height: isLoadingBackpack ? 0 : 450 }} 
        resizeMode='contain' 
        source={ isLoadingBackpack ? ( imageTransparent ) : 
        (
          themeSeleted === 'light' ?
          imageBackgroundLight
          : imageBackgroundDark
        )}
      >

      
      {
        selectedView === 'notebooks' ?
        ( ViewForNotebooks ) : 
        selectedView === 'books' ?
        ( ViewForBooks ) :
        (selectedView === 'publications' && applyPublications) ?
        ( ViewForPublications )
        : null
      }

      </ImageBackground>

    </>
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
    className=' rounded-md flex-1 flex-row flex-nowrap items-center justify-center py-2'
    >
      <Icon name={iconName} size={25} color={textColor} />
      <Text
      style={{color: textColor}}
      className='font-semibold text-sm ml-1'>{title}</Text>
  </TouchableOpacity>
  )
}