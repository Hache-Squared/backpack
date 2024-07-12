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
      
      {
        isLoadingBackpack ? (
          
            
            <LoadingLogo/>
           
        ) : (
          <FlatList
            data={currentBackpackPublicationList}
            // ListEmptyComponent={() => <NoItemsInList/>}
            ItemSeparatorComponent={() => <View className='my-0.5 h-0.5'/>}
            renderItem={({item, index}) => (
              <PublicationItem
                  key={item.id}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  />
            )}
            ListFooterComponent={() => <View className='my-10 h-10' />}
            
          />
        )
      }
    </>
  )
}
