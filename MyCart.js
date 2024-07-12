import React, { useContext } from 'react';
import { FlatList, Text, Image, StyleSheet, View } from 'react-native';
import CartScreen from './CartScreen';
import { CartContext } from './CartContext';

function Cart({ route, navigation }) {
  const { productId } = route.params || {}; 
  const { getItemCount, cartItems } = useContext(CartContext);

  const renderCartItem = ({ item }) => (
    <View key={item.id} style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.price}>Qty: {getItemCount(item.id)}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={{ paddingTop: 30 }}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.container}
        />
      ) : (
        <View style={styles.container}>
          <Text>No items in the cart</Text>
        </View>
      )}
      <CartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  productContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Cart;
