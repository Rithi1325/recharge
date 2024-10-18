import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { useTheme } from '../ThemeContext'; // Adjust the path as necessary

  
const paymentMethods = [
  { name: 'Credit/Debit Card', icon: require('../../assets/images/card.png') },
  { name: 'Bank Transfer', icon: require('../../assets/images/bank.png') },
  { name: 'PayPal', icon: require('../../assets/images/paypal.png') },
  { name: 'GPay', icon: require('../../assets/images/gpay.png') },
];

const AddMoneyScreen = () => {
  const { isDarkMode } = useTheme();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].name);

  const handleAddMoney = () => {
    if (!amount) {
      Alert.alert('Error', 'Please enter an amount to add.');
      return;
    }
    Alert.alert('Success', `Added ₹${amount} to your account!`);
    setAmount('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Add Money</Text>

      <TextInput
        style={[styles.input, { borderColor: isDarkMode ? '#fff' : '#000' }]}
        placeholder="Enter amount (in ₹)"
        placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>Select Payment Method</Text>
      <View style={styles.paymentMethodContainer}>
        {paymentMethods.map(({ name, icon }) => (
          <TouchableOpacity
            key={name}
            style={[styles.paymentMethodButton, paymentMethod === name && styles.selectedButton]}
            onPress={() => setPaymentMethod(name)}
          >
            <Image source={icon} style={styles.paymentMethodIcon} />
            <Text style={[styles.paymentMethodText, { color: paymentMethod === name ? '#fff' : '#000' }]}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddMoney}>
        <Text style={styles.addButtonText}>Add Money</Text>
      </TouchableOpacity>

      <Text style={[styles.infoText, { color: isDarkMode ? '#ccc' : '#333' }]}>
        Note: Please ensure your payment method is verified before proceeding.
      </Text>

 
      

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    fontFamily: "Poppins-Bold",
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    marginBottom: 10,
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  paymentMethodButton: {
    flexBasis: '45%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    marginVertical: 5,
    elevation: 2,
  },
  selectedButton: {
    backgroundColor: '#007BFF',
  },
  paymentMethodIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  paymentMethodText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  infoText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});

export default AddMoneyScreen;
