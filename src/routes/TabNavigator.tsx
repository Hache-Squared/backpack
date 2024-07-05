import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackExplore } from './StackExplore';
import { StackProfile } from './StackProfile';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../shared/hooks';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { tabBar } = useAppTheme()

  useEffect(()=>{

  },[])

  return (
    <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarLabelStyle: {
                marginBottom: 5
            },
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
                backgroundColor: tabBar.backgroundColor,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15
            },
            tabBarIconStyle: {
              // color: tabBar.labelColorActive
            },
            tabBarActiveTintColor: tabBar.labelColorActive,
            tabBarInactiveTintColor: tabBar.labelColorInactive,
            
        }}
    >
      <Tab.Screen name="Explore" options={{ title: 'Explorar', tabBarIcon: ({ color }) => ( <Icon name="school-outline" size={30} color={color} />) }} component={StackExplore} />
      <Tab.Screen name="Profile" options={{ title: 'Perfil',   tabBarIcon: ({ color }) => ( <Icon name="happy-outline" size={30} color={color} /> ) }} component={StackProfile} />
    </Tab.Navigator>
  );
}