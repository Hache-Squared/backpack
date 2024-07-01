import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { NotebookItem } from '../components'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackExploreParams } from '../../routes/StackExplore';
const dataTest = [
    'libreta', 'libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta',
    'libreta', 'libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta'
];

export const NoteBooksView = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>()
  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={dataTest}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            <NotebookItem
                name={item + ' ' + index}
                onPress={() => navigation.navigate('Notebook')}

            />
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}

