import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackExploreParams } from '../../routes/StackExplore';
import { useAppTheme, useBackpackStore } from '../../shared/hooks';
import { StackNavigationOptions } from '@react-navigation/stack';
import { SelectViewFromBackpack } from '../../shared/components';
import { NoteBooksView, BooksView, PublicationsView } from '../views';


const BackpackScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { buttons } = useAppTheme();
  const { id } = useRoute<RouteProp<StackExploreParams, 'Backpack'>>().params;
  const { currentBackpack, startLoadingCurrentBackpack } = useBackpackStore();

  const options: StackNavigationOptions = {
      title: currentBackpack?.title,
      headerLeft: (props) => (<Icon {...props} name="arrow-back-outline" size={30} color={buttons.textColor} />),
  }
  useEffect(() => {
    navigation.setOptions(options)
    startLoadingCurrentBackpack(id);
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
