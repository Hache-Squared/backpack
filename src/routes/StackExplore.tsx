import { createStackNavigator } from '@react-navigation/stack';
import { BackpackScreen, ExploreContentScreen, NotebookScreen, ResourceViewScreen } from '../explore/screens';
import { useAppTheme } from '../shared/hooks';
import { HeaderLogo } from '../shared/components';
import { BookListItem } from '../types';
import { useNetInfo } from '@react-native-community/netinfo';
import { Text, View } from 'react-native';
import { NoInternet } from '../explore/views';

export type StackExploreParams = {
  ExploreContent: undefined,
  Backpack: {
    id: string,
  },
  Notebook: {
    id: string,
  },
  ResourceView: {
    uriResource: string,
    data: BookListItem
  },
  Publications: undefined
}


const Stack = createStackNavigator<StackExploreParams>();

export const StackExplore = () => {
  const { screens, secondaryColor } = useAppTheme()
  const { isInternetReachable } = useNetInfo()
  if(!isInternetReachable){
    return(
      <NoInternet/>
    )
  }
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: screens.titleColor,
      },
      
      headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
          backgroundColor: secondaryColor,
      },
      cardStyle: {
        backgroundColor: screens.secondaryColor
      }
    }}
    >
      <Stack.Screen name="ExploreContent" options={{title: 'Explorar Contenido'}} component={ExploreContentScreen} />
      <Stack.Screen name="Backpack" component={BackpackScreen} />
      <Stack.Screen name="Notebook" component={NotebookScreen} />
      <Stack.Screen name="ResourceView" options={{title: 'Viendo Libro'}} component={ResourceViewScreen} />
      
    </Stack.Navigator>
  );
}