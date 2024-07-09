import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'
import { FullSpaceInScreen } from '../../shared/components'
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
      <SafeAreaView>
        {
          isLoadingNotebook ? (
            
              <ActivityIndicator color={primaryColor} size={'large'} className='my-10'/>
            
          ) : (
            <NoteBookContent/>
          )  
        }
      </SafeAreaView>
    </FullSpaceInScreen>
  )
}

export  { NotebookScreen }
