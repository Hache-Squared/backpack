import React from 'react'
import { FlatList, View } from 'react-native'

export const LocalNotebooksView = () => {
  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={[]}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            null
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}
