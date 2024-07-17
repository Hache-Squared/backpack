import React, { FC, useState } from 'react'
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAppTheme, useExploreStore, useNotebookStore } from '../../shared/hooks';
import Icon from 'react-native-vector-icons/Ionicons';

interface AddSheetViewProps {
    onCloseContent: () => void
}

export const AddSheetView: FC<AddSheetViewProps> = ({onCloseContent}) => {
    const [nameSheet, setNameSheet] = useState('')
    const { primaryColor, secondaryColor, headerMenuNotebookContent, screens } = useAppTheme();
    const { startAddingMenuSheetItemList } = useNotebookStore()
    const handleAddBackpack = () => {
        // add backpack logic
        
        if(nameSheet.trim().length <= 0) {
            return;
        }
        startAddingMenuSheetItemList({
            title: nameSheet,
        })
        setNameSheet('')
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
            className='w-full text-lg text-center my-2 font-bold'>Agregar un subtema nuevo</Text>
            
            <TextInput 
                className='self-center shadow-md shadow-slate-300 p-3 rounded-lg my-5'
                style={{
                    width: Dimensions.get('screen').width * 0.88, 
                    height: 80,
                    color: primaryColor,
                    textAlign: 'center'
                }}
                value={nameSheet} 
                placeholder='Ingrese el nombre del subtema'
                placeholderTextColor={primaryColor}
                onChangeText={(text) => setNameSheet(text)}
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
