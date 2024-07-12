import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';  
import MainHeader from './MainHeader';
import Sidebar from './Sidebar';
import { CartContext } from './CartContext';  
import Header from './Header';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 60) / 2;

function HomeScreen() {
  const navigation = useNavigation();  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { addToCart, getItemCount, clearItemCount } = useContext(CartContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const truncatedProducts = response.data.map(product => ({
        ...product,
        description: truncateDescription(product.description, 15),
      }));
      setProducts(truncatedProducts);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const truncateDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length <= maxWords) {
      return description;
    }
    return words.slice(0, maxWords).join(' ') + '...';
  };

  const saveSelectedItem = async (item) => {
    try {
      await AsyncStorage.setItem(`@product_${item.id}`, JSON.stringify(item));
      addToCart(item); 
    } catch (error) {
      console.error('Failed to save item:', error);
    }
  };

  const handleContainerPress = (item) => {
    Alert.alert(
      'View Cart',
      'Do you want to view your cart?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigateToCart(item.id),
        },
      ],
      { cancelable: false }
    );
  };

  const navigateToCart = (productId) => {
    navigation.navigate('Cart', { productId });
  };

  const handleClearCount = (item) => {
    clearItemCount(item.id); 
  };

  return (
    <View style={styles.container}>
      <MainHeader onSidebarPress={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handleContainerPress(item)} 
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} resizeMode='contain'/>
              <TouchableOpacity
                style={styles.addCircleContainer}
                onPress={() => saveSelectedItem(item)}
              >
                <Image
                  source={require('../assets/add_circle.png')}
                  style={styles.addCircleImage}
                />
                {getItemCount(item.id) > 0 && (
                  <View style={styles.countContainer}>
                    <Text style={styles.countText}>{getItemCount(item.id)}</Text>
                    <TouchableOpacity
                      style={styles.clearButton}
                      onPress={() => handleClearCount(item)} 
                    >
                      <Text style={styles.clearButtonText}>Clear</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
              <Text style={styles.descriptionText} numberOfLines={3} ellipsizeMode="tail">
                {item.description}
              </Text>
              <Text style={styles.priceText}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 2,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '60%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  addCircleContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 15,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCircleImage: {
    width: 30,
    height: 30,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  countText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
  },
  clearButton: {
    backgroundColor: '#FF6347',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  textContainer: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginVertical: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B07D7D',
    textAlign: 'center',
  },
});

export default HomeScreen;
