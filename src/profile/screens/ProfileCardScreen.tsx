import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ButtonInProfile, SwitchThemeButtons } from '../components'

const ProfileCardScreen = () => {
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
              color:"#111"
            }}>
                ¡Bienvenido A Backpack!
            </Text>
        </View>
      
        
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
