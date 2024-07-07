
import React, { FC, useState } from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
import { useAppTheme, useMyBackpackStore } from '../../../shared/hooks';
import { LoadingComponent } from '../../../shared/components';
import { useNavigation } from '@react-navigation/native';
import { BookFile, BookListItem } from '../../../types';
import Icon from 'react-native-vector-icons/Ionicons';

interface BookPdfViewerProps {
    uriBook: string;
    dataForbook: BookFile;
}

export const BookPdfViewer: FC<BookPdfViewerProps> = ({ uriBook = '', dataForbook }) => {
    const source = { uri: uriBook, cache: true };
    const { buttons } = useAppTheme()
    const { startDownloadingBook } = useMyBackpackStore();
    const [pathCache, setPathCache] = useState('');
    
    const [isLoadingBook, setIsLoadingBook] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const navigation = useNavigation()
    const handleAlertDownload = () => {
        Alert.alert(
            "Descargar Libro", 
            "¿Desea descargar el libro para su visualización offline?",
            [
                {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Si', onPress: () => handleOnPressDownload()},
            ],
            {cancelable: true},
        )
    }

    const handleOnPressDownload = async() => {
        let ok = await startDownloadingBook(dataForbook, pathCache)
        if(!ok){
            Alert.alert("Error al descargar", "No se puede descargar el libro.")
            return;
        }
        Alert.alert("Libro descargado", `Ahora puedes ir al apartado de "Perfil / Mi Mochila / Libros / ${dataForbook.title}" y verlo.`)
    }
    
    return (
        <>
            {
                isLoadingBook && (
                    <LoadingComponent progress={'' + progress}/>
                )
            }
            <View className='w-full flex-row items-center justify-end'>
            <Icon 
                onPress={handleAlertDownload}
                name="cloud-download" 
                size={40} 
                color={buttons.textColor} />
            </View>
            <Pdf
            trustAllCerts={false}
            source={source}
            progressContainerStyle={{
                display:'none'
            }}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
                console.log("Ruta de libros: ", filePath);
                setPathCache(filePath);
                setIsLoadingBook(false);
                
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                if( navigation.canGoBack() ) {
                    navigation.goBack();
                }
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            
            onLoadProgress={(percent) => {
                console.log('percent',percent);
                let progressFixed = parseFloat((percent * 100)?.toFixed(2));
                setProgress(progressFixed)
            }}
            style={styles.pdf}
            />
        </>
    
    )
}


const styles = StyleSheet.create({
   
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});