import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import { BookPdfViewer } from '../components';

export const ResourceViewScreen = () => {
  return (
    <View style={styles.container}>
        <BookPdfViewer uriBook={'https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf'}/>
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