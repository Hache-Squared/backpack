import { createStackNavigator } from '@react-navigation/stack';
import { ProfileCardScreen, SettingsScreen } from '../profile/screens';


export type StackProfileParams = {
  ProfileCard: undefined,
  Settings: undefined
}


const Stack = createStackNavigator<StackProfileParams>();

export const StackProfile = () => {
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
      <Stack.Screen name="ProfileCard" component={ProfileCardScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      
    </Stack.Navigator>
  );
}