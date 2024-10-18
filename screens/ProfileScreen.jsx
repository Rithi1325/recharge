import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; // Adjust the path as necessary

const ProfileScreen = () => {
  const { isDarkMode } = useTheme(); // Access theme context

  const handleImagePick = () => {
    // Logic for picking an image from the gallery or camera
  };

  const handleSave = () => {
    // Logic for saving the profile information
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#f5f5f5' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#333' }]}>Edit Profile</Text>
      
      <TouchableOpacity onPress={handleImagePick} style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/user.png')} // Default image
          style={styles.profileImage}
        />
      </TouchableOpacity>

      <TextInput 
        placeholder="Name" 
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'} // Placeholder color
        style={[styles.input, { backgroundColor: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#000' }]} 
        autoCapitalize="words"
      />
      <TextInput 
        placeholder="Email" 
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'} // Placeholder color
        style={[styles.input, { backgroundColor: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#000' }]} 
        keyboardType="email-address" 
        autoCapitalize="none" 
      />
      <TextInput 
        placeholder="Contact Number" 
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'} // Placeholder color
        style={[styles.input, { backgroundColor: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#000' }]} 
        keyboardType="phone-pad" 
      />
      <Button title="Save" onPress={handleSave} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#007BFF', // Border color for better visibility
  },
});

export default ProfileScreen;
