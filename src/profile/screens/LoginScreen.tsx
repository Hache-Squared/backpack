import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAppTheme, useExploreStore, useLocalStorage } from '../../shared/hooks'
import { NavigationProp, useNavigation } from '@react-navigation/native'
const welcomeNotebookImg  = require('../../assets/logos/slogan_fime_blanco.png')
const bearImg  = require('../../assets/logos/oso_fime_blanco.png')
import Icon from 'react-native-vector-icons/Ionicons';
import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';
import { StackLoginParams } from '../../routes/StackLogin'

type TypeProfile = 'Teacher' | 'Student'

const LoginScreen = () => {
  const { texts, primaryColor, secondaryColor, screens } = useAppTheme()
  const navigation = useNavigation<NavigationProp<StackLoginParams>>();
  const [typeProfileValue, setTypeProfileValue] = useState<TypeProfile>('Teacher')
  const [userText, setUserText] = useState<string>('')
  const [passwordText, setPasswordText] = useState<string>('')
  const { startLoginUser } = useExploreStore()
  const validateFields = () => {
    const trimmedUserText = userText.trim();
    const trimmedPasswordText = passwordText.trim();

    if (!trimmedUserText) {
      Alert.alert('Error', 'El campo de usuario no puede estar vacío o contener solo espacios en blanco.');
      return false;
    }

    if (!trimmedPasswordText) {
      Alert.alert('Error', 'El campo de contraseña no puede estar vacío o contener solo espacios en blanco.');
      return false;
    }

    return true;
  };
  const handleLogin = () => {
    if (validateFields()) {
      startLoginUser({
        user: userText,
        password: passwordText,
        isAdmin: typeProfileValue === 'Teacher'
      });
      navigation.navigate('Main');

    }

  }
  return (
    // <ScrollView className='flex-1'>

    <View 
    style={{backgroundColor: primaryColor}}
    className='flex-1 h-full  items-end justify-end'>
      <View className='w-full flex-col justify-center items-center self-center'>

        <Image source={bearImg} style={{
          width:100,
          height:100,
          objectFit:'contain'
        }}/>
        <Image source={welcomeNotebookImg} style={{
          width:110,
          height:110,
          objectFit:'contain'
        }}/>

      </View>

      <View 
      style={{
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
      }}
      className='w-full h-4/6 justify-center self-center bg-white '>

      
      <Text className='w-full text-center font-bold text-black text-2xl'>Iniciar Sesión</Text>
      <View className='w-11/12 self-center'>

        <RNPickerSelect
          placeholder={{ label: 'Selecciona tu rol',value: typeProfileValue,  color: '#fff', }}
            textInputProps={{
            placeholderTextColor: '#111',          
          }}
            
          style={{
            placeholder: {
              color: '#111'
            },
            viewContainer: {
              borderWidth: 1,
              borderColor: '#111',
              borderRadius: 10,
              paddingHorizontal: 5,
              paddingVertical: 3,
            },

            inputIOS: {
              color: 'black',
            },
            inputAndroid: {
              color: 'black',
            },
            iconContainer: {
              width: 30,
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              top: 4,
              right: 12
              // backgroundColor: "#111" 
            }
          }}
          Icon={(props) => {
            return (
                <Icon {...props} name="caret-down" size={24} color="green" />
            );
          }}
          onValueChange={(value: TypeProfile) => setTypeProfileValue(value)}
          value={typeProfileValue}
          items={[
            { label: 'Profesor', value: 'Teacher' },
            { label: 'Estudiante', value: 'Student' },
            
          ]}
        />
      </View>

       
      <>
        <View className='w-11/12 self-center  rounded-lg p-3'>
          <Text className='font-bold text-lg text-black'>
            {
              typeProfileValue === 'Teacher' ? 'Número De Empleado:'
              : typeProfileValue === 'Student' ? 'Matrícula Estudiantil'
              : 'Credenciales'
            }
            
          </Text>
          <TextInput
            className='w-full self-center shadow-md shadow-slate-300 p-1.5 rounded-lg  border-2 border-black text-center'
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, color: primaryColor }}
            value={userText}
            placeholder={
                typeProfileValue === 'Teacher' ? 'Número De Empleado:'
                : typeProfileValue === 'Student' ? 'Matrícula Estudiantil'
                : 'Credenciales'
            }
            placeholderTextColor={primaryColor}
            onChangeText={(text) => setUserText(text)}
            />
          
        </View>
        <View className='w-11/12 self-center  rounded-lg p-3'>
          <Text className='font-bold text-lg text-black'>Contraseña:</Text>
          <TextInput
            className='w-full self-center shadow-md shadow-slate-300 p-1.5 rounded-lg  border-2 border-black text-center'
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, color: primaryColor }}
            value={passwordText}
            secureTextEntry={true}
            placeholder='Contraseña'
            placeholderTextColor={primaryColor}
            onChangeText={(text) => setPasswordText(text)}
            />
          
        </View>
        <TouchableOpacity 
            onPress={handleLogin} 
            className='w-10/12 rounded-full my-2 py-2 self-center'
            style={{backgroundColor: primaryColor}}
            >
            <Text 
            className='text-lg text-center'
            style={{
                color: secondaryColor,
                fontWeight: 'bold'
            }}
            >
                Iniciar Sesión
            </Text>
        </TouchableOpacity>
      </>
      

      </View>

      {/* <View className='h-1 my-1'/> */}
    </View>
    
  )
}



export { LoginScreen }
