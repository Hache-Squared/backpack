import React, { FC, useEffect, useState } from 'react'
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme, useNotebookStore } from '../../shared/hooks';
import { MenuContentForNotebook, SheetContent } from './';


export const NoteBookContent = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const { menuNotebookContent, headerMenuNotebookContent } = useAppTheme();
   const { title, currentSheetShowing } = useNotebookStore();
   
  return (
    <>
        <View className='w-full flex flex-row items-center justify-between'>
            <TouchableOpacity 
            onPress={() => setModalVisible(true)}
            className='p-1 ml-2 mt-2 rounded-lg bg-gray-200'>
                <Icon name='list-outline' size={40} color={headerMenuNotebookContent.buttonMenuLabelColor}/>
            </TouchableOpacity>

            <View className='mx-2'>
                <Text 
                style={{color: headerMenuNotebookContent.buttonMenuLabelColor}}
                className='font-semibold text-md'>{title} {currentSheetShowing ? " / Titulo de la hoja actual " : " / Bienvenido"}
                </Text>
            </View>
        </View>
        <SheetContent/>


        <Modal
            onRequestClose={() => {
                setModalVisible(false)
            }}
            animationType="fade"
            transparent={false} 
            visible={modalVisible} >

                <MenuContentForNotebook 
                    onCloseContent={() => setModalVisible(false)}
                />
        </Modal>
    </>
  )
}
