import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import ContactDetail from '../Containers/Contact/ContactDetail';
import ContactList from '../Containers/Contact/ContactList';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="ContactList"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="ContactList" component={ContactList} />
      <Stack.Screen name="ContactDetail" component={ContactDetail} />
    </Stack.Navigator>
  );
}
