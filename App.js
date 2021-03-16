import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppStack from './src/Navigators/AppStack';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store';

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <AppStack />
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}
