import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import React, {FC, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

interface ImageWithZoomProps {
  image: any;
}
export const ImageWithZoom: FC<ImageWithZoomProps> = ({image = ''}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(oldState => !oldState);
        }}
        className="w-11/12 flex bg-gray-500 items-center justify-center self-center my-2 rounded-md">
        <Image
          source={image}
          className="w-full h-[150px] object-contain rounded-md"
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <View className="w-full h-screen bg-gray-800 flex flex-col items-center justify-center">
             <GestureHandlerRootView style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
              <ImageZoom
              
                uri={image}
                minScale={0.5}
                maxScale={5}
                doubleTapScale={3}
                minPanPointers={1}
                isSingleTapEnabled
                isDoubleTapEnabled
                style={{objectFit:"contain", width: Dimensions.get("screen").width, height: 300}}                
              />
            </GestureHandlerRootView>
          </View>
      </Modal>
    </>
  );
};