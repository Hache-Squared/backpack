import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { FullSpaceInScreen } from '../../shared/components'
import { NoteBookContent } from '../views'

const NotebookScreen = () => {

  return (
    <FullSpaceInScreen>
      <SafeAreaView>
        <NoteBookContent/>
      </SafeAreaView>
    </FullSpaceInScreen>
  )
}

export  { NotebookScreen }
