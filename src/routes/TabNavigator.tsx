import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackExplore } from './StackExplore';
import { StackProfile } from './StackProfile';
import { Alert, StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '../shared/hooks';
import { useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const { tabBar, statusBarColor } = useAppTheme()
  const navigation = useNavigation()
  const theme: BottomTabNavigationOptions = useMemo(() => {
    return {
      headerShown:false,
      tabBarLabelStyle: {
          marginBottom: 5
      },
      tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: tabBar.backgroundColor,
          // borderTopRightRadius: 15,
          // borderTopLeftRadius: 15,

          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          position: 'absolute'
          // overflow: 'hidden',
      },
      
      tabBarIconStyle: {
        // color: tabBar.labelColorActive
      },
      tabBarActiveTintColor: tabBar.labelColorActive,
      tabBarInactiveTintColor: tabBar.labelColorInactive,
      
  }
  }, [tabBar.backgroundColor, navigation])
  // useEffect(()=>{
  //   Alert.alert('Me renderice Tab')
  // },[tabBar.backgroundColor])

  return (
    <>
      <StatusBar 
        animated={true}
        backgroundColor={statusBarColor}
      />
      <Tab.Navigator
          screenOptions={theme}
          >
        <Tab.Screen name="Explore" options={{ title: 'Explorar', tabBarIcon: ({ color }) => ( <Icon name="school-outline" size={30} color={color} />) }} component={StackExplore} />
        <Tab.Screen name="Profile" options={{ title: 'Perfil',   tabBarIcon: ({ color }) => ( <Icon name="happy-outline" size={30} color={color} /> ) }} component={StackProfile} />
      </Tab.Navigator>
    </>
  );
}