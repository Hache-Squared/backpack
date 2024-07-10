import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'
import { FullSpaceInScreen, LoadingLogo } from '../../shared/components'
import { NoteBookContent } from '../views'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StackExploreParams } from '../../routes/StackExplore'
import { useAppTheme, useNotebookStore } from '../../shared/hooks'

const NotebookScreen = () => {
  const { id } = useRoute<RouteProp<StackExploreParams, 'Notebook'>>().params;
  const { startLoadingNotebook, startResetingNotebook, isLoadingNotebook } = useNotebookStore();
  const { primaryColor } = useAppTheme()
  useEffect(()=>{
    startLoadingNotebook(id)

    return () => {
      startResetingNotebook();
    }
   },[])
  return (
    <FullSpaceInScreen>
      <SafeAreaView className='flex-1'>
        {
          isLoadingNotebook ? (
            <View className='flex-1 items-center justify-center '>
              <LoadingLogo/>
            </View>
            
          ) : (
            <NoteBookContent/>
          )  
        }
      </SafeAreaView>
    </FullSpaceInScreen>
  )
}

export  { NotebookScreen }
