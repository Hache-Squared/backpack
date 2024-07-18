import React, { FC, useState } from 'react'
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAppTheme, useExploreStore } from '../../shared/hooks';
import Icon from 'react-native-vector-icons/Ionicons';

interface AddBackpackViewProps {
    onCloseContent: () => void
}

export const AddBackpackView: FC<AddBackpackViewProps> = ({onCloseContent}) => {
    const [nameBackpack, setNameBackpack] = useState('')
    const { primaryColor, secondaryColor, headerMenuNotebookContent, screens } = useAppTheme();
    const { startAddingBackpackItem } = useExploreStore()
    const handleAddBackpack = () => {
        // add backpack logic
        
        if(nameBackpack.trim().length <= 0) {
            return;
        }
        startAddingBackpackItem({
            title: nameBackpack,
            image: ''
        })
        setNameBackpack('')
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
            className='w-full text-lg text-center my-2 font-bold'>Agregar Plan De Estudio</Text>
            
            <TextInput 
                className='self-center shadow-md shadow-slate-300 p-1.5 rounded-full my-5 border-2'
                style={{
                    width: Dimensions.get('screen').width * 0.88, 
                    height: 50,
                    color: primaryColor,
                    textAlign: 'center'
                }}
                value={nameBackpack} 
                placeholder='Ingrese el nombre del plan de estudio'
                placeholderTextColor={primaryColor}
                onChangeText={(text) => setNameBackpack(text)}
                returnKeyType='done'
                
                onSubmitEditing={() => {
                    // handleSearchNotebook();
                }}
            />
            <TouchableOpacity 
                onPress={handleAddBackpack} 
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
