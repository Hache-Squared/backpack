import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { FlatList, View } from 'react-native';
import { SheetExampleData } from '../../data/SheetExampleData';
import { SheetContentType } from '../../types/SheetContentTypes';

import { useMyBackpackStore, useNotebookStore } from '../../shared/hooks';
import { ImageWithPan, SheetContentSubtitle, SheetContentText, SheetContentYoutubeVideo  } from '../../shared/components';
import { NoItemsInList } from '../../shared/views';

export const LocalSheetScreen = () => {
  const { currentLocalSheetWatching } = useMyBackpackStore();
  return (
    <>
        <FlatList
          data={currentLocalSheetWatching?.content}
          ListEmptyComponent={() => <NoItemsInList/>}
          ListFooterComponent={() => (
            <View className='my-14'/>
          )}
          renderItem={({item, index}) => {
            if(item?.type === SheetContentType.Image){
              return(
                <ImageWithPan
                  key={index}
                  image={item?.content}
                />
              )
            }else if(item?.type === SheetContentType.Subtitle) {
              return(
                <SheetContentSubtitle
                  subtitle={item?.content}
                  key={index}
                />
              )
            }
            else if(item?.type === SheetContentType.Text) {
              return(
                <SheetContentText
                  content={item?.content}
                  key={index}
                />
              )
            }
            else if(item?.type === SheetContentType.YoutubeVideo) {
              return(
                <SheetContentYoutubeVideo videoId={item?.content}/>
              )
            }
            else{
              return null;
            }
          }}
        />
     
    </>
  )
}
