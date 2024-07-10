import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { FlatList, View } from 'react-native';
import { SheetExampleData } from '../../data/SheetExampleData';
import { SheetContentType } from '../../types/SheetContentTypes';

import { useNotebookStore } from '../../shared/hooks';
import { ImageWithPan, SheetContentSubtitle, SheetContentText, SheetContentYoutubeVideo, SheetPrevNextContent  } from '../../shared/components';
import { NoItemsInList } from '../../shared/views';

export const SheetContent = () => {
  const flatListRef = useRef<FlatList>(null);
  const { currentSheetShowing } = useNotebookStore()
  useEffect(() => {
    console.log("Hoja renderizada");
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })
  },[currentSheetShowing])
  return (
    <>
        <FlatList
          ref={flatListRef}
          data={currentSheetShowing?.content}
          ListEmptyComponent={() => <NoItemsInList/>}
          ListFooterComponent={() => (
            
              <View className='w-full  my-14  h-12'>
                <SheetPrevNextContent/>
              </View>
            
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
