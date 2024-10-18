import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { Icons } from '../file/index';

const SplashScreen = ({ navigation }) => {
  const slideAnim = useRef(new Animated.Value(-100)).current; // Initial position off the screen
  const scaleAnim = useRef(new Animated.Value(0)).current; // Initial scale

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0, // Final position at the center
        duration: 1000, // Animation duration
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1, // Final scale to normal size
        duration: 1000, // Animation duration
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation, slideAnim, scaleAnim]);

  const renderIcon = (source, label) => (
    <View style={styles.iconWrapper}>
      <Image source={source} style={styles.icon} />
      <Text style={styles.iconLabel}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/images/icon.png')} 
          autoPlay
          loop
          style={styles.animation}
        />
        <Animated.View
          style={[styles.logoContainer, { 
            transform: [
              { translateX: slideAnim },
              { scale: scaleAnim }
            ]
          }]}
        >
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        </Animated.View>
      </View>

      <View style={styles.iconsContainer}>
        {renderIcon(Icons.globalResearch)}
        {renderIcon(Icons.serviceCloud)}
        {renderIcon(Icons.cyberSecurity)}
      </View>

      <Text style={styles.bottomText}>
        In trust and security rated for highest grade
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  animationContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    marginTop: 20,
  },
  logo: {
    width: 130,
    height: 130,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconLabel: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
  },
  bottomText: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 20,
    // Additional styling for visibility
    opacity: 1, // Make sure the text is visible
  },
});

export default SplashScreen;
