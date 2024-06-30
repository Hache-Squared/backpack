import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabNavigator } from './routes/TabNavigator';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App;
