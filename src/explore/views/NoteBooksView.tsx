import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { NotebookItem } from '../components'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackExploreParams } from '../../routes/StackExplore';
import { useBackpackStore } from '../../shared/hooks';


export const NoteBooksView = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>();
  const { notebookList, startLoadingNotebooks } = useBackpackStore();  
  useEffect(() => {
    startLoadingNotebooks();
  }, []);

  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={notebookList}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
            <NotebookItem
                name={item.title}
                key={item.id}
                onPress={() => navigation.navigate('Notebook')}
            />
        )}
        ListFooterComponent={() => <View className='my-10' />}
      />
    </>
  )
}

