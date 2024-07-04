import React, { FC } from 'react'
import { Alert, Linking, Text, TouchableOpacity } from 'react-native';

interface LinkToAnotherSiteProps {
    to: string
}

export const LinkToAnotherSite: FC<LinkToAnotherSiteProps> = ({to: link}) => {
    const goToLink = async() => {
        const supportedUrls = ['http','https'] 

        if(link?.length <= 0){
            return;
        }
        const supported = supportedUrls?.includes(link?.split(':')[0]);
        if(!supported){
            Alert.alert('Link no valido', 'Este link no es un link permitido');
            return;
        }
        await Linking.openURL(link);
    }

    const onLinkPressed = () => {
        Alert.alert(
            'Ir a Link de publicación',
            `¿Viajar a ${link} ?`,
            [
              {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Si', onPress: () => goToLink()},
            ],
            {cancelable: true},
          );
    }
  return (
    <TouchableOpacity 
    onPress={onLinkPressed}
    className='w-full my-0.5'>
        <Text className='text-blue-500 outline mx-2'>{link}</Text>
    </TouchableOpacity>
  )
}
