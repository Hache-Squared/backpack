import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import { BookPdfViewer } from '../components';

export const ResourceViewScreen = () => {
  return (
    <View style={styles.container}>
        <BookPdfViewer/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});