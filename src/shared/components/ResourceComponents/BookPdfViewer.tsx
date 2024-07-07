
import React, { FC, useState } from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator, Alert } from 'react-native';
import Pdf from 'react-native-pdf';
import { useAppTheme } from '../../../shared/hooks';
import { LoadingComponent } from '../../../shared/components';
import { useNavigation } from '@react-navigation/native';

interface BookPdfViewerProps {
    uriBook: string;
}

export const BookPdfViewer: FC<BookPdfViewerProps> = ({ uriBook = '' }) => {
    const source = { uri: uriBook, cache: true };
    const [isLoadingBook, setIsLoadingBook] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const navigation = useNavigation()
    
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf' };
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};
    
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
                console.log(`Number of pages: ${numberOfPages}`);
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
