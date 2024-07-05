import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { FullSpaceInScreen } from '../../shared/components'
import { NoteBookContent } from '../views'
import { RouteProp, useRoute } from '@react-navigation/native'
import { StackExploreParams } from '../../routes/StackExplore'
import { useNotebookStore } from '../../shared/hooks'

const NotebookScreen = () => {
  const { id } = useRoute<RouteProp<StackExploreParams, 'Notebook'>>().params;
  const { startLoadingNotebook, startResetingNotebook } = useNotebookStore();
  useEffect(()=>{
    startLoadingNotebook(id)

    return () => {
      startResetingNotebook();
    }
   },[])
  return (
    <FullSpaceInScreen>
      <SafeAreaView>
        <NoteBookContent/>
      </SafeAreaView>
    </FullSpaceInScreen>
  )
}

export  { NotebookScreen }
