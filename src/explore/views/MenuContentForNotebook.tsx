import React, { FC } from 'react'
import { useAppTheme, useNotebookStore } from '../../shared/hooks'
import { Alert, FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { SheetMenuItem } from '../components';

interface MenuContentForNotebook {
    onCloseContent: () => void
}

export const MenuContentForNotebook: FC<MenuContentForNotebook> = ({ onCloseContent }) => {

  const { menuNotebookContent, headerMenuNotebookContent, screens } = useAppTheme()
  const { menuSheetItemList, title, startLoadingSheet } = useNotebookStore()
  const handleSheetToLoad = (id: string) => {
    startLoadingSheet(id)
    onCloseContent()
  }
  return (

    <SafeAreaView className='flex-1' style={{backgroundColor: screens.primaryColor}}>
    <View className='w-full flex flex-row items-center justify-end '>
        <TouchableOpacity
        onPress={onCloseContent}
        style={{ backgroundColor: headerMenuNotebookContent.buttonMenuBackgroundColor}}
        className='p-1 mr-2 mt-2 rounded-lg '>
            <Icon name='close-circle-outline' size={40} color={headerMenuNotebookContent.buttonMenuLabelColor}/>
        </TouchableOpacity>
    </View>
    <ScrollView>

        <View className='w-full flex flex-col mt-1'>
            <Text 
            style={{ backgroundColor: menuNotebookContent.titleBackgroundColor, color: menuNotebookContent.titleTextColor}}
            className='text-2xl font-bold mx-3 p-2 rounded-lg'>{title}</Text>
        </View>


        <View className='w-full flex flex-col items-end'>

        {
            menuSheetItemList.map((sheet, index) => (
                <SheetMenuItem 
                onPress={() => handleSheetToLoad(sheet.id)}
                colorStatus={index < 5? menuNotebookContent.colorStatusActive : menuNotebookContent.colorStatusInactive}
                title={sheet.title} key={sheet.title}/>
            ))
        }
    
            
        </View>
    </ScrollView>


    
</SafeAreaView>

  )
}
