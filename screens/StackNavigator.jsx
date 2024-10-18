import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'; // import TabNavigator

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTab" component={TabNavigator} />
    {/* You can add more screens here */}
  </Stack.Navigator>
);

export default StackNavigator;
