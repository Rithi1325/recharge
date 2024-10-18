import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const LoginPage = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('IN'); 
  const [callingCode, setCallingCode] = useState('+91'); 
  const [isCountryPickerVisible, setCountryPickerVisible] = useState(false);

  const handleCountrySelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(`+${country.callingCode[0]}`);
    setCountryPickerVisible(false);
  };

  

  const handleNext = () => {
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobile || !mobilePattern.test(mobile)) {
      Alert.alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    navigation.navigate('OtpVerification', { mobile, callingCode });
  };

  const handleMobileChange = (text) => {
    // Allow only digits and limit to 10 characters
    const numericText = text.replace(/[^0-9]/g, '');
    if (numericText.length <= 10) {
      setMobile(numericText);
    }
  };

  return (                   
    <View style={styles.container}>
      <Text style={styles.header}>Hello there! Welcome </Text>
      <Text style={styles.subHeader}>Sign In</Text>
      <Text style={styles.instructions}>Continue with your mobile number</Text>

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setCountryPickerVisible(true)} style={styles.countryButton}>
          <Text style={styles.callingCode}>{callingCode}</Text>
        </TouchableOpacity>
        <CountryPicker
          withFlag
          withCallingCode
          onSelect={handleCountrySelect}
          countryCode={countryCode}
          visible={isCountryPickerVisible}
          onClose={() => setCountryPickerVisible(false)}
          containerButtonStyle={styles.countryPickerButton}
          withCountryNameButton={false}
        />
        <TextInput
          style={styles.mobileInput}
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={handleMobileChange} // Use the new function here
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
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
    fontSize: 50,
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subHeader: {
    fontSize: 24,
    fontFamily: "Poppins-Medium",
    marginBottom: 5,
    textAlign: 'center',
    color: '#666',
  },
  instructions: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderColor: '#1E90FF',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  countryButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#1E90FF',
  },
  callingCode: {
    fontSize: 16,
    color: '#333',
  },
  mobileInput: {
    height: 50,
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
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
    fontFamily: "Poppins-Bold",
  },
});

export default LoginPage;
