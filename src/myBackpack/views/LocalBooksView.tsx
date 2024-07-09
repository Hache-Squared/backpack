import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { BookItem } from '../../shared/components'
import { StackExploreParams } from '../../routes/StackExplore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useMyBackpackStore } from '../../shared/hooks';
import { BookListItem } from '../../types';
import { StackProfileParams } from '../../routes/StackProfile';
import { NoItemsInList } from '../../shared/views';

export const LocalBooksView = () => {
  const navigation = useNavigation<NavigationProp<StackProfileParams>>();
  const { startLoadingBooks, localBookList, startWatchingBook } = useMyBackpackStore();  
  useEffect(() => {
    startLoadingBooks();
  }, []);

  const handleOnPressBook = (book: BookListItem) => {
    startWatchingBook(book);
    navigation.navigate('LocalResourceView');
  }

  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={localBookList}
        ListEmptyComponent={() => <NoItemsInList/>}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            <BookItem
                name={item.title}
                key={item.id}
                onPress={() => handleOnPressBook(item)}

            />
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}

