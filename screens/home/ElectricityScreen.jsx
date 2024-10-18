import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const suppliers = [
  { id: '1', name: 'Tata Power', details: 'Provides electricity in Maharashtra' },
  { id: '2', name: 'Adani Electricity', details: 'Operates in Mumbai' },
  { id: '3', name: 'BSES Rajdhani', details: 'Covers Delhi area' },
  { id: '4', name: 'BSES Yamuna', details: 'Serves East Delhi' },
  { id: '5', name: 'Reliance Energy', details: 'Provides service in Maharashtra' },
  { id: '6', name: 'Tamil Nadu Generation and Distribution Corporation (TANGEDCO)', details: 'Main electricity supplier in Tamil Nadu' },
  { id: '7', name: 'TNEB (Tamil Nadu Electricity Board)', details: 'Electricity board for Tamil Nadu' },
  { id: '8', name: 'Ind Bharath Power', details: 'Provides power in Tamil Nadu' },
  { id: '9', name: 'Siva Power', details: 'Operates in Tamil Nadu region' },
  { id: '10', name: 'Renew Power', details: 'Renewable energy supplier in Tamil Nadu' },
];

const ElectricityScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [recentSuppliers, setRecentSuppliers] = useState([]);
  const navigation = useNavigation();

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSupplierPress = (supplier) => {
    // Add to recent suppliers if not already present
    if (!recentSuppliers.some(item => item.id === supplier.id)) {
      setRecentSuppliers([...recentSuppliers, supplier]);
    }
    navigation.navigate('PaymentProcess', { supplier });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a supplier..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {recentSuppliers.length > 0 && (
        <View style={styles.recentContainer}>
          <Text style={styles.recentTitle}>Recently Searched Suppliers:</Text>
          <FlatList
            data={recentSuppliers}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSupplierPress(item)}>
                <View style={styles.recentSupplierItem}>
                  <Text style={styles.supplierName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {filteredSuppliers.length > 0 ? (
        <FlatList
          data={filteredSuppliers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSupplierPress(item)}>
              <View style={styles.supplierItem}>
                <Text style={styles.supplierName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.emptyStateText}>No suppliers found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  searchBar: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10, // Adjusted to minimize gap
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recentContainer: {
    marginVertical: 10,
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recentSupplierItem: {
    padding: 10,
    backgroundColor: '#e0e7ff', // Light background for recent suppliers
    borderRadius: 8,
    marginRight: 10,
  },
  supplierItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  supplierName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyStateText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});

export default ElectricityScreen;
