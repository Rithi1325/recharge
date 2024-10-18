import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const OtpVerification = ({ route, navigation }) => {
  const { mobile, callingCode } = route.params; // Get mobile and calling code from params
  const [otp, setOtp] = useState(['', '', '', '']); // Array to hold OTP digits
  const inputRefs = useRef([]); // Ref array for OTP inputs

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, ''); // Only allow numbers
    setOtp(newOtp);

    // Automatically move to the next input box
    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1].focus(); // Focus the next input
    } else if (!text && index > 0) {
      inputRefs.current[index - 1].focus(); // Focus the previous input if backspacing
    }
  };

  const handleSubmit = () => {
    if (otp.join('') === '1234') {
      Alert.alert('OTP verified successfully!'); // Handle successful OTP verification
      // Proceed to the next screen (e.g., UpdateProfile)
      navigation.navigate('UpdateProfile');
    } else {
      Alert.alert('Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = () => {
    Alert.alert('OTP resent to ' + callingCode + ' ' + mobile + '. The dummy OTP is 1234.');
    // Here you could implement logic to resend the OTP if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter OTP</Text>
      <Text style={styles.instructions}>Enter the OTP sent to {callingCode} {mobile}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            ref={ref => inputRefs.current[index] = ref} // Assign ref to the input
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>
        Didn’t receive the OTP? <Text onPress={handleResendOtp} style={styles.linkText}>Resend it</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    fontFamily:"Poppins-Medium",
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderColor: '#1E90FF',
    borderWidth: 2,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
    height: 50,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    fontFamily:"Poppins-Medium",
    marginTop: 20,
    color: '#666',
  },
  linkText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
});

export default OtpVerification;
