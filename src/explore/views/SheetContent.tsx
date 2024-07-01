import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { ImageWithZoom } from '../components'
import { ImageWithZoomNative } from '../components/SheetComponents/ImageWithZoomNative'
import Icon from 'react-native-vector-icons/Ionicons';
import { ImageWithPan } from '../components/SheetComponents/ImageWithPan';
import { GestureDetector } from 'react-native-gesture-handler';

export const SheetContent = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
       <ImageWithPan  image='https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

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
