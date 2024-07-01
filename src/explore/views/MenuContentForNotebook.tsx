import React, { FC } from 'react'
import { useAppTheme } from '../../shared/hooks'
import { Alert, FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { SheetMenuItem } from '../components';

const subtitles = [
    "Implementación de Seguridad Informática en una Empresa Análisis de Impacto Ambiental para Proyectos de Construcción",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",

    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    "Implementación de un Sistema de Gestión de Inventarios",
    "Desarrollo de una Aplicación Móvil para el Seguimiento de la Salud",
    
];

interface MenuContentForNotebook {
    onCloseContent: () => void
}

export const MenuContentForNotebook: FC<MenuContentForNotebook> = ({ onCloseContent }) => {

   const { menuNotebookContent, headerMenuNotebookContent } = useAppTheme()
  return (

    <SafeAreaView className='flex-1'>
    <View className='w-full flex flex-row items-center justify-end '>
        <TouchableOpacity
        onPress={onCloseContent}
        className='p-1 mr-2 mt-2 rounded-lg bg-gray-200'>
            <Icon name='close-circle-outline' size={40} color={headerMenuNotebookContent.buttonMenuLabelColor}/>
        </TouchableOpacity>
    </View>
    <ScrollView>

        <View className='w-full flex flex-col mt-1'>
            <Text 
            style={{ backgroundColor: headerMenuNotebookContent.backgroundColor, color: headerMenuNotebookContent.textColor}}
            className='text-3xl font-bold mx-3 p-2 rounded-lg'>Ley de ohm y las resistenciasLey de ohm y las resistencias Ley de ohm y las resistencias </Text>
        </View>


        <View className='w-full flex flex-col items-end'>

        {
            subtitles.map((subtitle, index) => (
                <SheetMenuItem 
                onPress={() => Alert.alert('click en subtema')}
                colorStatus={index < 5? menuNotebookContent.colorStatusActive : menuNotebookContent.colorStatusInactive}
                title={subtitle + ' ' + index} key={index}/>
            ))
        }
    
            
        </View>
    </ScrollView>


    
</SafeAreaView>

  )
}
