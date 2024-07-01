import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { NotebookItem } from '../components'
const dataTest = [
    'libreta', 'libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta',
    'libreta', 'libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta','libreta'
];

export const NoteBooksView = () => {
  return (
    <>
        <Text>{dataTest.length}</Text>
      <FlatList
        data={dataTest}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            <NotebookItem
                name={item + ' ' + index}
                onPress={() => null}

            />
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}

