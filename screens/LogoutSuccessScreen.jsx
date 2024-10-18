import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Icons } from '../file/index'; // Adjust the path as necessary

const LogoutSuccessScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Image source={Icons.thumbsUp} style={styles.icon} />
    <Text style={styles.message}>You've successfully logged out.</Text>
    <Button title="Back to Login" color="red" onPress={() => navigation.navigate('Login')} />
  </View>
);

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
  },
});

export default LogoutSuccessScreen;
