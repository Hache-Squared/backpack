import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ButtonInProfile, SwitchThemeButtons } from '../components'
import { useAppTheme, useLocalStorage } from '../../shared/hooks'
import { usePermissionsStore } from '../../shared/hooks/usePermissionsStore'
import { StackProfileParams } from '../../routes/StackProfile'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const ProfileCardScreen = () => {
  const { texts } = useAppTheme()
  const { permissionStorageStatus, startRequestStoragePermission } = usePermissionsStore()
  const { createDirectories } = useLocalStorage()
  const navigation = useNavigation<NavigationProp<StackProfileParams>>();
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
            
            {/* <Text style={{
              fontWeight:"bold",
              color:texts.labelColor
            }}>
                {permissionStorageStatus}
            </Text> */}
        </View>
        
        {/* <ButtonInProfile
          title='Habilitar permiso '
          icon='book'
          onPress={() => startRequestStoragePermission()}
        />

        <ButtonInProfile
          title='Crear Carpetas'
          icon='book'
          onPress={() => createDirectories()}
        /> */}
        <ButtonInProfile
          title='Mi Mochila'
          icon='briefcase'
          onPress={() => navigation.navigate('MyBackpack')}
        />
        
        <SwitchThemeButtons/>

      </View>
    </ScrollView>
  )
}



export { ProfileCardScreen }
