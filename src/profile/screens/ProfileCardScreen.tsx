import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

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
      
        <TouchableOpacity className='w-11/12 self-center my-2 rounded-md shadow-md shadow-purple-300 bg-white py-2 items-center justify-center'>
            <Text style={{
              fontWeight:"bold",
              color:"#111",
              textAlign:"center",
            }}>
                Tema Claro / Oscuro
            </Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-11/12 self-center my-2 rounded-md shadow-md shadow-purple-300 bg-white py-2 items-center justify-center'>
            <Text style={{
              fontWeight:"bold",
              color:"#111",
              textAlign:"center",
            }}>
                Libretas Guardadas
            </Text>
        </TouchableOpacity>
        <TouchableOpacity className='w-11/12 self-center my-2 rounded-md shadow-md shadow-purple-300 bg-white py-2 items-center justify-center'>
            <Text style={{
              fontWeight:"bold",
              color:"#111",
              textAlign:"center",
            }}>
                Libros Guardados
            </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export { ProfileCardScreen }
