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
    const { buttons, primaryColor, secondaryColor,texts } = useAppTheme()
    return(
      <TouchableOpacity 
        onPress={onPress}
        style={{ backgroundColor: primaryColor }}
        className='w-8/12 rounded-3xl py-5 self-center my-4 flex-row flex-nowrap items-center justify-around'
      >
              <Text 
              className="font-semibold text-lg"
              style={{
                color: '#fff'
              }}>
                  {title}
              </Text>
               <Icon name={icon} size={40} color={'#fff'} />
      </TouchableOpacity>
    )
  }
  