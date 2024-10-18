import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Sample transaction data
const transactions = [
  { id: '1', title: 'Purchase at Store A', amount: '$50.00', date: '2024-10-01' },
  { id: '2', title: 'Transfer to User B', amount: '$20.00', date: '2024-10-02' },
  { id: '3', title: 'Payment for Service C', amount: '$30.00', date: '2024-10-03' },
  { id: '4', title: 'Refund from Store D', amount: '$15.00', date: '2024-10-04' },
  { id: '5', title: 'Deposit from User E', amount: '$100.00', date: '2024-10-05' },
];

const TransactionScreen = () => {
  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionContainer}>
      <Text style={styles.transactionTitle}>{item.title}</Text>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  transactionContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#28a745', // Green color for amounts
  },
  transactionDate: {
    fontSize: 14,
    color: '#6c757d', // Gray color for dates
  },
});

export default TransactionScreen;
