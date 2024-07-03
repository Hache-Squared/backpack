
import React, { FC } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

interface BookPdfViewerProps {
    uriBook: string;
}

export const BookPdfViewer: FC<BookPdfViewerProps> = ({ uriBook = '' }) => {
    const source = { uri: uriBook, cache: true };
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf' };
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

    return (
            <Pdf
            trustAllCerts={false}
                source={source}
                onLoadComplete={(numberOfPages,filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page,numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf}
                />
    
    )
}


const styles = StyleSheet.create({
   
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
