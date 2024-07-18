import React, { FC, useEffect, useState } from 'react'
import { Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme, useExploreStore, useNotebookStore } from '../../shared/hooks';
import { MenuContentForNotebook, NewContentForSheetView, SheetContent } from './';
import { WelcomeToNoteBook } from './WelcomeToNoteBook';
import { SheetDownloadButton } from '../../shared/components/SheetComponents/SheetDownloadButton';


export const NoteBookContent = () => {
   const [modalVisibleAddSheet, setModalVisibleAddSheet] = useState(false);
   const [modalVisibleShowMenu, setModalVisibleShowMenu] = useState(false);
   const [modalVisibleAddContent, setModalVisibleAddContent] = useState(false);
   const { sheetContent, headerMenuNotebookContent, screens,primaryColor } = useAppTheme();
   const { title, currentSheetShowing } = useNotebookStore();
   const { isUserAdmin } = useExploreStore()
  return (
    <>
        <View 
        style={{ backgroundColor: screens.primaryColor}}
        className='w-full flex flex-row items-center justify-normal'>
            <TouchableOpacity 
            onPress={() => setModalVisibleShowMenu(true)}
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
                    {
                        currentSheetShowing?.content?.length !== 0 && (
                            <>
                            <View className='absolute bottom-28 right-4'>
                                <SheetDownloadButton/>
                            </View>
                            </>
                        )
                    }

                    {
                        isUserAdmin &&
                        <View className='absolute bottom-28 left-4'>
                            <TouchableOpacity
                            className='w-[45px] h-[45px] rounded-md items-center justify-center'
                            style={{ backgroundColor: primaryColor}}
                            // style={{ position: 'absolute',  left: 10, width: 60, height:60, backgroundColor: primaryColor}}
                            onPress={() => {
                                setModalVisibleAddContent(true)   
                            }}>
                                <Icon name="add" size={30} color={"#fff"} />
                            </TouchableOpacity>
                        </View>
                    }
                </>
            ) : <WelcomeToNoteBook/>
        }


        <Modal
            onRequestClose={() => {
                setModalVisibleShowMenu(false)
            }}
            animationType="fade"
            // transparent={true} 
            visible={modalVisibleShowMenu} >

                <MenuContentForNotebook 
                    onCloseContent={() => setModalVisibleShowMenu(false)}
                />
        </Modal>


        

      <Modal
        onRequestClose={() => {
            setModalVisibleAddSheet(false)
        }}
        animationType="fade"
        transparent={false} 
        visible={modalVisibleAddSheet} >

          <NewContentForSheetView onCloseContent={() => setModalVisibleAddSheet(false)}/>
            {/* <MenuContentForNotebook 
                onCloseContent={() => setModalVisible(false)}
            /> */}
      </Modal>

      <Modal
        onRequestClose={() => {
            setModalVisibleAddContent(false)
        }}
        animationType="fade"
        transparent={false} 
        visible={modalVisibleAddContent} >

          <NewContentForSheetView onCloseContent={() => setModalVisibleAddContent(false)}/>
            {/* <MenuContentForNotebook 
                onCloseContent={() => setModalVisible(false)}
            /> */}
      </Modal>
    </>
  )
}
