import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { NotebookItem } from '../components'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackExploreParams } from '../../routes/StackExplore';
import { useBackpackStore } from '../../shared/hooks';
import { menuSheetItemNotebookListExample } from '../../data/fixtures';


export const NoteBooksView = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { currentBackpackNotebookList, currentBackpack, startLoadingNotebooks } = useBackpackStore();  
  useEffect(() => {
    // console.log("currentBackpackId: ", currentBackpack?.id);
    
    startLoadingNotebooks(currentBackpack?.id ?? '');
  }, []);

  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={currentBackpackNotebookList}
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
    </>
  )
}

