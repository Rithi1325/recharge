import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const CommonSwiper = () => {
  const ads = [
    { image: require('../assets/images/ad1.jpeg'), label: 'Ad 1' },
    { image: require('../assets/images/ad2.jpeg'), label: 'Ad 2' },
    { image: require('../assets/images/ad3.jpeg'), label: 'Ad 3' },
  ];

  return (
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
      {ads.map((ad, index) => (
        <View key={index} style={styles.slide}>
          <Image source={ad.image} style={styles.image} />
          <Text style={styles.adLabel}>{ad.label}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  adLabel: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
});

export default CommonSwiper;
