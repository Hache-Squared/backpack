import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const BackpackScreen = () => {
  return (
    <View>
      <Text>Vista de mochila seleccionada</Text>
      <Icon name="rocket-outline" size={30} color="#900" />
    </View>
  )
}

export  { BackpackScreen }
