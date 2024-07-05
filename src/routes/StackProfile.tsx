import { createStackNavigator } from '@react-navigation/stack';
import { ProfileCardScreen, SettingsScreen } from '../profile/screens';
import { useAppTheme } from '../shared/hooks';


export type StackProfileParams = {
  ProfileCard: undefined,
  Settings: undefined
}


const Stack = createStackNavigator<StackProfileParams>();

export const StackProfile = () => {
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
      <Stack.Screen name="ProfileCard" options={{title: 'Perfil De Aplicación'}} component={ProfileCardScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      
    </Stack.Navigator>
  );
}