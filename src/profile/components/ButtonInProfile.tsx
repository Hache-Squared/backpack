import { FC } from "react"
import { Text, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from "../../shared/hooks";

interface ButtonInProfileProps {
    title: string
    onPress: () => void,
    icon: string
  }
export const ButtonInProfile: FC<ButtonInProfileProps> = ( {icon, onPress, title } ) => {
    const { buttons } = useAppTheme()
    return(
      <TouchableOpacity 
        onPress={onPress}
        style={{ backgroundColor: buttons.backgroundColor }}
        className='w-full self-center py-1 my-0.5 flex-row flex-nowrap items-center justify-around'
      >
               <Icon name={icon} size={40} color={buttons.textColor} />
              <Text 
              className="font-semibold text-lg"
              style={{
                color: buttons.textColor
              }}>
                  {title}
              </Text>
      </TouchableOpacity>
    )
  }
  