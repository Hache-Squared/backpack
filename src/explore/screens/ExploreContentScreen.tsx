import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Button, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { StackExploreParams } from '../../routes/StackExplore'
import { BackpackItem } from '../components'

const ExploreContentScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>()

  return (
    <View>
      
      <FlatList
        data={['fisica', 'algebra']}
        numColumns={2}
        contentContainerStyle={{ gap: 10, margin:5 }}
        columnWrapperStyle={{ gap: 10, margin:5 }}
        renderItem={({ item, index }) => (
          <BackpackItem 
            name={item}
            onPress={() => navigation.navigate('Backpack')}
            />
        )}
      />

    </View>
  )
}

export  { ExploreContentScreen }
