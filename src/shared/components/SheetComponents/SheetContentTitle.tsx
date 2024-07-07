import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { useAppTheme } from '../../../shared/hooks'
interface SheetContentTitleProps {
    title: string
}
export const SheetContentTitle: FC<SheetContentTitleProps> = ( { title = ""} ) => {
  const {sheetContent} = useAppTheme()
  return (
    <View className='w-full '>
        <Text style={{color: sheetContent.textTitleColor}}  className='font-bold text-textboxs text-center text-lg'>
          {title}
        </Text>
    </View>
  )
}