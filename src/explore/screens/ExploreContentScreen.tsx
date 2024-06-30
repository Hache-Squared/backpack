import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { StackExploreParams } from '../../routes/StackExplore'

const ExploreContentScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>()

  return (
    <View>
      <Text>Contenido a explorar por materia</Text>

      <Button title='navegar a vista de mochila' onPress={() => {
        navigation.navigate('Backpack')
      }}/>
    </View>
  )
}

export  { ExploreContentScreen }
