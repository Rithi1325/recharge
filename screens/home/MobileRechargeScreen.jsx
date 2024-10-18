import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../ThemeContext'; // Ensure this path is correct

const operators = [
  { id: '1', name: 'Jio Prepaid' },
  { id: '2', name: 'Airtel Prepaid' },
  { id: '3', name: 'Vi Prepaid' },
  { id: '4', name: 'BSNL Prepaid' },
  { id: '5', name: 'MTNL Mumbai Prepaid' },
  { id: '6', name: 'MTNL Delhi Prepaid' },
];

const dummyNumbers = [
  { id: '1', name: 'Alice', number: '1234567890', image: 'https://via.placeholder.com/50/FF5733/FFFFFF/?text=A' },
  { id: '2', name: 'Bob', number: '0987654321', image: 'https://via.placeholder.com/50/33FF57/FFFFFF/?text=B' },
  { id: '3', name: 'Charlie', number: '1122334455', image: 'https://via.placeholder.com/50/3357FF/FFFFFF/?text=C' },
];

const MobileRechargeScreen = ({ navigation }) => {
  const { isDarkMode } = useTheme();
  const [mobileNumber, setMobileNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOperator, setSelectedOperator] = useState(null);

  const filteredDummyNumbers = dummyNumbers.filter(dummy =>
    dummy.name.toLowerCase().includes(searchQuery.toLowerCase()) || dummy.number.includes(mobileNumber)
  );

  const handleRecharge = () => {
    if (mobileNumber.length === 10 && selectedOperator) {
      console.log(`Recharging ${mobileNumber} with ${selectedOperator.name}`);
      navigation.navigate('PlansScreen', { 
        operator: selectedOperator, 
        mobileNumber, 
        contactName: searchQuery || mobileNumber // Pass the contact name
      });
    } else {
      alert("Please enter a valid 10-digit mobile number and select an operator.");
    }
  };

  const handleContactSelect = (contact) => {
    setMobileNumber(contact.number);
    setSearchQuery(contact.name);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#F5F5F5' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Mobile Recharge</Text>

      <View style={styles.searchContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/20' }} // Replace with your search icon
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.searchInput, { borderColor: isDarkMode ? '#555' : '#ccc' }]}
          placeholder="Search Contacts or Enter Mobile Number"
          placeholderTextColor={isDarkMode ? '#ccc' : '#555'}
          value={searchQuery || mobileNumber}
          onChangeText={(text) => {
            if (text.length <= 10) {
              setMobileNumber(text);
            }
            setSearchQuery(text);
          }}
        />
      </View>

      <FlatList
        data={filteredDummyNumbers}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem} onPress={() => handleContactSelect(item)}>
            <Image source={{ uri: item.image }} style={styles.profileImage} />
            <View style={styles.contactInfo}>
              <Text style={[styles.contactName, { color: isDarkMode ? '#ccc' : '#555' }]}>{item.name}</Text>
              <Text style={[styles.contactNumber, { color: isDarkMode ? '#ccc' : '#555' }]}>{item.number}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      <Text style={[styles.operatorsTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Mobile Operators</Text>
      <FlatList
        data={operators}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.operatorItem, selectedOperator?.id === item.id && styles.selectedOperator]}
            onPress={() => setSelectedOperator(item)}
          >
            <Text style={[styles.operatorText, { color: isDarkMode ? '#fff' : '#000' }]}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      <Button title="Confirm Recharge" onPress={handleRecharge} disabled={mobileNumber.length !== 10 || !selectedOperator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    elevation: 2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 14,
  },
  operatorsTitle: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    marginVertical: 10,
  },
  operatorItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    elevation: 2,
  },
  selectedOperator: {
    backgroundColor: '#ADD8E6',
  },
  operatorText: {
    fontSize: 18,
  },
});

export default MobileRechargeScreen;
