import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import ContactDetail from '../Containers/Contact/ContactDetail';
import Contact from '../Containers/Contact/Contact';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerTitle: ''}}
      />
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetail}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}
