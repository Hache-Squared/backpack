import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { PublicationItem } from '../components'
import { useBackpackStore } from '../../shared/hooks'

export const PublicationsView = () => {
  const { publicationList, startLoadingPublications } = useBackpackStore();
  useEffect(() => {
    startLoadingPublications();
  }, []);
  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={publicationList}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
          <PublicationItem
              key={item.id}
              title={item.title}
              image={item.image}
              link={item.link}
              />
        )}
        ListFooterComponent={() => <View className='my-10' />}
        
      />
    </>
  )
}
