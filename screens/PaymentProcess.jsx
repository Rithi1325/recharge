import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity, TextInput } from 'react-native';

// Import your images
const bankTransferImg = require('../assets/images/bank.png'); // Adjust the path
const paypalImg = require('../assets/images/paypal.png'); // Adjust the path
const debitCardImg = require('../assets/images/card.png'); // Adjust the path
const gpayImg = require('../assets/images/gpay.png'); // Adjust the path

const PaymentProcess = ({ route, navigation }) => {
  const { supplier } = route.params; // Get supplier data from navigation
  const [amount, setAmount] = useState(supplier.amount ? supplier.amount.toString() : ''); // Initialize with supplier's amount or empty
  const [selectedMethod, setSelectedMethod] = useState(null); // State to track selected payment method

  const handlePayment = (paymentMethod) => {
    // Validate amount
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      Alert.alert('Invalid Amount', 'Please enter a valid amount.');
      return;
    }

    Alert.alert(`Payment processed for ${supplier.name}`, `Using: ${paymentMethod}\nAmount: $${parsedAmount.toFixed(2)}`);
    navigation.goBack(); // Navigate back after payment
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment for {supplier.name}</Text>
      <Text style={styles.details}>{supplier.details}</Text>

      <Text style={styles.amount}>Enter Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="0.00"
        placeholderTextColor="#999"
      />

      <Text style={styles.methodTitle}>Choose Payment Method:</Text>

      <View style={styles.buttonContainer}>
        <PaymentButton 
          image={gpayImg} 
          onPress={() => {
            setSelectedMethod('GPay');
            handlePayment('GPay');
          }} 
          isSelected={selectedMethod === 'GPay'} 
        />
        <PaymentButton 
          image={debitCardImg} 
          onPress={() => {
            setSelectedMethod('Debit Card');
            handlePayment('Debit Card');
          }} 
          isSelected={selectedMethod === 'Debit Card'} 
        />
        <PaymentButton 
          image={bankTransferImg} 
          onPress={() => {
            setSelectedMethod('Bank Transfer');
            handlePayment('Bank Transfer');
          }} 
          isSelected={selectedMethod === 'Bank Transfer'} 
        />
        <PaymentButton 
          image={paypalImg} 
          onPress={() => {
            setSelectedMethod('PayPal');
            handlePayment('PayPal');
          }} 
          isSelected={selectedMethod === 'PayPal'} 
        />
      </View>

      <Text style={styles.terms}>
        By proceeding, you agree to our payment terms and conditions.
      </Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

// Custom PaymentButton component for better structure
const PaymentButton = ({ image, onPress, isSelected }) => (
  <TouchableOpacity onPress={onPress} style={[styles.paymentButton, isSelected && styles.selectedButton]}>
    <Image source={image} style={styles.paymentImage} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
  },
  details: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  amount: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  methodTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  paymentButton: {
    width: '48%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  selectedButton: {
    backgroundColor: '#007BFF', // Blue color when selected
  },
  paymentImage: {
    width: 60,
    height: 60,
  },
  terms: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  backButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PaymentProcess;
