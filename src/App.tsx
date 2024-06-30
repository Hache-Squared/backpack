import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <View>
        <Text>Hola mundo desde mi MAC =D jeje</Text>
      </View>
    </NavigationContainer>
  );
}

export default App;
