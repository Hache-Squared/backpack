import React from 'react'
import { Image, View } from 'react-native'
// @ts-ignore
import Pinchable from 'react-native-pinchable';
export const ImageWithPan  = ({image = ''}: {image: string}) => {
  return (
    <Pinchable>
    <View className='w-full h-[180px] items-center justify-center my-5'>
        <Image source={{uri: image}} style={{width:300, height: 200, borderRadius: 5}}/>
    </View>
    </Pinchable>
  )
}
