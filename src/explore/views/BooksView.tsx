import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { BookItem } from '../components'
import { StackExploreParams } from '../../routes/StackExplore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
const dataTest = [
    'libro', 'libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro',
    'libro', 'libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro'
];

export const BooksView = () => {

  const navigation = useNavigation<NavigationProp<StackExploreParams>>()
  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={dataTest}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            <BookItem
                name={item + ' ' + index}
                onPress={() => navigation.navigate('ResourceView')}

            />
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}

