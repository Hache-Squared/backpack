import React from 'react'
import { Alert, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme, useBackpackStore, useMyBackpackStore, useNotebookStore } from '../../hooks';
import { NotebookStuctureFolders } from '../../../types';
export const SheetDownloadButton = () => {
  const { buttons,primaryColor, secondaryColor } = useAppTheme()
  const { currentSheetShowing,id: notebookId, title: notebookTitle = 'libreta_sin_nombre' } = useNotebookStore();
  const { startDownloadingSheet } = useMyBackpackStore();

  const handleAlertDownload = () => {
    
    Alert.alert(
        "Descargar Hoja", 
        "¿Desea descargar hoja para su visualizacion offline (No incluye videos de Youtube)?",
    [
      {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'Si', onPress: () => handleOnPressDownload()},
    ],
    {cancelable: true},)
  }

  const handleOnPressDownload = async() => {
      
    if(!currentSheetShowing || !notebookId) {
        Alert.alert("No Hay Información", "No se puede descargar la hoja.")
        return;
    }
    

    let structure: NotebookStuctureFolders = {
        notebook_id: notebookId,
        notebook_title: notebookTitle,
        sheet_id: currentSheetShowing.id,
        sheet_title: currentSheetShowing.title
    }
    console.log("Estructura: ", structure);
    
    let result = await startDownloadingSheet(structure, currentSheetShowing.content);
    if(!result){
        Alert.alert("Error al descargar", "No se puede descargar la hoja.")
        return;
    }
    Alert.alert("Hoja descargada", `Ahora puedes ir al apartado de "Perfil / Mi Mochila / ${notebookTitle} / ${currentSheetShowing.title}" y verla.`)
    
  }
  return (
    <TouchableOpacity 
    onPress={handleAlertDownload}
    style={{ backgroundColor: primaryColor}}
    className='w-[45px] h-[45px] rounded-md items-center justify-center'>
        <Icon 
            name="cloud-download" 
            size={35} 
            color={secondaryColor} />
    </TouchableOpacity>
  )
}
