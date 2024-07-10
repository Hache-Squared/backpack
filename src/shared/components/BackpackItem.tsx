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
    className='w-11/12 py-3 rounded-md flex flex-row items-center self-center gap-1 shadow-sm shadow-purple-50'>
        {logoImg ? <Text>logo</Text> : <Icon name="briefcase-outline" size={40} color={buttons.textColor} />} 
        
        <Text 
        style={{color: buttons.textColor}}
        className='font-semibold text-lg'>{name}</Text>
    </TouchableOpacity>
  )
}

export  {BackpackItem}
