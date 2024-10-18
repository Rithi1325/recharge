import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import { useTheme } from './ThemeContext'; // Adjust the path as necessary

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const settingsOptions = [
    { title: "Personal Information", icon: "person" },
    { title: "Service Settings", icon: "settings" },
    { title: "Account Settings", icon: "lock-closed" },
    { title: "Subscription Settings", icon: "card" },
    { title: "Payment Settings", icon: "cash" },
    { title: "Support", icon: "help-circle" },
  ];

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>

      {/* Dark Mode Toggle Container */}
      <View style={[styles.optionContainer, { backgroundColor: isDarkMode ? '#1c1c1c' : '#fff' }]}>
        <TouchableOpacity style={styles.toggleRow}>
          <Icon name={isDarkMode ? "moon" : "sunny"} size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleTheme}
            value={isDarkMode}
          />
        </TouchableOpacity>
      </View>

      {/* Individual Containers for Settings Options */}
      {settingsOptions.map((option, index) => (
        <View key={index} style={[styles.optionContainer, { backgroundColor: isDarkMode ? '#1c1c1c' : '#fff' }]}>
          <TouchableOpacity style={styles.option}>
            <Icon name={option.icon} size={24} color={isDarkMode ? '#fff' : '#000'} />
            <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>{option.title}</Text>
            <Icon name="chevron-forward" size={24} color={isDarkMode ? '#fff' : '#000'} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Poppins-Bold",
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10, // Reduced padding for the toggle row
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
  },
  optionContainer: {
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15, // Consistent padding with other options
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 8,
    fontFamily: "Poppins-Medium",
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default SettingsScreen;
