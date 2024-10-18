import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';

const DTH_PROVIDERS = [
  { id: '1', name: 'Tata Sky' },
  { id: '2', name: 'Airtel Digital TV' },
  { id: '3', name: 'Dish TV' },
  { id: '4', name: 'Sun Direct' },
  { id: '5', name: 'Reliance Digital TV' },
  { id: '6', name: 'Vodafone DTH' },
  { id: '7', name: 'Hathway' },
  { id: '8', name: 'Siti Cable' },
  { id: '9', name: 'You Broadband' },
  { id: '10', name: 'Den Networks' },
  { id: '11', name: 'ACT Fibernet' },
  { id: '12', name: 'Videocon D2H' },
  { id: '13', name: 'BSNL Digital TV' },
  { id: '14', name: 'MTNL DTH' },
  { id: '15', name: 'InDigital' },
  { id: '16', name: 'NexGTv' },
  { id: '17', name: 'Zee Entertainment' },
  { id: '18', name: 'Disney+ Hotstar' },
  { id: '19', name: 'SonyLIV' },
  { id: '20', name: 'Amazon Prime Video' },
];

const DTHScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const filteredProviders = DTH_PROVIDERS.filter(provider =>
    provider.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectProvider = (provider) => {
    Alert.alert('Provider Selected', `You selected: ${provider.name}`);
    // Navigate to AvailablePlans without needing plans data
    navigation.navigate('AvailablePlans', { provider });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DTH Recharge</Text>
      <Text style={styles.subtitle}>All DTH and Cable Providers</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search DTH/Cable Provider"
        value={searchText}
        onChangeText={text => {
          setSearchText(text);
          if (text.length < 3 && text.length > 0) {
            Alert.alert('Search Warning', 'Please enter at least 3 characters for search.');
          }
        }}
      />

      <FlatList
        data={filteredProviders}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.providerItem}
            onPress={() => handleSelectProvider(item)}
          >
            <Text style={styles.providerName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.providerList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#555',
  },
  searchInput: {
    height: 50,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  providerItem: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
  },
  providerName: {
    fontSize: 18,
    color: '#333',
  },
  providerList: {
    flexGrow: 1,
  },
});

export default DTHScreen;
