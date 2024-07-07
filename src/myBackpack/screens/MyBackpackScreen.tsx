import React, { useEffect } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SwitchSectionButtons } from '../components'
import { useAppTheme, useLocalStorage } from '../../shared/hooks'
import { usePermissionsStore } from '../../shared/hooks/usePermissionsStore'
import { SelectViewFromBackpack } from '../../shared/components'
import { LocalNotebooksView } from '../views/LocalNotebooksView'

const MyBackpackScreen = () => {
  const { texts } = useAppTheme()
  const { permissionStorageStatus, startRequestStoragePermission } = usePermissionsStore()
  const { createDirectories } = useLocalStorage()
  return (
    <>
      
      
       
        <SelectViewFromBackpack
          ViewForNotebooks={
            <LocalNotebooksView/>
          }
          ViewForBooks={
            <></>
          }
          applyPublications={false}
        />

      
    </>
  )
}



export { MyBackpackScreen }
