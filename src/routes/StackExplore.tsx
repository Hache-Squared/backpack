import { createStackNavigator } from '@react-navigation/stack';
import { BackpackScreen, ExploreContentScreen, NotebookScreen, ResourceViewScreen } from '../explore/screens';
import { useAppTheme } from '../shared/hooks';

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
  },
  Publications: undefined
}


const Stack = createStackNavigator<StackExploreParams>();

export const StackExplore = () => {
  const { screens } = useAppTheme()
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
          backgroundColor: screens.primaryColor,
      },
      cardStyle: {
        backgroundColor: screens.secondaryColor
      }
    }}
    >
      <Stack.Screen name="ExploreContent" options={{title: 'Explorar Contenido'}} component={ExploreContentScreen} />
      <Stack.Screen name="Backpack" component={BackpackScreen} />
      <Stack.Screen name="Notebook" component={NotebookScreen} />
      <Stack.Screen name="ResourceView" component={ResourceViewScreen} />
      
    </Stack.Navigator>
  );
}