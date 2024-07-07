import React, { FC, useEffect, useState } from 'react'
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme, useNotebookStore } from '../../shared/hooks';
import { MenuContentForNotebook, SheetContent } from './';
import { WelcomeToNoteBook } from './WelcomeToNoteBook';
import { SheetDownloadButton } from '../../shared/components/SheetComponents/SheetDownloadButton';


export const NoteBookContent = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const { sheetContent, headerMenuNotebookContent } = useAppTheme();
   const { title, currentSheetShowing } = useNotebookStore();
   
  return (
    <>
        <View className='w-full flex flex-row items-center justify-between'>
            <TouchableOpacity 
            onPress={() => setModalVisible(true)}
            style={{ backgroundColor: headerMenuNotebookContent.buttonMenuBackgroundColor}}
            className='p-1 ml-2 mt-2 rounded-lg '>
                <Icon name='list-outline' size={40} color={headerMenuNotebookContent.buttonMenuLabelColor}/>
            </TouchableOpacity>

            <View className='mx-2'>
                <Text 
                style={{color: sheetContent.sheetTitle}}
                className='font-semibold text-md'>{currentSheetShowing ? `${currentSheetShowing?.title}` : ""}
                </Text>
            </View>
            {
                currentSheetShowing && (
                    <SheetDownloadButton/>
                )
            }
        </View>
        {
            currentSheetShowing ? 
            (
                <SheetContent/>
            ) : <WelcomeToNoteBook/>
        }


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
