import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackExploreParams } from '../../routes/StackExplore';
import { useAppTheme, useBackpackStore } from '../../shared/hooks';
import { StackNavigationOptions } from '@react-navigation/stack';
import { SelectViewFromBackpack } from '../../shared/components';
import { NoteBooksView, BooksView, PublicationsView } from '../views';
import { Alert } from 'react-native';


const BackpackScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { buttons } = useAppTheme();
  const { id } = useRoute<RouteProp<StackExploreParams, 'Backpack'>>().params;
  const { currentBackpack, startResetingBackpack } = useBackpackStore();

  const options: StackNavigationOptions = {
      title: currentBackpack?.title ?? 'Titulo Mochila',
      headerLeft: (props) => (<Icon {...props} name="chevron-back-outline" size={30} color={buttons.textColor} />),
  }
  useEffect(() => {
    
    navigation.setOptions(options);
    

    return () => {
      startResetingBackpack();
    }
  },[])


  return (
    <>
    {
      currentBackpack && (

        <SelectViewFromBackpack
          ViewForNotebooks={
            <NoteBooksView/>
          }
          ViewForBooks={
            <BooksView/>
          }
          ViewForPublications={
            <PublicationsView/>
          }
        />
      )
    }
    </>
  )
}

export  { BackpackScreen }
