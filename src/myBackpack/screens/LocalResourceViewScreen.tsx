import React, { useEffect } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native';
import { BookPdfViewer, DocOfficeViewer, LocalBookPdfViewer } from '../../shared/components';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackExploreParams } from '../../routes/StackExplore';
import { StackNavigationOptions } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme, useMyBackpackStore } from '../../shared/hooks';

export const LocalResourceViewScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { currentBookWatching } = useMyBackpackStore();


  const { buttons } = useAppTheme();
  const options: StackNavigationOptions = {
    title: 'Viendo Libro',
    headerLeft: (props) => (<Icon {...props} name="chevron-back-outline" size={30} color={buttons.textColor} />),
  }

  useEffect(() => {
    
    navigation.setOptions(options);
    

  },[])


  return (
    <View style={styles.container}>
        <LocalBookPdfViewer
          uriBook={currentBookWatching?.uriDocument ?? ''} 
          />
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