import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { SheetItem } from '../../../types'
import { TouchableOpacity } from 'react-native'
import { useAppTheme, useNotebookStore } from '../../hooks'
import Icon from 'react-native-vector-icons/Ionicons';


export const SheetPrevNextContent  = () => {
  const { primaryColor } = useAppTheme()
  const { startLoadingSheet, currentSheetShowing } = useNotebookStore()
  
  const handleChangeContent = (sheetId: string = '') => {
    startLoadingSheet(sheetId)
  }
  return (
    <View className='w-full flex flex-row flex-nowrap '>
        {
            currentSheetShowing?.prev && (
                <TouchableOpacity 
                
                onPress={() => handleChangeContent(currentSheetShowing?.prev?.id)}
                className='flex-1 flex-row flex-nowrap items-center  p-0.5  '>
                    <Icon name='chevron-back' size={40} color={primaryColor}/>
                    <Text style={{color: primaryColor}} className='font-semibold text-xs'>{currentSheetShowing?.prev?.title}</Text>
                </TouchableOpacity>
            )
        }
        {
            currentSheetShowing?.next && (
                <TouchableOpacity 
                onPress={() => handleChangeContent(currentSheetShowing?.next?.id)}
                
                className='flex-1 flex-row flex-nowrap items-center  p-0.5 '>
                    <Text style={{color: primaryColor}}  className='font-semibold text-xs'>{currentSheetShowing?.next?.title}</Text>
                    <Icon name='chevron-forward' size={40} color={primaryColor}/>
                </TouchableOpacity>
            )
        }
    </View>
  )
}
