import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackExploreParams } from '../../routes/StackExplore';
import { useAppTheme } from '../../shared/hooks';
import { StackNavigationOptions } from '@react-navigation/stack';
import { SelectViewFromBackpack } from '../../shared/components';
import { NoteBooksView } from '../views/NoteBooksView';
import { BooksView } from '../views/BooksView';


const BackpackScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>()
  const { buttons } = useAppTheme()
  const options: StackNavigationOptions = {
      title: 'Mochila De Fisica',
      headerLeft: (props) => (<Icon {...props} name="arrow-back-outline" size={30} color={buttons.textColor} />),
  }
  useEffect(() => {
    navigation.setOptions(options)

  },[])
  return (
    <>
      <SelectViewFromBackpack
        ViewForNotebooks={
          <NoteBooksView/>
        }
        ViewForBooks={
          <BooksView/>
        }
      />
    </>
  )
}

export  { BackpackScreen }
