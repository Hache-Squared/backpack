import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Alert, Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { StackExploreParams } from '../../routes/StackExplore'
import { BackpackItem } from '../../shared/components'
import { useBackpackStore, useExploreStore } from '../../shared/hooks'
import { HeaderLogo } from '../../shared/components'
import { NoItemsInList } from '../../shared/views'

const ExploreContentScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>()
  const { backpackList, startLoadingBackpackList } = useExploreStore();
  const { startLoadingCurrentBackpack } = useBackpackStore();

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
    <View>
      
      <FlatList
        data={backpackList}
        ListEmptyComponent={() => <NoItemsInList/>}
        numColumns={2}
        contentContainerStyle={{ gap: 10, margin:5 }}
        columnWrapperStyle={{ gap: 10, margin:5 }}
        renderItem={({ item, index }) => (
          <BackpackItem 
            name={item.title}
            onPress={() => handleClickBackpack(item.id)}
            />
        )}
      />

    </View>
  )
}

export  { ExploreContentScreen }
