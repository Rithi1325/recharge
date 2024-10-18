import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Ensure you have this installed
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have this installed
import OpinionIcon from '../assets/images/opinion.png'; // Import the opinion icon

const UpdateProfile = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [profileImage, setProfileImage] = useState(''); // Assume you'll set this from an image picker

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@gmail\.com$/; // Restrict to Gmail addresses only
    return regex.test(email);
  };

  const handleFinishSetup = () => {
    if (!fullName || !email || !gender) {
      Alert.alert('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Please enter a valid Gmail address.');
      return;
    }

    if (referralCode && referralCode.length < 5) {
      Alert.alert('If provided, the referral code must be at least 5 characters long.');
      return;
    }

    Alert.alert('Account setup complete!');
    navigation.replace('Dashboard', { name: fullName, email, profileImage }); // Pass profileImage as well
  };

  return (
    <View style={styles.container}>
      {/* Opinion Icon at the top */}
      <Image source={OpinionIcon} style={styles.opinionIconTop} />

      <Text style={styles.title}>Please enter the details below to complete your account setup</Text>

      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Email Address (Gmail only)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="wc" size={20} color="#000" />
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="code" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Referral Code (optional, min 5 characters)"
          value={referralCode}
          onChangeText={setReferralCode}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Finish Setup" onPress={handleFinishSetup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    fontFamily: "Poppins-Medium",
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#1E90FF',
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 5,
    height: 50,
    padding: 10,
  },
  input: {
    fontFamily: "Poppins-Medium",
    flex: 1,
    paddingLeft: 10,
    height: '100%',
  },
  picker: {
    flex: 1,
    height: 50,
  },
  buttonContainer: {
    height: 50,
    marginTop: 20,
  },
  opinionIconTop: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
});

export default UpdateProfile;
