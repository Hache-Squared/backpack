import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackExploreParams } from '../../routes/StackExplore';
import { useBackpackStore } from '../../shared/hooks';
import { ActivityIndicatorLoadingList, LoadingLogo, NotebookItem } from '../../shared/components';
import { NoItemsInList } from '../../shared/views';


export const NoteBooksView = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { currentBackpackNotebookList, currentBackpack, startLoadingNotebooks, isLoadingBackpack } = useBackpackStore();  
  useEffect(() => {
    // console.log("currentBackpackId: ", currentBackpack?.id);
    
    startLoadingNotebooks(currentBackpack?.id ?? '');
  }, []);

  return (
    <>
      <View className='my-2'/>
      {
        isLoadingBackpack ? (
          <LoadingLogo/>
        ) : (
          <FlatList
            data={currentBackpackNotebookList}
            ListEmptyComponent={() => <NoItemsInList/>}
            ItemSeparatorComponent={() => <View className='my-1'/>}
            renderItem={({item, index}) => (
                <NotebookItem
                    name={item.title}
                    key={item.id}
                    onPress={() => navigation.navigate('Notebook', {
                      id: item.id
                    })}
                />
            )}
            ListFooterComponent={() => <View className='my-10' />}
          />
        )
      }
    </>
  )
}

