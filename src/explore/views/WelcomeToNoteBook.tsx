import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useAppTheme, useNotebookStore } from '../../shared/hooks'
const welcomeNotebookImg  = require('../../assets/illustrations/notebook_welcome.png')
export const WelcomeToNoteBook = () => {
  const { title } = useNotebookStore();
  const { primaryColor, texts, secondaryColor } = useAppTheme();
  const { menuSheetItemList, startLoadingSheet } = useNotebookStore();
  const handleClickStart = () => {
    let first = menuSheetItemList?.[0];
    if(first) {
      startLoadingSheet(first?.id)
    }
  }
  return (

    <ScrollView>
        <View className='flex-1 items-center'>
            <Text style={{color: primaryColor}} className='text-lg'>Bienvenid@</Text>
            <Image source={welcomeNotebookImg} className='w-full object-contain'/>
            <Text style={{color: texts.labelColor}} className='text-lg text-center'>Estas viendo el contenido de la libreta <Text style={{color: primaryColor}}> {title}</Text></Text>
            <Text style={{color: texts.labelColor}} className='text-lg text-center'>Ve al menu y selecciona la hoja a mostrar</Text>
            <Text style={{color: texts.labelColor}} className='text-lg text-center'>---- O ----</Text>
            <TouchableOpacity 
            onPress={handleClickStart}
            className='w-10/12 rounded-full my-2 py-2'
            style={{backgroundColor: primaryColor}}
            >
              <Text 
              className='text-lg text-center'
              style={{
                color: secondaryColor,
                fontWeight: 'bold'
              }}
              >
                Empezar
              </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}
