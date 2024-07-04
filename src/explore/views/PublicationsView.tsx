import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { PublicationItem } from '../components'

export const PublicationsView = () => {
  return (
    <>
      <View className='my-2'/>
      <FlatList
        data={[1,2,3,4,5,6,7,8,9,10,11]}
        ItemSeparatorComponent={() => <View className='my-1'/>}
        renderItem={({item, index}) => (
           <PublicationItem
           title={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum recusandae mollitia, repudiandae amet vero blanditiis adipisci repellendus minima expedita maxime ut veniam laborum asperiores distinctio optio, velit vel suscipit quasi!'} 
           image={'https://todoseguros.com.mx/wp-content/uploads/2021/10/img1-1.jpg'}
           link='https://www.linguee.es/espanol-ingles/traduccion/publicaci%C3%B3n.html'
           />
        )}
        ListFooterComponent={() => <View className='my-10' />}
        
      />
    </>
  )
}
