import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, Button, FlatList, ImageBackground, Modal, Text, TouchableOpacity, View } from 'react-native'
import { StackExploreParams } from '../../routes/StackExplore'
import { ActivityIndicatorLoadingList, BackpackItem, LoadingLogo } from '../../shared/components'
import { useAppTheme, useBackpackStore, useExploreStore } from '../../shared/hooks'
import { HeaderLogo } from '../../shared/components'
import { NoItemsInList } from '../../shared/views'
import { SearchBar } from '../components'
import { AddBackpackView } from '../views'
const imageBackgroundLight = require('../../assets/logos/oso_fime_gris_light.png');
const imageBackgroundDark = require('../../assets/logos/oso_fime_gris_dark.png');
const imageTransparent = require('../../assets/logos/transparent.png');
import Icon from 'react-native-vector-icons/Ionicons';

const ExploreContentScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams>>()
  const { backpackList, startLoadingBackpackList, isLoadingExplore } = useExploreStore();
  const { startLoadingCurrentBackpack } = useBackpackStore();
  const { texts, themeSeleted, buttons, primaryColor, screens } = useAppTheme()
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerTitle:() => {
        return(
          <HeaderLogo/>
        )
      },
    })
    startLoadingBackpackList();
  }, [])

  const handleClickBackpack = (backpackId: string) => {
    startLoadingCurrentBackpack(backpackId);
    navigation.navigate('Backpack',{
      id: backpackId,
    })

  }

  return (
    <>
    
    <ImageBackground  
        imageStyle={{ width: isLoadingExplore ? 0 : "100%", height: isLoadingExplore ? 0 : 500 }} 
        resizeMode='contain' 
        source={ isLoadingExplore ? imageTransparent : (
          themeSeleted === 'light' ?
          imageBackgroundLight
          : imageBackgroundDark
        ) }
      >
      {
        isLoadingExplore ? 
        <LoadingLogo/>  
        : (
          <>
          <FlatList
            data={backpackList}
            ListEmptyComponent={() => <NoItemsInList/>}
            ItemSeparatorComponent={() => <View className='my-1 h-1'/>}
            ListHeaderComponent={() => (
              <View className='w-full items-center my-1 py-2'>
                <Text 
                className='my-2 font-semibold text-3xl text-center'
                style={{color: texts.labelColor}}>
                  Planes De Estudio
                </Text>
                <SearchBar/>
              </View>
            )}
            // numColumns={1}
            // contentContainerStyle={{ gap: 10, margin:5 }}
            // columnWrapperStyle={{ gap: 10, margin:5 }}
            renderItem={({ item, index }) => (
              <BackpackItem 
                name={item.title}
                onPress={() => handleClickBackpack(item.id)}
                />
            )}
          />
          </>
        )
      }

      

      <Modal
        onRequestClose={() => {
            setModalVisible(false)
        }}
        animationType="fade"
        transparent={false} 
        visible={modalVisible} >

          <AddBackpackView onCloseContent={() => setModalVisible(false)}/>
            {/* <MenuContentForNotebook 
                onCloseContent={() => setModalVisible(false)}
            /> */}
      </Modal>

    </ImageBackground>
    <TouchableOpacity 
        className='rounded-full p-3'
        style={{ position: 'absolute', bottom: 100, right: 30, zIndex: 10, backgroundColor: primaryColor}}
        onPress={() => {
          setModalVisible(true)   
        }}>
          <Icon name="add" size={30} color={"#fff"} />
      </TouchableOpacity>
    </>
  )
}

export  { ExploreContentScreen }
