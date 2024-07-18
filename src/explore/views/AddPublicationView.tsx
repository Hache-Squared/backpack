import React, { FC, useState } from 'react'
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAppTheme, useBackpackStore, useExploreStore } from '../../shared/hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { usePermissionsStore } from '../../shared/hooks/usePermissionsStore';

interface AddPublicationViewProps {
    onCloseContent: () => void
}

export const AddPublicationView: FC<AddPublicationViewProps> = ({onCloseContent}) => {
    const [titlePublication, setTitlePublication] = useState('')
    const [linkPublication, setLinkPublication] = useState('')
    const { primaryColor, secondaryColor, headerMenuNotebookContent, screens } = useAppTheme();
    const { startAddingPublicationItem } = useBackpackStore()
    const [imageUri, setImageUri] = useState<string | null>(null);
    const {startRequestStoragePermission} = usePermissionsStore()
    const pickImage = async () => {
        // await startRequestStoragePermission();
        try {
            const result: DocumentPickerResponse[] = await DocumentPicker.pick({
              type: [DocumentPicker.types.images],
              copyTo: 'documentDirectory',
            });
      
            if (result.length > 0) {
              const selectedDoc = result[0];
              const fileCopyUri = `${decodeURIComponent(selectedDoc.fileCopyUri ?? '')}`;
              setImageUri(fileCopyUri);
              console.log(fileCopyUri);
            }
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              console.log('Selección cancelada');
            } else {
              throw err;
            }
          }
    };
  
  
    const handleAddNotebook = () => {
        // add backpack logic
        
        if(titlePublication.trim().length <= 0) {
            return;
        }
        startAddingPublicationItem({
            title: titlePublication,
            image: imageUri ? (`file://${decodeURIComponent(imageUri ?? '')}`) : undefined,
            link: linkPublication
        })
        setTitlePublication('')
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
            className='w-full text-lg text-center my-2 font-bold'>Crear Publicación</Text>
            
            
            <TextInput 
                className='self-center shadow-md shadow-slate-300 p-1.5 rounded-full my-2 border-2'
                style={{
                    width: Dimensions.get('screen').width * 0.88, 
                    height: 60,
                    color: primaryColor,
                    textAlign: 'center'
                }}
                value={titlePublication} 
                placeholder='Titulo de la publicación'
                placeholderTextColor={primaryColor}
                onChangeText={(text) => setTitlePublication(text)}
                returnKeyType='done'
                
                onSubmitEditing={() => {
                    // handleSearchNotebook();
                }}
            />
            <TextInput 
                className='self-center shadow-md shadow-slate-300 p-1.5 rounded-full my-2 border-2'
                style={{
                    width: Dimensions.get('screen').width * 0.88, 
                    height: 60,
                    color: primaryColor,
                    textAlign: 'center'
                }}
                value={linkPublication} 
                placeholder='Link de la publicación (Opcional)'
                placeholderTextColor={primaryColor}
                onChangeText={(text) => setLinkPublication(text)}
                returnKeyType='done'
                
                onSubmitEditing={() => {
                    // handleSearchNotebook();
                }}
            />
            <TouchableOpacity 
                onPress={pickImage} 
                className='w-10/12 rounded-full my-2 py-2 self-center flex flex-row flex-nowrap items-center justify-center'
                style={{backgroundColor: "#0984e3"}}
                >
                <Icon name='image' size={40} color={"#fff"}/>
                <Text 
                className='text-lg text-center'
                style={{
                    color: "#ffffff",
                    fontWeight: 'bold'
                }}
                >
                    Seleccionar Imagen
                </Text>
            </TouchableOpacity>
            {
                imageUri &&
                (
                    <Text 
                    style={{ color: screens.titleColor }}  
                    className='w-full text-lg text-center my-2 font-bold'>Imagen adjunta</Text>
                )
            }
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
                    Aceptar
                </Text>
            </TouchableOpacity>
            
        </View>
        

    </View>
  )
}
