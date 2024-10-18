import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as Font from 'expo-font'; // Make sure you have expo-font installed

const WithdrawScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('Bank Transfer'); // Default withdrawal method
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'), // Adjust the path
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'), // Adjust the path
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  const handleWithdraw = () => {
    alert(`Withdrawing ₹${amount} via ${method}`);
    setAmount(''); // Clear the input field after withdrawal
    setMethod('Bank Transfer'); // Reset to default method
  };

  // Import your images
  const bankTransferImg = require('../../assets/images/bank.png'); // Adjust the path
  const paypalImg = require('../../assets/images/paypal.png'); // Adjust the path
  const debitCardImg = require('../../assets/images/card.png'); // Adjust the path
  const gpayImg = require('../../assets/images/gpay.png'); // Adjust the path

  if (!fontLoaded) {
    return null; // You can return a loading screen if you want
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Withdraw Funds</Text>
      <Text style={styles.description}>
        Please enter the amount you wish to withdraw and select a withdrawal method.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Amount (₹)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Select Withdrawal Method:</Text>
      <View style={styles.methodContainer}>
        {['Bank Transfer', 'PayPal', 'Debit Card', 'GPay'].map((item, index) => (
          <TouchableOpacity
            key={item}
            style={[styles.methodButton, method === item && styles.selectedMethod]}
            onPress={() => setMethod(item)}
          >
            <Image
              source={
                item === 'Bank Transfer' ? bankTransferImg :
                item === 'PayPal' ? paypalImg :
                item === 'Debit Card' ? debitCardImg :
                gpayImg
              }
              style={styles.methodButtonImage}
            />
            <Text style={[styles.methodButtonText, method === item && styles.selectedMethodText]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.details}>** Important Details: **</Text>
      <Text style={styles.details}>
        - Processing Fee: 2.5% of the withdrawal amount.
      </Text>
      <Text style={styles.details}>
        - Withdrawal requests are processed within 1-3 business days.
      </Text>
      <Text style={styles.details}>
        - Ensure your account information is up to date for successful transactions.
      </Text>

      <TouchableOpacity style={styles.actionButton} onPress={handleWithdraw}>
        <Text style={styles.actionButtonText}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton, styles.cancelButton]} onPress={() => navigation.goBack()}>
        <Text style={styles.actionButtonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 15,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  methodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  methodButton: {
    width: '48%', // Set width to 48% for two buttons per row
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    marginVertical: 5,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedMethod: {
    backgroundColor: '#007BFF',
  },
  methodButtonImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  methodButtonText: {
    fontSize: 16,
    color: '#333',
    fontFamily:'Poppins-Regular',
  },
  selectedMethodText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
    fontFamily: 'Poppins-Regular',
  },
  actionButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  cancelButton: {
    backgroundColor: '#FF6347',
  },
});

export default WithdrawScreen;
