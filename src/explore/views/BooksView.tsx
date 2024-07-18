import React, { useEffect, useState } from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import { ActivityIndicatorLoadingList, BookItem, LoadingLogo } from '../../shared/components'
import { StackExploreParams } from '../../routes/StackExplore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useAppTheme, useBackpackStore, useExploreStore } from '../../shared/hooks';
import { NoItemsInList } from '../../shared/views';
import { AddBookView } from './AddBookView';
import Icon from 'react-native-vector-icons/Ionicons';
export const BooksView = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { currentBackpackBookList, currentBackpack, startLoadingBooks, isLoadingBackpack } = useBackpackStore();  
  const { texts, themeSeleted, buttons, primaryColor, screens } = useAppTheme()
  const { isUserAdmin } = useExploreStore()
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    startLoadingBooks(currentBackpack?.id ?? '');
  }, []);

  return (
    <>
      {/* <View className='my-2'/> */}
      {
        isLoadingBackpack ? (
          <LoadingLogo/>
        ) : 
        (
          <FlatList
            data={currentBackpackBookList}
            ListHeaderComponent={() => (
              <View className='flex-1 items-end justify-center my-3'>
                
              {
                isUserAdmin &&
                <TouchableOpacity
                  className='rounded-full p-3 items-center justify-center'
                  style={{ position: 'relative',  right: 10, width: 60, height:60, backgroundColor: primaryColor}}
                  onPress={() => {
                    setModalVisible(true)   
                  }}>
                    <Icon name="add" size={30} color={"#fff"} />
                </TouchableOpacity>
              }
              </View>
            )}
            // ListEmptyComponent={() => <NoItemsInList/>}
            ItemSeparatorComponent={() => <View className='my-1 h-1'/>}
            renderItem={({item, index}) => (
                <BookItem
                    name={item.title}
                    key={item.id}
                    onPress={() => navigation.navigate('ResourceView',{
                      uriResource: item.uriDocument,
                      data: item,
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

          <AddBookView onCloseContent={() => setModalVisible(false)}/>
            {/* <MenuContentForNotebook 
                onCloseContent={() => setModalVisible(false)}
            /> */}
      </Modal>

    </>
  )
}

