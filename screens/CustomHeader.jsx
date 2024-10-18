import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon name="menu" size={30} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
      <Icon name="notifications" size={30} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'blue',
  },
});

export default CustomHeader;
