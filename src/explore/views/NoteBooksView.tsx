import React, { useEffect, useState } from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackExploreParams } from '../../routes/StackExplore';
import { useAppTheme, useBackpackStore } from '../../shared/hooks';
import { ActivityIndicatorLoadingList, LoadingLogo, NotebookItem } from '../../shared/components';
import Icon from 'react-native-vector-icons/Ionicons';
import { AddNotebookView } from './AddNotebookView';

export const NoteBooksView = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { currentBackpackNotebookList, currentBackpack, startLoadingNotebooks, isLoadingBackpack } = useBackpackStore();  
  const { texts, themeSeleted, buttons, primaryColor, screens } = useAppTheme()
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    // console.log("currentBackpackId: ", currentBackpack?.id);
    
    startLoadingNotebooks(currentBackpack?.id ?? '');
  }, []);

  return (
    <>
      {/* <View className='my-2'/> */}
      {
        isLoadingBackpack ? (
          <LoadingLogo/>
        ) : (
          <FlatList
            data={currentBackpackNotebookList}
            // ListEmptyComponent={() => <NoItemsInList/>}
            ListHeaderComponent={() => (
              <View className='flex-1 items-end justify-center my-3'>
                
              <TouchableOpacity
                className='rounded-full p-3 items-center justify-center'
                style={{ position: 'relative',  right: 10, width: 60, height:60, backgroundColor: primaryColor}}
                onPress={() => {
                  setModalVisible(true)   
                }}>
                  <Icon name="add" size={30} color={"#fff"} />
              </TouchableOpacity>
              </View>
            )}
            ItemSeparatorComponent={() => <View className='my-1 h-1'/>}
            renderItem={({item, index}) => (
                <NotebookItem
                    name={item.title}
                    key={item.id}
                    onPress={() => navigation.navigate('Notebook', {
                      id: item.id
                    })}
                />
            )}
            ListFooterComponent={() => <View className='my-10 h-10' />}
          />
        )
      }
      <Modal
        onRequestClose={() => {
            setModalVisible(false)
        }}
        animationType="fade"
        transparent={false} 
        visible={modalVisible} >

          <AddNotebookView onCloseContent={() => setModalVisible(false)}/>
            {/* <MenuContentForNotebook 
                onCloseContent={() => setModalVisible(false)}
            /> */}
      </Modal>

      
    </>
  )
}

