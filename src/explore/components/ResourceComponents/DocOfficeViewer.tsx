import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
import WebView from 'react-native-webview'

interface DocOfficeViewerProps {
    uriDoc: string
}
export const DocOfficeViewer: FC<DocOfficeViewerProps> = ({ uriDoc = '' }) => {
  return (
    <WebView 
    style={styles.doc}
    startInLoadingState={true} 
    scalesPageToFit={true} 
    source={{ uri: uriDoc }} />
  )
}


const styles = StyleSheet.create({
   
    doc: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});