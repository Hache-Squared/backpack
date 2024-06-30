import { createStackNavigator } from '@react-navigation/stack';
import { BackpackScreen, ExploreContentScreen, NotebookScreen } from '../explore/screens';

export type StackExploreParams = {
  ExploreContent: undefined,
  Backpack: undefined,
  Notebook: undefined
}


const Stack = createStackNavigator<StackExploreParams>();

export const StackExplore = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent'
      }
    }}
    >
      <Stack.Screen name="ExploreContent" component={ExploreContentScreen} />
      <Stack.Screen name="Backpack" component={BackpackScreen} />
      <Stack.Screen name="Notebook" component={NotebookScreen} />
    </Stack.Navigator>
  );
}