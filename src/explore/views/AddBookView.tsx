import React, { FC, useState } from 'react'
import { Dimensions, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useAppTheme, useBackpackStore, useExploreStore } from '../../shared/hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { usePermissionsStore } from '../../shared/hooks/usePermissionsStore';

interface AddBookViewProps {
    onCloseContent: () => void
}

export const AddBookView: FC<AddBookViewProps> = ({onCloseContent}) => {
    const [nameBook, setNameBook] = useState('')
    const { primaryColor, secondaryColor, headerMenuNotebookContent, screens } = useAppTheme();
    const { startAddingBookItem } = useBackpackStore()
    const [pdfUri, setPdfUri] = useState<string | null>(null);
    const {startRequestStoragePermission} = usePermissionsStore()
    const pickPdfDocument = async () => {
        // await startRequestStoragePermission();
        try {
            const result: DocumentPickerResponse[] = await DocumentPicker.pick({
              type: [DocumentPicker.types.pdf],
              copyTo: 'documentDirectory',
            });
      
            if (result.length > 0) {
              const selectedDoc = result[0];
              const fileCopyUri = `file://${decodeURIComponent(selectedDoc.fileCopyUri ?? '')}`;
              setPdfUri(fileCopyUri);
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
        
        if(nameBook.trim().length <= 0) {
            return;
        }
        startAddingBookItem({
            title: nameBook,
            uriDocument: (`file://${decodeURIComponent(pdfUri ?? '')}`) ?? ''
        })
        setNameBook('')
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
            className='w-full text-lg text-center my-2 font-bold'>Agregar Documento</Text>
            
            
            <TextInput 
                className='self-center shadow-md shadow-slate-300 p-1.5 rounded-full my-5 border-2'
                style={{
                    width: Dimensions.get('screen').width * 0.88, 
                    height: 60,
                    color: primaryColor,
                    textAlign: 'center'
                }}
                value={nameBook} 
                placeholder='Ingrese el nombre del documento'
                placeholderTextColor={primaryColor}
                onChangeText={(text) => setNameBook(text)}
                returnKeyType='done'
                
                onSubmitEditing={() => {
                    // handleSearchNotebook();
                }}
            />
            <TouchableOpacity 
                onPress={pickPdfDocument} 
                className='w-10/12 rounded-full my-2 py-2 self-center flex flex-row flex-nowrap items-center justify-center'
                style={{backgroundColor: "#0984e3"}}
                >
                <Icon name='document-attach' size={40} color={"#fff"}/>
                <Text 
                className='text-lg text-center'
                style={{
                    color: "#ffffff",
                    fontWeight: 'bold'
                }}
                >
                    Seleccionar Pdf
                </Text>
            </TouchableOpacity>
            {
                pdfUri &&
                (
                    <Text 
                    style={{ color: screens.titleColor }}  
                    className='w-full text-lg text-center my-2 font-bold'>Documento Cargado</Text>
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
                    Registrar
                </Text>
            </TouchableOpacity>
            
        </View>
        

    </View>
  )
}
