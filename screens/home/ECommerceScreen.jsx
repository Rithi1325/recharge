import React, { useRef, useEffect, useState } from 'react';
import { 
  View, Text, TextInput, ScrollView, Image, 
  TouchableOpacity, StyleSheet, Dimensions, FlatList 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width: viewportWidth } = Dimensions.get('window');

const categories = [
  { title: 'Women', icon: 'female' },
  { title: 'Men', icon: 'male' },
  { title: 'Accessories', icon: 'gift' },
  { title: 'Home', icon: 'home' },
  { title: 'Beauty', icon: 'heartbeat' },
];

const images = [
  require('../../assets/images/Ead1.jpg'),
  require('../../assets/images/Ead2.png'),
  require('../../assets/images/Ead3.jpg'),
  require('../../assets/images/Ead4.jpg'),
];

const products = [
  { id: 1, image: require('../../assets/images/men.png'), title: 'Men\'s Shirt', rating: 4.7, description: 'Stylish shirt for men.' },
  { id: 2, image: require('../../assets/images/bag1.png'), title: 'Stylish Bag', rating: 4.0, description: 'Trendy bag for daily use.' },
  { id: 3, image: require('../../assets/images/shoe.png'), title: 'Running Shoes', rating: 3.5, description: 'Comfortable shoes for running.' },
  { id: 4, image: require('../../assets/images/women.png'), title: 'Women\'s Dress', rating: 4.5, description: 'A beautiful dress for all occasions.' },
  { id: 5, image: require('../../assets/images/watch1.png'), title: 'Watch 1', rating: 5.0, description: 'Elegant watch for any event.' },
  { id: 6, image: require('../../assets/images/watch2.png'), title: 'Watch 2', rating: 4.2, description: 'Durable watch for outdoor activities.' },
  { id: 7, image: require('../../assets/images/laptop1.png'), title: 'Laptop', rating: 4.8, description: 'Powerful laptop for work and play.' },
];

const EcommerceScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        currentIndex.current = (currentIndex.current + 1) % images.length;
        flatListRef.current.scrollToIndex({ animated: true, index: currentIndex.current });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderImageItem = ({ item }) => (
    <Image source={item} style={styles.sliderImage} accessibilityLabel="Slider Image" />
  );

  const toggleLike = (id) => {
    setLikedProducts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Shopping', { product: item })}>
      <View style={styles.productCard}>
        <Image source={item.image} style={styles.productImage} accessibilityLabel={item.title} />
        <TouchableOpacity 
          style={styles.likeButton} 
          onPress={() => toggleLike(item.id)} 
          accessibilityLabel={`Like ${item.title}`}>
          <FontAwesome name="heart" size={20} color={likedProducts[item.id] ? 'red' : 'gray'} />
        </TouchableOpacity>
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productRating}>Rating: {item.rating} / 5 ★</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.buyButton} 
            onPress={() => navigation.navigate('Shopping', { product: item })} // Updated here
            accessibilityLabel={`Buy ${item.title}`}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryButton} accessibilityLabel={`Category: ${item.title}`}>
      <FontAwesome name={item.icon} size={24} color="#003366" />
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Search..." />
        <TouchableOpacity style={styles.searchButton} accessibilityLabel="Search button">
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Image Slider */}
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderImageItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={() => {}}
      />

      {/* Categories Section */}
      <View style={styles.categories}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Trending Collection */}
      <Text style={styles.trendingTitle}>Trending Collection</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f4f4',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  searchBar: {
    flex: 1,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    height: 45,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sliderImage: {
    width: viewportWidth,
    height: 200,
    borderRadius: 10,
  },
  categories: {
    marginVertical: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  categoryButton: {
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
  },
  categoryText: {
    marginTop: 5,
    fontWeight: '600',
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  productCard: {
    flex: 5,
    margin: 2,
    width: '78%', // Adjusted width for smaller cards
    backgroundColor: '#fff',
    padding: 6, // Increased padding for better spacing
    borderRadius: 10,
    elevation: 3, // Slightly reduced elevation
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  productImage: {
    width: '100%',
    height: 100, // Further reduced height
    borderRadius: 10,
    marginBottom: 10,
  },
  productDetails: {
    alignItems: 'flex-start',
    width: '100%',
  },
  productTitle: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  productRating: {
    fontSize: 12,
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  buyButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default EcommerceScreen;
