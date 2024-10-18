import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SplashScreenComponent from './screens/SplashScreen';
import LoginPage from './screens/LoginPage';
import OtpVerification from './screens/OtpVerification';
import UpdateProfile from './screens/UpdateProfile';
import Dashboard from './screens/Dashboard';
import { ThemeProvider } from './screens/ThemeContext';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null; // Prevent rendering until fonts are loaded

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen 
            name="Splash" 
            component={SplashScreenComponent} 
            options={{ headerShown: false }} 
          />
          {/* <Stack.Screen 
            name="Home" 
            component={Dashboard} 
            options={{ headerShown: false }} 
          /> */}
          <Stack.Screen 
            name="Login" 
            component={LoginPage} 
          />
          <Stack.Screen 
            name="OtpVerification" 
            component={OtpVerification} 
          />
          <Stack.Screen 
            name="UpdateProfile" 
            component={UpdateProfile} 
          />
          <Stack.Screen 
            name="Dashboard" 
            component={Dashboard} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
