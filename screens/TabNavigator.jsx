// src/components/TabNavigator.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import TransactionsScreen from './transactions/TransactionScreen';
import ReportsScreen from './reports/ReportsScreen';
import ChatSupportScreen from './support/ChatSupportScreen';
import HelpScreen from './help/HelpScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../ThemeContext'; // Adjust the path as necessary

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { isDarkMode } = useTheme();

  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#000' : '#fff',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: isDarkMode ? '#fff' : '#000',
        tabBarInactiveTintColor: isDarkMode ? '#888' : '#666',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} /> }} 
      />
      <Tab.Screen 
        name="Transactions" 
        component={TransactionsScreen}
        options={{ tabBarIcon: ({ color }) => <Icon name="cash" size={24} color={color} /> }} 
      />
      <Tab.Screen 
        name="Reports" 
        component={ReportsScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="document-text" size={24} color={color} /> }} 
      />
      <Tab.Screen 
        name="Support" 
        component={ChatSupportScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="chatbubble" size={24} color={color} /> }} 
      />
      <Tab.Screen 
        name="Help" 
        component={HelpScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="help-circle" size={24} color={color} /> }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
