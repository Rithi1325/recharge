import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// Sample plans for the AvailablePlansScreen
const PLANS = [
  { id: '1', name: 'Basic Plan', validity: '30 Days', price: 300 },
  { id: '2', name: 'Premium Plan', validity: '30 Days', price: 600 },
  { id: '3', name: 'Family Plan', validity: '30 Days', price: 400 },
  { id: '4', name: 'Sports Pack', validity: '30 Days', price: 500 },
  { id: '5', name: 'News Pack', validity: '30 Days', price: 200 },
  { id: '6', name: 'Kids Plan', validity: '30 Days', price: 350 },
  { id: '7', name: 'Movie Mania', validity: '30 Days', price: 800 },
  { id: '8', name: 'Complete Package', validity: '30 Days', price: 1200 },
  { id: '9', name: 'Weekend Special', validity: '30 Days', price: 450 },
  { id: '10', name: 'Seasonal Offer', validity: '30 Days', price: 500 },
  { id: '11', name: 'Documentary Pack', validity: '30 Days', price: 350 },
  { id: '12', name: 'Music Pack', validity: '30 Days', price: 200 },
  { id: '13', name: 'International Pack', validity: '30 Days', price: 600 },
  { id: '14', name: 'Religious Pack', validity: '30 Days', price: 150 },
  { id: '15', name: 'Health Pack', validity: '30 Days', price: 300 },
];

const AvailablePlansScreen = ({ route, navigation }) => {
  const { provider } = route.params; // Get the selected provider

  const handleRecharge = (plan) => {
    // Navigate to PaymentScreen with selected plan
    navigation.navigate('Payment', { plan, mobileNumber: provider.mobileNumber });
  };

  const renderPlanItem = ({ item }) => (
    <TouchableOpacity style={styles.planItem} onPress={() => handleRecharge(item)}>
      <View style={styles.planInfo}>
        <Text style={styles.planName}>{item.name}</Text>
        <Text style={styles.planValidity}>Validity: {item.validity}</Text>
        <Text style={styles.planPrice}>Price: ₹{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Plans for {provider.name}</Text>

      <FlatList
        data={PLANS} // Use the defined PLANS array
        renderItem={renderPlanItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.planList}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  planItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#E8F0FE',
    marginBottom: 15,
    elevation: 2,
  },
  planInfo: {
    marginBottom: 5,
  },
  planName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  planValidity: {
    fontSize: 16,
    color: '#777',
  },
  planPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6F61',
  },
  planList: {
    flexGrow: 1,
  },
});

export default AvailablePlansScreen;
