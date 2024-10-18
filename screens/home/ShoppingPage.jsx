import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

const ShoppingPage = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productRating}>Rating: {product.rating} / 5 ★</Text>
        
        {/* Size and Color Selectors */}
        <Text style={styles.selectorLabel}>Select Size:</Text>
        <View style={styles.sizeContainer}>
          {['S', 'M', 'L', 'XL'].map(size => (
            <Button key={size} title={size} onPress={() => {}} />
          ))}
        </View>

        <Text style={styles.selectorLabel}>Select Color:</Text>
        <View style={styles.colorContainer}>
          {['Red', 'Blue', 'Green'].map(color => (
            <View key={color} style={[styles.colorBox, { backgroundColor: color.toLowerCase() }]} />
          ))}
        </View>

        <Button title="Add to Cart" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: 15,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  productRating: {
    fontSize: 14,
    marginBottom: 10,
  },
  selectorLabel: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  colorBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default ShoppingPage;
