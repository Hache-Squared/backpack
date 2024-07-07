import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { StackProfileParams } from '../../routes/StackProfile';
import { useMyBackpackStore } from '../../shared/hooks';
import { FlatList, View } from 'react-native';
import { SheetItem } from '../../shared/components';
import { SheetFolder } from '../../types';

const LocalNotebookScreen = () => {
  
    const navigation = useNavigation<NavigationProp<StackProfileParams>>();
    const { currentLocalNotebook, startLoadingCurrentLocalSheetWatching} = useMyBackpackStore();
    
    const handleOnPressSheet = async(sheet: SheetFolder) => {
      let status = await startLoadingCurrentLocalSheetWatching(sheet);
      if(!status){
        return;
      }
      navigation.navigate('LocalSheet')
    }

    return (
      <>
        <View className='my-2'/>
        <FlatList
          data={currentLocalNotebook?.sheets || []}
          ItemSeparatorComponent={() => <View className='my-1'/>}
          renderItem={({item, index}) => (
              <SheetItem
                  name={item.title}
                  key={item.id}
                  onPress={() => handleOnPressSheet(item)}
              />
          )}
          ListFooterComponent={() => <View className='my-10' />}
        />
      </>
    )
}



export { LocalNotebookScreen }
