import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { useAppTheme } from '../../../shared/hooks'
interface SheetContentSubtitleProps {
    subtitle: string
}
export const SheetContentSubtitle: FC<SheetContentSubtitleProps> = ( { subtitle = ""} ) => {
  const {sheetContent} = useAppTheme()
  return (
    <View className='w-11/12 mb-0.5 mt-3 self-center'>
        <Text style={{color: sheetContent.textSubtitleColor}} className='font-semibold text-sm text-textboxs text-left '>
          {subtitle}
        </Text>
    </View>
  )
}