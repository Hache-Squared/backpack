import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Alert, Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { StackExploreParams } from '../../routes/StackExplore'
import { ActivityIndicatorLoadingList, BackpackItem, LoadingLogo } from '../../shared/components'
import { useAppTheme, useBackpackStore, useExploreStore } from '../../shared/hooks'
import { HeaderLogo } from '../../shared/components'
import { NoItemsInList } from '../../shared/views'

const ExploreContentScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>()
  const { backpackList, startLoadingBackpackList, isLoadingExplore } = useExploreStore();
  const { startLoadingCurrentBackpack } = useBackpackStore();
  const { texts } = useAppTheme()

  useEffect(() => {
    navigation.setOptions({
      headerTitle:() => {
        return(
          <HeaderLogo/>
        )
      },
    })
    startLoadingBackpackList();
  }, [])

  const handleClickBackpack = (backpackId: string) => {
    startLoadingCurrentBackpack(backpackId);
    navigation.navigate('Backpack',{
      id: backpackId,
    })

  }

  return (
    <View  className=' '>
      {
        isLoadingExplore ? 
        <LoadingLogo/>  
        : (

          <FlatList
            data={backpackList}
            ListEmptyComponent={() => <NoItemsInList/>}
            ItemSeparatorComponent={() => <View className='my-1 h-1'/>}
            ListHeaderComponent={() => (
              <View className='my-1 py-2'>
                <Text 
                className=' font-semibold text-3xl text-center'
                style={{color: texts.labelColor}}>
                  Mochilas
                </Text>
              </View>
            )}
            // numColumns={1}
            // contentContainerStyle={{ gap: 10, margin:5 }}
            // columnWrapperStyle={{ gap: 10, margin:5 }}
            renderItem={({ item, index }) => (
              <BackpackItem 
                name={item.title}
                onPress={() => handleClickBackpack(item.id)}
                />
            )}
          />
        )
      }

    </View>
  )
}

export  { ExploreContentScreen }
