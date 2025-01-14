import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import React, { FC, PropsWithChildren, useEffect } from 'react'
import { StackExploreParams } from '../../routes/StackExplore'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

export const FullSpaceInScreen: FC<PropsWithChildren> = ({children}) => {
    const navigation = useNavigation<NavigationProp<StackExploreParams>>()
    const optionsForStack: StackNavigationOptions = {
        headerShown: false,
    }
    const optionsForTab: BottomTabNavigationOptions = {
      tabBarStyle: {
        display: 'none'
      }
  
    }
  useEffect(() => {
    navigation.setOptions(optionsForStack)
    navigation.getParent()?.setOptions(optionsForTab)
  
    return () => {
      navigation.setOptions({
        headerShown: true,
      })
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex'
        }
      })
    }
  },[])
  return (
    <> 
    {
      children
    }
    </>
  )
}
