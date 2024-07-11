import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { StackExploreParams } from '../../routes/StackExplore';
import { useAppTheme, useBackpackStore, useNotebookStore } from '../../shared/hooks';
import { StackNavigationOptions } from '@react-navigation/stack';
import { LoadingLogo, NotebookItem, SelectViewFromBackpack } from '../../shared/components';
import { NoteBooksView, BooksView, PublicationsView } from '../views';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { InitNotebookState } from '../../types';
import { NoItemsInList } from '../../shared/views';


const SearchNotebookResultsScreen = () => {
  const navigation = useNavigation<NavigationProp<StackExploreParams, 'SearchNotebookResults'>>();
  const { buttons, primaryColor } = useAppTheme();
  const { searchText } = useRoute<RouteProp<StackExploreParams, 'SearchNotebookResults'>>().params;
  const { startSearchNotebooks, isLoadingNotebook } = useNotebookStore();
  const [results, setResults] = useState<InitNotebookState[]>([]);

  const options: StackNavigationOptions = {
      title: 'Resultados de ' + searchText,
      headerLeft: (props) => (<Icon {...props} name="chevron-back-outline" size={30} color={buttons.textColor} />),
  }
  useEffect(() => {
    
    navigation.setOptions(options);
    handleSearchNotebooks()

    // return () => {
    //   startResetingBackpack();
    // }
  },[])
  const handleSearchNotebooks = async() => {
    const notebooks = await startSearchNotebooks(searchText);
    if(notebooks.length === 0){
      // Alert.alert('No hay resultados', 'No se encontraron resultados para su búsqueda.');
      return;
    }
    setResults(notebooks)
  }


  return (
    <>
    {
        isLoadingNotebook ? (
          <LoadingLogo/>
        ) : (
          <FlatList
            data={results}
            ListEmptyComponent={() => <NoItemsInList/>}
            ListHeaderComponent={() => <View className='w-full h-5'/>}
            ItemSeparatorComponent={() => <View className='my-1 h-1'/>}
            renderItem={({item, index}) => (
                <NotebookItem
                    name={item.title}
                    key={item.id}
                    onPress={() => navigation.navigate('Notebook', {
                      id: item.id
                    })}
                />
            )}
            ListFooterComponent={() => <View className='my-10 h-10' />}
          />
        )
      }
    </>
  )
}

export  { SearchNotebookResultsScreen }
