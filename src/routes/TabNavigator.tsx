import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackExplore } from './StackExplore';
import { StackProfile } from './StackProfile';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent'
            },
            tabBarLabelStyle: {
                marginBottom: 5
            },
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0
            }
        }}
    >
      <Tab.Screen name="Explore" options={{ title: 'Explorar', tabBarIcon: ({ color }) => (<Text style={{color}}>icono</Text>) }} component={StackExplore} />
      <Tab.Screen name="Profile" options={{ title: 'Perfil',   tabBarIcon: ({ color }) => (<Text style={{color}}>icono</Text>) }} component={StackProfile} />
    </Tab.Navigator>
  );
}