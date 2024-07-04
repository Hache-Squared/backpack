import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import { BookPdfViewer, DocOfficeViewer } from '../components';

export const ResourceViewScreen = () => {
  return (
    <View style={styles.container}>
        <BookPdfViewer uriBook={'https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf'}/>
        {/* <DocOfficeViewer uriDoc={'https://www.slideshare.net/slideshow/embed_code/key/qU5u9smJ3IBinM?startSlide=1'}/> */}
        {/* <DocOfficeViewer uriDoc={'https://ctb.ku.edu/sites/default/files/chapter_files/26.9_1.ppt'}/> */}
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