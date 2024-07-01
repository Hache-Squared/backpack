import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { BookItem } from '../components'
const dataTest = [
    'libro', 'libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro',
    'libro', 'libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro','libro'
];

export const BooksView = () => {
  return (
    <>
        <Text>{dataTest.length}</Text>
      <FlatList
        data={dataTest}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            <BookItem
                name={item + ' ' + index}
                onPress={() => null}

            />
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}

