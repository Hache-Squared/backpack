import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import { BookPdfViewer, DocOfficeViewer } from '../components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackExploreParams } from '../../routes/StackExplore';


export const ResourceViewScreen = () => {
  const { uriResource = '' } = useRoute<RouteProp<StackExploreParams, 'ResourceView'>>().params;
  return (
    <View style={styles.container}>
        <BookPdfViewer uriBook={uriResource}/>
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