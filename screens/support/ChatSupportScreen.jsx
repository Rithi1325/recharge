import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';

const ChatSupportScreen = () => {
  const faqs = [
    { question: "How do I reset my password?", answer: "To reset your password, go to Settings > Account > Reset Password." },
    { question: "How do I check my transaction history?", answer: "You can view your transaction history in the Transactions tab." },
    { question: "What should I do if my payment fails?", answer: "If your payment fails, please check your internet connection and try again. If the problem persists, contact support." },
    { question: "How do I enable two-factor authentication?", answer: "Go to Settings > Security > Two-Factor Authentication to enable." },
  ];

  const renderFAQItem = ({ item }) => (
    <View style={styles.faqItem}>
      <Text style={styles.faqQuestion}>{item.question}</Text>
      <Text style={styles.faqAnswer}>{item.answer}</Text>
    </View>
  );

  const startChat = () => {
    // Replace this with actual chat logic (e.g., navigate to chat screen)
    Alert.alert("Chat Started", "You are now connected with our support team.");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chat Support</Text>
      <Text style={styles.subtitle}>We're here to help you!</Text>
      
      <View style={styles.chatContainer}>
        <Text style={styles.chatInstruction}>Start a chat with our support team:</Text>
        <TouchableOpacity style={styles.chatButton} onPress={startChat}>
          <Text style={styles.chatButtonText}>Start Chat</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
      <FlatList
        data={faqs}
        renderItem={renderFAQItem}
        keyExtractor={(item) => item.question}
        style={styles.faqList}
      />

      <View style={styles.contactContainer}>
        <Text style={styles.contactTitle}>Contact Support:</Text>
        <Text style={styles.contactText}>Email: support@paymentapp.com</Text>
        <Text style={styles.contactText}>Phone: +1-800-555-0199</Text>
      </View>
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  chatContainer: {
    marginBottom: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
  chatInstruction: {
    fontSize: 16,
    marginBottom: 10,
  },
  chatButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  faqList: {
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3, // For Android
  },
  faqQuestion: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  faqAnswer: {
    marginTop: 5,
    color: '#333',
  },
  contactContainer: {
    marginTop: 20,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 3,
    color: '#333',
  },
});

export default ChatSupportScreen;
