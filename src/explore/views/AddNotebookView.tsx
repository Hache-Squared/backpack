import React, { FC, useState } from 'react'
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAppTheme, useBackpackStore, useExploreStore } from '../../shared/hooks';
import Icon from 'react-native-vector-icons/Ionicons';

interface AddNotebookViewProps {
    onCloseContent: () => void
}

export const AddNotebookView: FC<AddNotebookViewProps> = ({onCloseContent}) => {
    const [nameNotebook, setNameNotebook] = useState('')
    const { primaryColor, secondaryColor, headerMenuNotebookContent, screens } = useAppTheme();
    const { startAddingNotebookItem } = useBackpackStore()
    const handleAddNotebook = () => {
        // add backpack logic
        
        if(nameNotebook.trim().length <= 0) {
            return;
        }
        startAddingNotebookItem({
            title: nameNotebook,
            
        })
        setNameNotebook('')
        onCloseContent()
    }

  return (
    <View className='flex-1'>
        <View className='w-full flex flex-row items-center justify-end '>
            <TouchableOpacity
            onPress={onCloseContent}
            style={{ backgroundColor: headerMenuNotebookContent.buttonMenuBackgroundColor}}
            className='p-1 mr-2 mt-2 rounded-lg '>
                <Icon name='close' size={40} color={headerMenuNotebookContent.buttonMenuLabelColor}/>
            </TouchableOpacity>
        </View>
        <View className='flex-1 items-center justify-center'>

            <Text 
            style={{ color: screens.titleColor }}  
            className='w-full text-lg text-center my-2 font-bold'>Crear tema</Text>
            
            <TextInput 
                className='self-center shadow-md shadow-slate-300 p-3 rounded-lg my-5'
                style={{
                    width: Dimensions.get('screen').width * 0.88, 
                    height: 80,
                    color: primaryColor,
                    textAlign: 'center'
                }}
                value={nameNotebook} 
                placeholder='Ingrese el nombre del tema'
                placeholderTextColor={primaryColor}
                onChangeText={(text) => setNameNotebook(text)}
                returnKeyType='done'
                
                onSubmitEditing={() => {
                    // handleSearchNotebook();
                }}
            />
            <TouchableOpacity 
                onPress={handleAddNotebook} 
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
                    Registrar
                </Text>
            </TouchableOpacity>
        </View>
        

    </View>
  )
}
