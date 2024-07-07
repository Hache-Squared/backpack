
import React, { FC, useState } from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
import { LoadingComponent } from '..';
import { useNavigation } from '@react-navigation/native';
import { BookFile, BookListItem } from '../../../types';

interface LocalBookPdfViewerProps {
    uriBook: string;
}

export const LocalBookPdfViewer: FC<LocalBookPdfViewerProps> = ({ uriBook = '' }) => {
    const source = { uri: uriBook, cache: false };
    const [isLoadingBook, setIsLoadingBook] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const navigation = useNavigation()
    console.log(uriBook);
    
    
    return (
        <>
            {
                isLoadingBook && (
                    <LoadingComponent progress={'' + progress}/>
                )
            }
            <Pdf
            trustAllCerts={false}
            source={source}
            progressContainerStyle={{
                display:'none'
            }}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            onLoadComplete={(numberOfPages,filePath) => {
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
