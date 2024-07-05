import React, { FC } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../../shared/hooks';

interface BackpackItemProps {
    logoImg?: string,
    name: string,
    onPress: () => void
}

const BackpackItem: FC<BackpackItemProps> = ({ name, logoImg, onPress }) => {
  const { buttons } = useAppTheme()
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={{ backgroundColor: buttons.backgroundColor }}
    className='w-6/12 py-3 rounded-lg flex flex-col items-center justify-center gap-1 shadow-sm shadow-purple-50'>
        {logoImg ? <Text>logo</Text> : <Icon name="briefcase-outline" size={40} color={buttons.textColor} />} 
        
        <Text 
        style={{color: buttons.textColor}}
        className='font-semibold text-lg'>{name}</Text>
    </TouchableOpacity>
  )
}

export  {BackpackItem}
