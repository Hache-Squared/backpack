import React, { FC, useEffect, useState } from 'react'
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme, useNotebookStore } from '../../shared/hooks';
import { MenuContentForNotebook, SheetContent } from './';
import { WelcomeToNoteBook } from './WelcomeToNoteBook';
import { SheetDownloadButton } from '../../shared/components/SheetComponents/SheetDownloadButton';


export const NoteBookContent = () => {
   const [modalVisible, setModalVisible] = useState(false);
   const { sheetContent, headerMenuNotebookContent, screens } = useAppTheme();
   const { title, currentSheetShowing } = useNotebookStore();
   
  return (
    <>
        <View 
        style={{ backgroundColor: screens.primaryColor}}
        className='w-full flex flex-row items-center justify-normal'>
            <TouchableOpacity 
            onPress={() => setModalVisible(true)}
            style={{ backgroundColor: headerMenuNotebookContent.buttonMenuBackgroundColor}}
            className='p-0.5 ml-2 my-1 rounded-lg self-start'>
                <Icon name='list-outline' size={40} color={headerMenuNotebookContent.buttonMenuLabelColor}/>
            </TouchableOpacity>

            <View className='mx-2 items-center '>
                <Text 
                style={{color: sheetContent.sheetTitle}}
                className='font-semibold text-md text-center'>{currentSheetShowing ? `${currentSheetShowing?.title}` : ""}
                </Text>
            </View>
            {/* {
                currentSheetShowing && (
                    <SheetDownloadButton/>
                )
            } */}
        </View>
        {
            currentSheetShowing ? 
            (
                <>
                    <SheetContent/>
                    <View className='absolute bottom-28 right-4'>
                        <SheetDownloadButton/>
                    </View>
                </>
            ) : <WelcomeToNoteBook/>
        }


        <Modal
            onRequestClose={() => {
                setModalVisible(false)
            }}
            animationType="fade"
            transparent={true} 
            visible={modalVisible} >

                <MenuContentForNotebook 
                    onCloseContent={() => setModalVisible(false)}
                />
        </Modal>
    </>
  )
}
