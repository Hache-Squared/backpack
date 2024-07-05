import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { useAppTheme, useNotebookStore } from '../../shared/hooks'
const welcomeNotebookImg  = require('../../assets/illustrations/notebook_welcome.png')
export const WelcomeToNoteBook = () => {
  const { title } = useNotebookStore();
  const { primaryColor, texts } = useAppTheme();

  return (

    <ScrollView>
        <View className='flex-1 items-center'>
            <Text style={{color: primaryColor}} className='text-lg'>Bienvenid@</Text>
            <Image source={welcomeNotebookImg} className='w-full object-contain'/>
            <Text style={{color: texts.labelColor}} className='text-lg text-center'>Estas viendo el contenido de la libreta <Text style={{color: primaryColor}}> {title}</Text></Text>
            <Text style={{color: texts.labelColor}} className='text-lg text-center'>Ve al menu y selecciona la hoja a mostrar</Text>

        </View>
    </ScrollView>
  )
}
