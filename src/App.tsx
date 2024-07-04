import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabNavigator } from './routes/TabNavigator';
import { Provider } from 'react-redux';
import { store } from './store';
function App(): React.JSX.Element {

  return (
    <Provider store={store}>

      <NavigationContainer>
        <TabNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
