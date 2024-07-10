import { createStackNavigator } from '@react-navigation/stack';
import { ProfileCardScreen, SettingsScreen } from '../profile/screens';
import { useAppTheme } from '../shared/hooks';
import { LocalSheetScreen, MyBackpackScreen, LocalNotebookScreen, LocalResourceViewScreen } from '../myBackpack/screens';


export type StackProfileParams = {
  ProfileCard: undefined,
  MyBackpack: undefined,
  LocalNotebook: undefined,
  LocalSheet: undefined,
  Settings: undefined,
  LocalResourceView: undefined
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
      <Stack.Screen name="ProfileCard" 
      options={{
        title: 'Perfil De Aplicación',
        headerShown: false
      }} 
      component={ProfileCardScreen} />
      <Stack.Screen name="MyBackpack" options={{title: 'Mi Mochila'}} component={MyBackpackScreen} />
      <Stack.Screen name="LocalNotebook" options={{title: 'Hojas'}} component={LocalNotebookScreen} />
      <Stack.Screen name="LocalSheet" options={{title: 'Contenido'}} component={LocalSheetScreen} />
      <Stack.Screen name="LocalResourceView" options={{title: 'Libro En Local'}} component={LocalResourceViewScreen} />

      <Stack.Screen name="Settings" component={SettingsScreen} />
      
    </Stack.Navigator>
  );
}