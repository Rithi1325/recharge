import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './home/HomeScreen';
import TransactionsScreen from './transactions/TransactionScreen';
import ReportsScreen from './reports/ReportsScreen';
import ChatSupportScreen from './support/ChatSupportScreen';
import HelpScreen from './help/HelpScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import LogoutConfirmationScreen from './LogoutConfirmationScreen';
import NotificationScreen from './NotificationScreen';
import AddMoneyScreen from './home/AddMoneyScreen';
import WithdrawScreen from './home/WithdrawScreen';
import ECommerceScreen from './home/ECommerceScreen'; 
import PlansScreen from './home/PlansScreen';
import DTHScreen from './home/DTHScreen'
import { useTheme } from './ThemeContext';
import MobileRechargeScreen from './home/MobileRechargeScreen';
import AvailablePlansScreen from './home/AvailablePlansScreen';
import PaymentScreen from './PaymentScreen';
import PaymentProcess from '../screens/PaymentProcess';
import ElectricityScreen from './home/ElectricityScreen';
import ShoppingPage from './home/ShoppingPage'; // Adjust path as necessary
;

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  const { isDarkMode } = useTheme();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
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

const CustomHeader = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.headerContainer, { backgroundColor: isDarkMode ? 'darkblue' : 'blue' }]}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Icon name="notifications" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTab" component={TabNavigator} />
    <Stack.Screen name="Notifications" component={NotificationScreen} />
    <Stack.Screen name="AddMoney" component={AddMoneyScreen} />
    <Stack.Screen name="ECommerce" component={ECommerceScreen} />
    <Stack.Screen name="Withdraw" component={WithdrawScreen} />
    <Stack.Screen name="Recharge" component={MobileRechargeScreen} />
    <Stack.Screen name="PlansScreen" component={PlansScreen} />
    <Stack.Screen name="DTHScreen" component={DTHScreen} />
    <Stack.Screen name="AvailablePlans" component={AvailablePlansScreen} />
    <Stack.Screen name="Electricity" component={ElectricityScreen} />
    <Stack.Screen name="PaymentProcess" component={PaymentProcess} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="Shopping" component={ShoppingPage} />
  </Stack.Navigator>
);

const DrawerContent = (props) => (
  <View style={styles.drawerContent}>
    <Text style={styles.profileName}>Your Name</Text>
    <View style={styles.drawerSection}>
      <DrawerItemList {...props} />
    </View>
  </View>
);

const Dashboard = () => {
  const { isDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? 'black' : 'white'} />
      <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: true, 
          header: (props) => <CustomHeader {...props} />,
          drawerStyle: styles.drawerStyle,
          drawerActiveBackgroundColor: 'rgba(0, 0, 255, 0.1)',
          drawerInactiveBackgroundColor: 'transparent',
          drawerActiveTintColor: '#000',
          drawerInactiveTintColor: '#888',
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={StackNavigator} 
          options={{ 
            drawerIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
            drawerLabel: () => (
              <Text style={{ color: '#000', fontFamily: 'Poppins-Medium' }}>Home</Text>
            ),
          }} 
        />
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Icon name="person" size={24} color={color} />,
            drawerLabel: () => (
              <Text style={{ color: '#000', fontFamily: 'Poppins-Medium' }}>Profile</Text>
            ),
          }} 
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Icon name="settings" size={24} color={color} />,
            drawerLabel: () => (
              <Text style={{ color: '#000', fontFamily: 'Poppins-Medium' }}>Settings</Text>
            ),
          }} 
        />
        <Drawer.Screen 
          name="Logout" 
          component={LogoutConfirmationScreen} 
          options={{ 
            drawerIcon: ({ color }) => <Icon name="log-out" size={24} color={color} />,
            drawerLabel: () => (
              <Text style={{ color: '#000', fontFamily: 'Poppins-Medium' }}>Logout</Text>
            ),
          }} 
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  drawerContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  profileName: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
  },
  drawerSection: {
    flex: 1,
    marginTop: 20,
  },
});

export default Dashboard;
