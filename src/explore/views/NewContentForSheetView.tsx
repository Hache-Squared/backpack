import React, { FC, useState } from 'react'
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import RNPickerSelect, { PickerStyle } from 'react-native-picker-select';
import { SheetContentType } from '../../types';
import { useAppTheme, useNotebookStore } from '../../shared/hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

interface NewContentForSheetViewProps {
  onCloseContent: () => void
}


export const NewContentForSheetView: FC<NewContentForSheetViewProps> = ({ onCloseContent }) => {
  const { primaryColor, secondaryColor, headerMenuNotebookContent, screens } = useAppTheme();
  const [typeElement, setTypeElement] = useState<SheetContentType>(SheetContentType.Text)
  const [typeElementText, setTypeElementText] = useState<string>('')
  const [typeElementSubtitle, setTypeElementSubtitle] = useState<string>('')
  const [typeElementImage, setTypeElementImage] = useState<string>('')
  const [imageUri, setImageUri] = useState<string | null>(null);
  const { startAddingContentToSheet } = useNotebookStore()
  const handleAddText = () => {
    startAddingContentToSheet({
      type: SheetContentType.Text,
      content: typeElementText
    })
    onCloseContent()
  }
  const handleAddSubtitle = () => {
    startAddingContentToSheet({
      type: SheetContentType.Subtitle,
      content: typeElementSubtitle
    })
    onCloseContent()
  }
  const handleAddImage = () => {
    startAddingContentToSheet({
      content: imageUri ?? '',
      type: SheetContentType.Image,
    })
    onCloseContent()
  }

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

        <View className='w-10/12 justify-center self-center'>

        
        <Text className='w-full text-center font-bold text-black text-2xl'>Añadir Elemento</Text>

        <RNPickerSelect
          placeholder={{ label: 'Seleccione el tipo de elemento',value: typeElement,  color: '#fff', }}
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
          onValueChange={(value: SheetContentType) => setTypeElement(value)}
          value={typeElement}
          items={[
            { label: 'Texto simple', value: SheetContentType.Text },
            { label: 'Subtitulo', value: SheetContentType.Subtitle },
            { label: 'Imagen', value: SheetContentType.Image },
          ]}
        />

        {
          typeElement === SheetContentType.Text && (

            <View className='w-11/12 self-center border-2 border-black my-4 rounded-lg p-3'>
              <Text className='font-bold text-lg text-black'>Inserte el texto simple:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: primaryColor }}
                value={typeElementText}
                
                onChangeText={(text) => setTypeElementText(text)}
              />
              <ButtonAddElement onPress={handleAddText}/>
            </View>
          )
        }

        {
          typeElement === SheetContentType.Subtitle && (

            <View className='w-11/12 self-center border-2 border-black my-4 rounded-lg p-3'>
              <Text className='font-bold text-lg text-black'>Subtitulo:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, color: primaryColor }}
                value={typeElementSubtitle}
                onChangeText={(text) => setTypeElementSubtitle(text)}
              />
              <ButtonAddElement onPress={handleAddSubtitle}/>
            </View>
          )
        }

        {
          typeElement === SheetContentType.Image && (

            <View className='w-11/12 self-center border-2 border-black my-4 rounded-lg p-3'>
              <Text className='font-bold text-lg text-black'>Adjunte la imagen:</Text>
              <TouchableOpacity 
                onPress={pickImage} 
                className='w-10/12 rounded-full my-2 py-2 self-center flex flex-row flex-nowrap items-center justify-center'
                style={{backgroundColor: "#3498db"}}
                >
                <Icon name='image' size={30} color={"#fff"}/>
                <Text 
                className='text-base text-center'
                style={{
                    color: "#ffffff",
                    fontWeight: 'bold',
                    marginLeft: 5

                }}
                >
                    Seleccionar Imagen
                </Text>
            </TouchableOpacity>
            {
                imageUri &&
                (
                  <View className='w-full items-center justify-center'>

                    <Image
                    source={{ uri: imageUri}}
                    
                    style={{ width: Dimensions.get('screen').width * 0.7, height: 200 }}  
                    className='object-contain rounded-lg'/>
                  </View>
                )
            }
              <ButtonAddElement onPress={handleAddImage}/>
            </View>
          )
        }
        </View>

    </View>
  )
}

interface ButtonAddElementProps {
  title?: string;
  onPress: () => void;
}

const ButtonAddElement: FC<ButtonAddElementProps> = ({onPress, title}) => {
  const { primaryColor, secondaryColor, headerMenuNotebookContent, screens } = useAppTheme();
  
    return(<TouchableOpacity
    className='w-10/12 rounded-full my-2 py-2 self-center'
                style={{backgroundColor: primaryColor}}
      
      onPress={onPress}
    >
      <Text
      className='text-lg text-center'
      style={{
          color: secondaryColor,
          fontWeight: 'bold'
      }}
      >Aceptar</Text>
    </TouchableOpacity>)
  
    }