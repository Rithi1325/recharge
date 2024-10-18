import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icons from '../file/index'; // Ensure the path is correct

const LogoutConfirmationScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform any logout logic here, then navigate to success screen
    navigation.navigate('LogoutSuccess'); // Ensure LogoutSuccess is defined in your navigator
  };

  return (
    <View style={styles.screen}>
      <Image source={Icons.logout} style={styles.icon} />
      <Text style={styles.message}>Oh no! You're leaving... Are you sure?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Nah, Just Kidding</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Yes, Log Me Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Added color for better readability
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
    elevation: 3, // Added elevation for Android shadow
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default LogoutConfirmationScreen;
