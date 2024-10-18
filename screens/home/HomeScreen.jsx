import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Icons } from '../../file/index'; // Ensure this path is correct
import { useTheme } from '../ThemeContext'; // Ensure this path is correct
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/images/ad1.jpeg'),
  require('../../assets/images/ad2.jpeg'),
  require('../../assets/images/ad3.jpeg'),
];

const HomeScreen = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isDarkMode } = useTheme(); // Get the theme context
  const navigation = useNavigation(); // Get navigation prop

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flatListRef.current && currentIndex >= 0 && currentIndex < images.length) {
      flatListRef.current.scrollToIndex({ index: currentIndex, animated: true });
    }
  }, [currentIndex]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.sliderImage} resizeMode="cover" />
    </View>
  );

  const renderBalanceIcon = (iconSource, label, targetScreen) => (
    <TouchableOpacity onPress={() => navigation.navigate(targetScreen)} style={styles.balanceIconWrapper}>
      <View style={styles.balanceIconBackground}>
        <Image source={iconSource} style={styles.balanceIcon} />
      </View>
      <Text style={styles.balanceIconLabel}>{label}</Text>
    </TouchableOpacity>
  );

  const renderIcon = (iconSource, label, targetScreen) => (
    <TouchableOpacity onPress={() => navigation.navigate(targetScreen)} style={styles.iconWrapper}>
      <View style={styles.iconBackground}>
        <Image source={iconSource} style={styles.icon} />
      </View>
      <Text style={styles.iconLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.screen, { backgroundColor: isDarkMode ? '#000' : '#F5F5F5' }]}>
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <Image source={Icons.user} style={styles.profileIcon} />
          <Text style={[styles.greetingText, { color: isDarkMode ? '#fff' : '#333' }]}>Hi! Alice Brown</Text>
        </View>

        {/* Automatic Slider */}
        <FlatList
          ref={flatListRef}
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScrollToIndexFailed={() => {}}
        />

        {/* Main Balance Section */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceInfo}>
            <Text style={[styles.balanceTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Main Balance</Text>
            <Text style={[styles.balanceAmount, { color: isDarkMode ? '#fff' : '#000' }]}>$500.00</Text>
          </View>
          <View style={styles.balanceIconsContainer}>
            {renderBalanceIcon(Icons.addMoney, 'Add Money', 'AddMoney')}
            {renderBalanceIcon(Icons.withdraw, 'Withdraw', 'Withdraw')} 
          </View>
        </View>

        {/* Recharge Section */}
        <Text style={[styles.commonTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Recharge</Text>
        <View style={styles.commonContainer}>
          <View style={styles.iconContainer}>
            {renderIcon(Icons.mobile, 'Mobile', 'Recharge')}
            {renderIcon(Icons.mobileApp, 'DTH', 'DTHScreen')}
            {renderIcon(Icons.application, 'More', 'More')}
          </View>
        </View>

        {/* Bills Payment Section */}
        <Text style={[styles.commonTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Bills Payment</Text>
        <View style={styles.commonContainer}>
          <View style={styles.iconContainer}>
            {renderIcon(Icons.lightBulb, 'Electricity', 'Electricity')}
            {renderIcon(Icons.gasHeater, 'Gas Cylinder', 'GasCylinder')}
            {renderIcon(Icons.gasPipeline, 'Piped Gas', 'PipedGas')}
            {renderIcon(Icons.waterTap, 'Water', 'Water')}
            {renderIcon(Icons.application, 'More', 'MoreBills')}
          </View>
        </View>

        {/* E-Commerce Section */}
        <Text style={[styles.commonTitle, { color: isDarkMode ? '#fff' : '#000' }]}>E-Commerce</Text>
        <View style={styles.commonContainer}>
          <View style={styles.iconContainer}>
            {renderIcon(Icons.onlineShopping, 'Online Shopping', 'ECommerce')}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  balanceContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginVertical: 10,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commonContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginVertical: 10,
    elevation: 4,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 22,
    fontFamily: "Poppins-Bold",
    flex: 1,
    textAlign: 'right',
  },
  balanceInfo: {
    flex: 1,
  },
  balanceTitle: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  balanceAmount: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
  },
  balanceIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceIconWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  balanceIconBackground: {
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 15,
  },
  balanceIcon: {
    width: 40,
    height: 40,
  },
  balanceIconLabel: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  commonTitle: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  iconWrapper: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconBackground: {
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    padding: 15,
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  slide: {
    width: width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default HomeScreen;
