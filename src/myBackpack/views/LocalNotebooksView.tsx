import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { NotebookItem } from '../../shared/components'
import { StackExploreParams } from '../../routes/StackExplore';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackProfileParams } from '../../routes/StackProfile';
import { useMyBackpackStore } from '../../shared/hooks';
import { NotebookListItem } from '../../types';
import { NoItemsInList } from '../../shared/views';

export const LocalNotebooksView = () => {
  const navigation = useNavigation<NavigationProp<StackProfileParams>>();
  const { startLoadingLocalNotebookList, startLoadingCurrentLocalNotebook,localNotebookList } = useMyBackpackStore();
  useEffect(() => {
    startLoadingLocalNotebookList();
  }, []);

  const handleOnPressNotebook = (notebook: NotebookListItem) =>{
    startLoadingCurrentLocalNotebook({
      id: notebook.id,
      title: notebook.title,
    });
    navigation.navigate('LocalNotebook')
  }

  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={localNotebookList}
        ListEmptyComponent={() => <NoItemsInList/>}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            <NotebookItem
                name={item.title}
                key={item.id}
                onPress={() => handleOnPressNotebook(item)}
            />
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}
