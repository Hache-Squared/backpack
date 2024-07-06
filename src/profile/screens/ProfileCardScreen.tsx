import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ButtonInProfile, SwitchThemeButtons } from '../components'
import { useAppTheme } from '../../shared/hooks'
import { usePermissionsStore } from '../../shared/hooks/usePermissionsStore'

const ProfileCardScreen = () => {
  const { texts } = useAppTheme()
  const { permissionStorageStatus, startRequestStoragePermission } = usePermissionsStore()
  
  return (
    <ScrollView>
      
      <View className='w-full -red-300'>
      <View style={{
        width:"100%",
        height:200,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 50,
        margin:10,
        // backgroundColor:"#fff"
    }}>
      {
        /*
        
        <Image source={{uri: ''}} style={{
           width:150,
           height:150,
           objectFit:'contain'
        }}/>
        
        */
      }
            <Text style={{
              fontWeight:"bold",
              color:texts.labelColor
            }}>
                ¡Bienvenido A Backpack!
            </Text>
            
            <Text style={{
              fontWeight:"bold",
              color:texts.labelColor
            }}>
                {permissionStorageStatus}
            </Text>
        </View>
        
        <ButtonInProfile
          title='Habilitar permiso '
          icon='book'
          onPress={() => startRequestStoragePermission()}
        />
        
        <SwitchThemeButtons/>
        
        <ButtonInProfile
          title='Libretas Guardadas'
          icon='book'
          onPress={() => null}
        />
        <ButtonInProfile
          title='Libros Guardados'
          icon='library'
          onPress={() => null}
        />

      </View>
    </ScrollView>
  )
}



export { ProfileCardScreen }
