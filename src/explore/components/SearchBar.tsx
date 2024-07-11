import React, { useState } from 'react'
import { TextInput, View, Dimensions, TouchableOpacity, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../../shared/hooks';
import { StackExploreParams } from '../../routes/StackExplore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
export const SearchBar = () => {
    const [searchText, setSearchText] = useState('')
    const { primaryColor, secondaryColor } = useAppTheme();
    const navigation = useNavigation<NavigationProp<StackExploreParams>>();
    const handleSearchNotebook = () => {
        if (!searchText || searchText?.trim()?.length < 4) {
            return Alert.alert('Búsqueda Inválida', 'Por favor ingrese un término de búsqueda válido (más de 3 letras).');
        }
        navigation.navigate('SearchNotebookResults', {
            searchText,
        });
    }
  return (
    <View 
    style={{ backgroundColor:secondaryColor }}
    className='w-10/12 flex-row flex-nowrap items-center justify-center bg-white rounded-xl shadow-sm shadow-blue-200'>
        <TextInput 
            className=''
            style={{
                width: Dimensions.get('screen').width * 0.65, 
                height: 50,
                color: primaryColor
            }}
            value={searchText}
            placeholder='Ingrese el nombre de una materia'
            placeholderTextColor={primaryColor}
            onChangeText={(text) => setSearchText(text)}
            returnKeyType='search'
            onSubmitEditing={() => {
                handleSearchNotebook();
            }}
        />
        <TouchableOpacity onPress={handleSearchNotebook}>
            <Icon name='search' size={40} color={primaryColor}/>
        </TouchableOpacity>
    </View>
  )
}
