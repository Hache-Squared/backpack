import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Alert, Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { StackExploreParams } from '../../routes/StackExplore'
import { BackpackItem } from '../components'
import { useBackpackStore, useExploreStore } from '../../shared/hooks'

const ExploreContentScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>()
  const { backpackList, startLoadingBackpackList } = useExploreStore();
  const { startLoadingCurrentBackpack } = useBackpackStore();

  useEffect(() => {
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
