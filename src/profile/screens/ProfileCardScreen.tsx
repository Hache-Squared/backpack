import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ButtonInProfile, SwitchThemeButtons } from '../components'
import { useAppTheme, useLocalStorage } from '../../shared/hooks'
import { StackProfileParams } from '../../routes/StackProfile'
import { NavigationProp, useNavigation } from '@react-navigation/native'
const welcomeNotebookImg  = require('../../assets/logos/slogan_fime.png')

const ProfileCardScreen = () => {
  const { texts, primaryColor, secondaryColor, screens } = useAppTheme()
  const navigation = useNavigation<NavigationProp<StackProfileParams>>();
  return (
    <ScrollView className='flex-1'>

    
      <View 
      style={{backgroundColor: screens.secondaryColor}}
      className='flex-1  flex-col items-center gap-2 my-2'>
        <Image source={welcomeNotebookImg} style={{
          width:200,
          height:200,
          objectFit:'contain'
        }}/>
        <View 
        style={{backgroundColor: screens.primaryColor}}
        className='w-10/12 flex flex-col gap-2 bg-white py-4 rounded-2xl items-center justify-center'>
          <Text style={{
            fontWeight:"bold",
            color:texts.labelColor
          }}>
              ¡Bienvenido!
          </Text>
            
          <ButtonInProfile
          
            title='Mis Descargas'
            icon='briefcase'
            onPress={() => navigation.navigate('MyBackpack')}
          />
          
          {/* <SwitchThemeButtons/> */}
        </View>

        <View 
        style={{backgroundColor: screens.primaryColor}}
        className='w-10/12 flex flex-col bg-white py-4 rounded-2xl items-center justify-center'>
          <Text 
          className=' m-2'
          style={{ color:texts.labelColor }}>
              Backpack es una aplicación móvil diseñada para que los estudiantes de la Facultad de Ingeniería Mecánica y Eléctrica puedan acceder a recursos y publicaciones sobre temas importantes de sus materias de forma sencilla.
          </Text>

        </View>

        <View 
        style={{backgroundColor: screens.primaryColor}}
        className='w-10/12 flex flex-col bg-white py-4 rounded-2xl items-center justify-center'>
          <Text 
          className='font-semibold m-2'
          style={{ color:texts.labelColor }}>
              Instructora: Dra. NORMA EDITH MARIN MARTINEZ
          </Text>
          <Text 
          className='font-semibold m-2'
          style={{ color:texts.labelColor }}>
              AGHH - 2127874
          </Text>
          <Text 
          className='font-semibold m-2'
          style={{ color:texts.labelColor }}>
              ARP - 2127873
          </Text>

        </View>
      </View>

      <View className='h-6 my-10'/>
      </ScrollView>
  )
}



export { ProfileCardScreen }
