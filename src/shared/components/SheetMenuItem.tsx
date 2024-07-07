import { FC } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

interface SheetMenuItemProps {
    title: string,
    colorStatus: string,
    onPress: () => void
}
export const SheetMenuItem: FC<SheetMenuItemProps> = ({ title = '', colorStatus = '', onPress}) => {
    return(
        <View
        style={{
            borderLeftWidth: 5,
            borderLeftColor: colorStatus,

        }}
        className='w-11/12 b-red-400 py-2'>
            <TouchableOpacity onPress={onPress} className='w-10/12 flex flex-row items-center b-yellow-300'>
                <View className='w-5 h-2' style={{backgroundColor: colorStatus}}/>
                <Icon name='reader-outline' size={40} color={colorStatus}/>
                <Text className='font-semibold text-lg flex-wrap' style={{color: colorStatus}}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}