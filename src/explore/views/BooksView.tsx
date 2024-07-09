import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ActivityIndicatorLoadingList, BookItem } from '../../shared/components'
import { StackExploreParams } from '../../routes/StackExplore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useBackpackStore } from '../../shared/hooks';

export const BooksView = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { currentBackpackBookList, currentBackpack, startLoadingBooks, isLoadingBackpack } = useBackpackStore();  
  useEffect(() => {
    startLoadingBooks(currentBackpack?.id ?? '');
  }, []);

  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={currentBackpackBookList}
        ListEmptyComponent={() => <ActivityIndicatorLoadingList isLoading={isLoadingBackpack}/>}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            <BookItem
                name={item.title}
                key={item.id}
                onPress={() => navigation.navigate('ResourceView',{
                  uriResource: item.uriDocument,
                  data: item,
                })}

            />
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}

