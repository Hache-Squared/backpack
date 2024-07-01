import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { useAppTheme } from '../../../shared/hooks'



interface SheetContentTextProps {
  content: string
}

export const SheetContentText: FC<SheetContentTextProps> = ({content}) => {
  const {sheetContent} = useAppTheme()
  return (
    <View className='w-11/12 p-1 bg-secondary rounded-md self-center my-1' style={{}}>
        <Text style={{color: sheetContent.textColor}} className='text-white text-sm'>
            {content}
        </Text>
    </View>
  )
}