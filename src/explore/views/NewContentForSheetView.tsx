import React, { FC, useState } from 'react'
import { Dimensions, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import RNPickerSelect from 'react-native-picker-select';
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

        
        <Text className='w-full text-center font-bold text-black'>Añadir Elemento</Text>

        <RNPickerSelect
          placeholder={{ label: 'Seleccione el tipo de elemento', value: null, color: 'gray' }}
          // style={{ iconContainer: {
          //   width: Dimensions.get('screen').width * 0.9
          // } }}
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

            <View className='w-full'>
              <Text>Inserte el texto simple:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={typeElementText}
                onChangeText={(text) => setTypeElementText(text)}
              />
              <ButtonAddElement onPress={handleAddText}/>
            </View>
          )
        }

        {
          typeElement === SheetContentType.Subtitle && (

            <View className='w-full'>
              <Text>Subtitulo:</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={typeElementSubtitle}
                onChangeText={(text) => setTypeElementSubtitle(text)}
              />
              <ButtonAddElement onPress={handleAddSubtitle}/>
            </View>
          )
        }

        {
          typeElement === SheetContentType.Image && (

            <View className='w-full'>
              
              <TouchableOpacity 
                onPress={pickImage} 
                className='w-10/12 rounded-full my-2 py-2 self-center flex flex-row flex-nowrap items-center justify-center'
                style={{backgroundColor: "#3498db"}}
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
                  <View className='w-full items-center justify-center'>

                    <Image
                    source={{ uri: imageUri}}
                    style={{ width: Dimensions.get('screen').width * 0.9, height: 220 }}  
                    className='object-contain'/>
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
      >Agregar</Text>
    </TouchableOpacity>)
  
    }