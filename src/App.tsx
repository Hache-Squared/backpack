import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TabNavigator } from './routes/TabNavigator';
import { Provider } from 'react-redux';
import { store } from './store';
import { PermissionsChecker } from './shared/components/PermissionsChecker';
import { StackLogin } from './routes/StackLogin';
function App(): React.JSX.Element {

  return (
    <Provider store={store}>

      <NavigationContainer>
        <PermissionsChecker>
          {/* <TabNavigator/> */}
          <StackLogin/>
        </PermissionsChecker>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
