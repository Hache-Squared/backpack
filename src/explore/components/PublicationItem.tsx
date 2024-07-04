import React, { FC } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { LinkToAnotherSite } from './PublicationsComponents'
import { useAppTheme } from '../../shared/hooks'


interface PublicationItemProps {
    title: string,
    link?: string,
    image?: string,

}
export const PublicationItem: FC<PublicationItemProps> = ({ title = '', link, image }) => {
  const { publications } = useAppTheme()
   
  return (
    <View className='w-11/12  self-center rounded-sm shadow-sm shadow-purple-200 py-2 b-red-400 flex-col' style={{backgroundColor: publications.backgroundColor}}>
        <Text className='mx-2 text-base font-semibold' style={{color: publications.textColor}}>{title}</Text>
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
                    <LinkToAnotherSite to={link}/>
                    {/* <LinkToAnotherSite to={'https://www.npmjs.com/package/react-native-pdf'}/>
                    <LinkToAnotherSite to={'https://southbend.iu.edu/students/academic-success-programs/academic-centers-for-excellence/docs/Basic%20Math%20Review%20Card.pdf'}/>
                    
                    <LinkToAnotherSite to={'slack://open?team=123456'}/>
                    <LinkToAnotherSite to={'https://www.youtube.com/watch?v=FJKkVQZQy5w&list=RD9x0ktT1zmlo&index=2'}/> */}
                </>
            )
        }


    </View>
  )
}
