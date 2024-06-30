import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackExplore } from './StackExplore';
import { StackProfile } from './StackProfile';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
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
      <Tab.Screen name="Explore" options={{ title: 'Explorar', tabBarIcon: ({ color }) => ( <Icon name="school-outline" size={30} color={color} />) }} component={StackExplore} />
      <Tab.Screen name="Profile" options={{ title: 'Perfil',   tabBarIcon: ({ color }) => ( <Icon name="happy-outline" size={30} color={color} /> ) }} component={StackProfile} />
    </Tab.Navigator>
  );
}