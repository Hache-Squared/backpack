import { createStackNavigator } from '@react-navigation/stack';
import { BackpackScreen, ExploreContentScreen, NotebookScreen, ResourceViewScreen } from '../explore/screens';

export type StackExploreParams = {
  ExploreContent: undefined,
  Backpack: undefined,
  Notebook: undefined,
  ResourceView: undefined,
  Publications: undefined
}


const Stack = createStackNavigator<StackExploreParams>();

export const StackExplore = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent'
      },
    }}
    >
      <Stack.Screen name="ExploreContent" options={{title: 'Explorar Contenido'}} component={ExploreContentScreen} />
      <Stack.Screen name="Backpack" component={BackpackScreen} />
      <Stack.Screen name="Notebook" component={NotebookScreen} />
      <Stack.Screen name="ResourceView" component={ResourceViewScreen} />
      
    </Stack.Navigator>
  );
}