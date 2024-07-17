import React, { useEffect, useState } from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import { ActivityIndicatorLoadingList, LoadingLogo, PublicationItem } from '../../shared/components'
import { useAppTheme, useBackpackStore } from '../../shared/hooks'
import { NoItemsInList } from '../../shared/views'
import { AddPublicationView } from './AddPublicationView'
import Icon from 'react-native-vector-icons/Ionicons';

export const PublicationsView = () => {
  const { currentBackpackPublicationList, currentBackpack, startLoadingPublications,isLoadingBackpack } = useBackpackStore();
  const [modalVisible, setModalVisible] = useState(false);
  const { texts, themeSeleted, buttons, primaryColor, screens } = useAppTheme()
  useEffect(() => {
    startLoadingPublications(currentBackpack?.id ?? '');
  }, []);
  return (
    <>
      
      {
        isLoadingBackpack ? (
          
            
            <LoadingLogo/>
           
        ) : (
          <FlatList
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
            data={currentBackpackPublicationList}
            // ListEmptyComponent={() => <NoItemsInList/>}
            ItemSeparatorComponent={() => <View className='my-0.5 h-0.5'/>}
            renderItem={({item, index}) => (
              <PublicationItem
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  link={item.link}
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

          <AddPublicationView onCloseContent={() => setModalVisible(false)}/>
            {/* <MenuContentForNotebook 
                onCloseContent={() => setModalVisible(false)}
            /> */}
      </Modal>
    </>
  )
}
