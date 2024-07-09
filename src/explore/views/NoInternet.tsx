import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { useAppTheme } from '../../shared/hooks'
const imageNoWifi = require('../../assets/illustrations/no_wifi.png')

export const NoInternet = () => {
  const { screens, primaryColor } = useAppTheme()
  return (
    // <ScrollView>
        <View 
        style={{backgroundColor: screens.secondaryColor}}
        className='flex-1 items-center justify-center '>
            <Text 
            className='w-full text-2xl text-center font-bold'
            style={{color: primaryColor}}>UPS!</Text>
            <Image source={imageNoWifi} className='w-full object-cover'/>
            <Text 
            className='w-full text-lg text-center font-semibold'
            style={{color: primaryColor}}>Sin Internet</Text>
        </View>
    
  )
}
