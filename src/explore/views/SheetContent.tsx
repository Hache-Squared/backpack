import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { ImageWithPan } from '../components/SheetComponents/ImageWithPan';
import { FlatList, View } from 'react-native';
import { SheetExampleData } from '../../data/SheetExampleData';
import { SheetContentType } from '../../types/SheetContentTypes';
import { SheetContentSubtitle, SheetContentText, SheetContentYoutubeVideo } from '../components';

export const SheetContent = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <SheetContentYoutubeVideo/>
        <FlatList
          data={SheetExampleData}
          ListFooterComponent={() => (
            <View className='my-14'/>
          )}
          renderItem={({item, index}) => {
            if(item?.type === SheetContentType.Image){
              return(
                <ImageWithPan
                  key={index}
                  image={item?.content}
                />
              )
            }else if(item?.type === SheetContentType.Subtitle) {
              return(
                <SheetContentSubtitle
                  subtitle={item?.content}
                  key={index}
                />
              )
            }
            else if(item?.type === SheetContentType.Text) {
              return(
                <SheetContentText
                  content={item?.content}
                  key={index}
                />
              )
            }else{
              return null;
            }
          }}
        />

       {
        /*
          <View className='w-full flex flex-row items-center justify-between'>
            <TouchableOpacity
            onPress={() => setModalVisible(true)}
            className='p-1 ml-2 mt-2 rounded-lg bg-gray-200'>
                <Icon name='list-outline' size={40} color={"#111"}/>
            </TouchableOpacity>

            <View className='mx-2'>
                <Text className='font-semibold text-md'>Nombre de la libreta / Titulo de la hoja actual </Text>
            </View>
        </View>
        <Modal
            onRequestClose={() => {
                setModalVisible(false)
            }}
            animationType="fade"
            transparent={false} 
            visible={modalVisible} >
             

            <ImageWithZoomNative/>
        </Modal>
        
        */

       }
     
    </>
  )
}
