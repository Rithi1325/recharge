import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../ThemeContext'; // Ensure this path is correct

const plansData = {
  '1': [ // Jio
    { id: '1', data: '1GB/day', validity: '28 days', price: '₹199' },
    { id: '2', data: '2GB/day', validity: '28 days', price: '₹299' },
    { id: '3', data: '3GB/day', validity: '30 days', price: '₹399' },
    { id: '4', data: '5GB/day', validity: '30 days', price: '₹499' },
    { id: '5', data: '2GB + Unlimited Calls', validity: '84 days', price: '₹899' },
    { id: '6', data: '1.5GB/day + 100 SMS', validity: '28 days', price: '₹249' },
    { id: '7', data: '10GB Data Pack', validity: '30 days', price: '₹999' },
    { id: '8', data: '3GB + Disney+ Hotstar', validity: '28 days', price: '₹399' },
  ],
  '2': [ // Airtel
    { id: '9', data: '1GB/day', validity: '28 days', price: '₹199' },
    { id: '10', data: '2GB/day', validity: '28 days', price: '₹299' },
    { id: '11', data: '3GB/day + 300 SMS', validity: '30 days', price: '₹399' },
    { id: '12', data: '4GB + Unlimited Calls', validity: '30 days', price: '₹499' },
    { id: '13', data: '5GB/week', validity: '28 days', price: '₹599' },
    { id: '14', data: '10GB Data Pack', validity: '30 days', price: '₹999' },
    { id: '15', data: '1.5GB/day + 200 SMS', validity: '28 days', price: '₹349' },
    { id: '16', data: 'Unlimited Calls + 2GB', validity: '28 days', price: '₹399' },
  ],
  '3': [ // Vi (Vodafone Idea)
    { id: '17', data: '1.5GB/day', validity: '28 days', price: '₹249' },
    { id: '18', data: '3GB/day', validity: '28 days', price: '₹349' },
    { id: '19', data: '2GB + Unlimited Calls', validity: '84 days', price: '₹899' },
    { id: '20', data: '4GB/day + 100 SMS', validity: '30 days', price: '₹499' },
    { id: '21', data: '2GB/day + 200 SMS', validity: '56 days', price: '₹699' },
    { id: '22', data: '1GB/day + Disney+ Hotstar', validity: '28 days', price: '₹399' },
    { id: '23', data: '3GB + 300 SMS', validity: '30 days', price: '₹499' },
  ],
  '4': [ // BSNL
    { id: '24', data: '2GB/day', validity: '28 days', price: '₹199' },
    { id: '25', data: '3GB/day', validity: '30 days', price: '₹299' },
    { id: '26', data: '5GB/day', validity: '30 days', price: '₹499' },
    { id: '27', data: '10GB Data Pack', validity: '30 days', price: '₹999' },
    { id: '28', data: 'Unlimited Calls + 2GB', validity: '30 days', price: '₹399' },
    { id: '29', data: '1GB/day + 100 SMS', validity: '28 days', price: '₹249' },
  ],
  '5': [ // MTNL Mumbai
    { id: '30', data: '1GB/day', validity: '30 days', price: '₹199' },
    { id: '31', data: '2GB/day', validity: '30 days', price: '₹299' },
    { id: '32', data: '3GB/day + 100 SMS', validity: '30 days', price: '₹349' },
    { id: '33', data: '5GB + Unlimited Calls', validity: '30 days', price: '₹499' },
    { id: '34', data: '2GB/day + 200 SMS', validity: '60 days', price: '₹699' },
    { id: '35', data: '10GB Data Pack', validity: '30 days', price: '₹999' },
    { id: '36', data: 'Unlimited Calls + 1GB', validity: '30 days', price: '₹399' },
  ],
  '6': [ // MTNL Delhi
    { id: '37', data: '1GB/day', validity: '30 days', price: '₹199' },
    { id: '38', data: '2GB/day', validity: '30 days', price: '₹299' },
    { id: '39', data: '3GB/day + 100 SMS', validity: '30 days', price: '₹349' },
    { id: '40', data: '5GB + Unlimited Calls', validity: '30 days', price: '₹499' },
    { id: '41', data: '2GB/day + 200 SMS', validity: '60 days', price: '₹699' },
    { id: '42', data: '10GB Data Pack', validity: '30 days', price: '₹999' },
    { id: '43', data: 'Unlimited Calls + 1GB', validity: '30 days', price: '₹399' },
  ],
  // Additional operators can be added with their respective plans
};

const PlansScreen = ({ route, navigation }) => {
  const { operator, mobileNumber, contactName } = route.params;
  const { isDarkMode } = useTheme();
  
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = plansData[operator.id] || [];

  const handleRecharge = () => {
    if (selectedPlan) {
      navigation.navigate('Payment', {
        plan: selectedPlan,
        mobileNumber: mobileNumber,
      });
    } else {
      Alert.alert("Error", "Please select a plan to recharge.");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#F5F5F5' }]}>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
        Plans for {operator.name}
      </Text>
      <Text style={[styles.subTitle, { color: isDarkMode ? '#ccc' : '#555' }]}>
        <Text style={styles.boldText}>{mobileNumber}</Text> ({contactName})
      </Text>
      
      <FlatList
        data={plans}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.planItem, selectedPlan?.id === item.id && styles.selectedPlanItem]}
            onPress={() => setSelectedPlan(item)}
          >
            <Text style={[styles.planText, { color: isDarkMode ? '#fff' : '#000' }]}>
              {item.data} - {item.validity} - <Text style={styles.boldText}>{item.price}</Text>
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity 
        style={styles.rechargeButton}
        onPress={handleRecharge}
      >
        <Text style={styles.rechargeButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  planItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    elevation: 2,
  },
  selectedPlanItem: {
    backgroundColor: '#ADD8E6', // Light blue color for selected plan
  },
  planText: {
    fontSize: 20,
  },
  rechargeButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  rechargeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlansScreen;
