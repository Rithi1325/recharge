import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = ({ navigation }) => {
  const handleContactSupport = () => {
    // Navigate to a support contact screen or perform an action
    alert('Contacting Support...');
  };

  const tips = [
    "Keep your app updated for the latest features and security enhancements.",
    "Set up two-factor authentication for added security.",
    "Check our FAQ section for quick answers to common questions.",
    "For payment issues, ensure your payment method is valid and your internet connection is stable.",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Help & Support!</Text>
      <Text style={styles.description}>
        We're here to help you make the most of your experience with our payment app. Whether you have questions about features, need assistance, or want to learn tips for using the app effectively, you've come to the right place!
      </Text>

      <Button title="Contact Support" onPress={handleContactSupport} color="#007bff" />

      <Text style={styles.sectionTitle}>Quick Tips for a Better Experience</Text>
      {tips.map((tip, index) => (
        <View key={index} style={styles.tipItem}>
          <Text style={styles.tipText}>• {tip}</Text>
        </View>
      ))}

      <Text style={styles.contactInfo}>Need further assistance? Reach us at:</Text>
      <Text style={styles.contactDetail}>Email: support@paymentapp.com</Text>
      <Text style={styles.contactDetail}>Phone: +1-800-555-0199</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
  },
  tipItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f8f9fa',
  },
  tipText: {
    fontSize: 16,
    color: '#333',
  },
  contactInfo: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  contactDetail: {
    fontSize: 16,
    marginVertical: 2,
    color: '#333',
  },
});

export default HelpScreen;
