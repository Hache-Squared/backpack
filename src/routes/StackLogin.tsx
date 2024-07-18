import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, ProfileCardScreen, SettingsScreen } from '../profile/screens';
import { useAppTheme } from '../shared/hooks';
import { LocalSheetScreen, MyBackpackScreen, LocalNotebookScreen, LocalResourceViewScreen } from '../myBackpack/screens';
import { TabNavigator } from './TabNavigator';
import { StatusBar } from 'react-native';


export type StackLoginParams = {
  Login: undefined,
  Main: undefined,
}


const Stack = createStackNavigator<StackLoginParams>();

export const StackLogin = () => {
  const { primaryColor } = useAppTheme()
  return (
    <>
    <StatusBar
        animated={true}
        backgroundColor={primaryColor}
    />
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Login" 
      options={{
        // title: 'Perfil De Aplicación',
        headerShown: false
      }} 
      component={LoginScreen} />
      
      <Stack.Screen name="Main" 
      options={{
        // title: 'Perfil De Aplicación',
        headerShown: false
      }} 
      component={TabNavigator} />
      
      
    </Stack.Navigator>
    </>
  );
}