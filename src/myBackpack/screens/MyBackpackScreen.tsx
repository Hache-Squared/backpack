import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SwitchSectionButtons } from '../components'
import { useAppTheme, useLocalStorage } from '../../shared/hooks'
import { usePermissionsStore } from '../../shared/hooks/usePermissionsStore'

const MyBackpackScreen = () => {
  const { texts } = useAppTheme()
  const { permissionStorageStatus, startRequestStoragePermission } = usePermissionsStore()
  const { createDirectories } = useLocalStorage()
  return (
    <ScrollView>
      
      <View className='w-full -red-300'>
       
        <SwitchSectionButtons/>

      </View>
    </ScrollView>
  )
}



export { MyBackpackScreen }
