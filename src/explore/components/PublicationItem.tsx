import React, { FC } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { LinkToAnotherSite } from './PublicationsComponents'


interface PublicationItemProps {
    title: string,
    link?: string,
    image?: string,

}
export const PublicationItem: FC<PublicationItemProps> = ({ title = '', link, image }) => {
    
   
  return (
    <View className='w-full py-2 bg-red-400 flex-col'>
        <Text className='mx-2 text-base font-semibold'>{title}</Text>
        {/* The content can be image or url */}
        {
            image && (
                <Image 
                className='w-full object-contain h-[200px]'
                source={{uri: image}}/>
            )
        }

        {
            link && (
                <>
                    <LinkToAnotherSite to={'https://reactnative.dev/docs/linking?syntax=ios'}/>
                    <LinkToAnotherSite to={'https://www.npmjs.com/package/react-native-pdf'}/>
                    <LinkToAnotherSite to={'https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf'}/>
                    
                    <LinkToAnotherSite to={'slack://open?team=123456'}/>
                    <LinkToAnotherSite to={'https://www.youtube.com/watch?v=FJKkVQZQy5w&list=RD9x0ktT1zmlo&index=2'}/>
                </>
            )
        }


    </View>
  )
}
