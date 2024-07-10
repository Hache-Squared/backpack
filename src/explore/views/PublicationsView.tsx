import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { ActivityIndicatorLoadingList, LoadingLogo, PublicationItem } from '../../shared/components'
import { useBackpackStore } from '../../shared/hooks'
import { NoItemsInList } from '../../shared/views'

export const PublicationsView = () => {
  const { currentBackpackPublicationList, currentBackpack, startLoadingPublications,isLoadingBackpack } = useBackpackStore();
  useEffect(() => {
    startLoadingPublications(currentBackpack?.id ?? '');
  }, []);
  return (
    <>
      <View className='my-2'/>
      {
        isLoadingBackpack ? (
          // <View className='flex-1'>
            
            <LoadingLogo/>
          // </View>
        ) : (
          <FlatList
            data={currentBackpackPublicationList}
            ListEmptyComponent={() => <NoItemsInList/>}
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
        )
      }
    </>
  )
}
