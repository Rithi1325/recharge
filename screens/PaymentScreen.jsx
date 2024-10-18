import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, Modal, Image, TouchableOpacity } from 'react-native';

// Import your images
const bankTransferImg = require('../assets/images/bank.png');
const paypalImg = require('../assets/images/paypal.png');
const debitCardImg = require('../assets/images/card.png');
const gpayImg = require('../assets/images/gpay.png');

const PaymentScreen = ({ route, navigation }) => {
  const { plan, mobileNumber } = route.params;

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !cvv || !paymentMethod) {
      Alert.alert('Payment Error', 'Please fill in all payment fields and select a payment method.');
      return;
    }

    // Simulate payment processing
    setModalVisible(true);
    setPaymentDetails(`You have successfully processed a payment of ${plan.price} for ${plan.data} using ${paymentMethod}.`);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.navigate('DTH'); // Replace 'DTH' with your main screen
  };

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
    Alert.alert(
      `${method} Selected`,
      `You have selected ${method}. \n\nAdditional details: \n- Secure transaction\n- Instant processing`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      
      <View style={styles.planInfo}>
        <Text style={styles.planName}>{plan.data}</Text>
        <Text style={styles.planValidity}>Validity: {plan.validity}</Text>
        <Text style={styles.planPrice}>Price: {plan.price}</Text>
      </View>

      <Text style={styles.sectionTitle}>Select Payment Method</Text>
      <View style={styles.paymentMethods}>
        <PaymentButton 
          image={gpayImg} 
          onPress={() => selectPaymentMethod('GPay')} 
          selected={paymentMethod === 'GPay'} 
        />
        <PaymentButton 
          image={debitCardImg} 
          onPress={() => selectPaymentMethod('Debit Card')} 
          selected={paymentMethod === 'Debit Card'} 
        />
        <PaymentButton 
          image={bankTransferImg} 
          onPress={() => selectPaymentMethod('Bank Transfer')} 
          selected={paymentMethod === 'Bank Transfer'} 
        />
        <PaymentButton 
          image={paypalImg} 
          onPress={() => selectPaymentMethod('PayPal')} 
          selected={paymentMethod === 'PayPal'} 
        />
      </View>

      <Text style={styles.sectionTitle}>Enter Your Payment Information</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={16}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        maxLength={5}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        secureTextEntry
        maxLength={3}
      />

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>

      {/* Modal for payment verification */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Payment Successful</Text>
            <Text style={styles.modalMessage}>
              {paymentDetails}
            </Text>
            <Button title="Done" onPress={closeModal} color="#007BFF" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Custom PaymentButton component for better structure
const PaymentButton = ({ image, onPress, selected }) => (
  <TouchableOpacity onPress={onPress} style={[styles.paymentButton, selected && styles.selectedButton]}>
    <Image source={image} style={styles.paymentImage} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  planInfo: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#E6F7FF',
    borderRadius: 10,
    elevation: 2,
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF',
  },
  planValidity: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF6F61',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paymentMethods: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow wrapping to create a 2x2 grid
    justifyContent: 'space-between', // Space items evenly
    marginBottom: 20,
  },
  paymentButton: {
    width: '48%', // Adjust width to fit 2 items in a row
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    marginBottom: 10, // Add bottom margin for spacing
  },
  selectedButton: {
    backgroundColor: '#AEEEEE', // Light blue color for selected button
  },
  paymentImage: {
    width: 40,
    height: 40,
  },
  input: {
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  payButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default PaymentScreen;
