import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';

const ReportsScreen = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Reports</Text>

      <ReportCard 
        title="Transaction Summary" 
        content={[
          "Total Transactions: 150",
          "Total Amount: $3,500.00",
          "Successful Transactions: 145",
          "Failed Transactions: 5"
        ]}
        isActive={activeCard === 0}
        setActive={() => setActiveCard(0)}
        resetActive={() => setActiveCard(null)}
      />

      <ReportCard 
        title="Monthly Report" 
        content={[
          "October 2024",
          "Total Income: $2,000.00",
          "Total Expenses: $1,000.00",
          "Net Profit: $1,000.00"
        ]}
        isActive={activeCard === 1}
        setActive={() => setActiveCard(1)}
        resetActive={() => setActiveCard(null)}
      />

      <ReportCard 
        title="Top Transactions" 
        content={[
          "1. Purchase at Store A - $500.00",
          "2. Payment for Service B - $300.00",
          "3. Transfer to User C - $200.00"
        ]}
        isActive={activeCard === 2}
        setActive={() => setActiveCard(2)}
        resetActive={() => setActiveCard(null)}
      />

      <ReportCard 
        title="Graphical Representation" 
        content={["[Placeholder for a graph/chart]"]}
        isActive={activeCard === 3}
        setActive={() => setActiveCard(3)}
        resetActive={() => setActiveCard(null)}
      />
    </ScrollView>
  );
};

const ReportCard = ({ title, content, isActive, setActive, resetActive }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const blurValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
    setActive();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    resetActive();
  };

  return (
    <Animated.View style={[
      styles.reportSection, 
      { 
        transform: [{ scale: scaleValue }],
        opacity: isActive ? 1 : blurValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.3, 1]
        })
      }
    ]}>
      <TouchableOpacity 
        onPressIn={onPressIn} 
        onPressOut={onPressOut} 
        activeOpacity={0.9}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        {content.map((text, index) => (
          <Text key={index} style={styles.reportText}>{text}</Text>
        ))}
      </TouchableOpacity>
    </Animated.View>
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
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker text for better readability
  },
  reportSection: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowOpacity: 0.2, // iOS
    shadowRadius: 4, // iOS
    elevation: 3, // Android
    transition: 'all 0.2s ease', // Smooth scaling transition
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#32a6ff', // Highlighting title color
  },
  reportText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#555', // Softer text color for content
  },
});


export default ReportsScreen;
