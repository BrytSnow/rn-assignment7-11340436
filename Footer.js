import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet } from "react-native";
import { CartContext } from './CartContext';

export default function Footer() {
  const { estTotal } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <View style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
          width: "100%",
          // height: "50%",
          padding: 20,
          paddingHorizontal: 40
        }}>
          <Text style={{ fontSize: 20, textTransform: "uppercase" }}>Est Total</Text>
          <Text style={{ fontSize: 20, textTransform: "uppercase", color: "goldenrod" }}>{typeof estTotal === 'number' ? `$${estTotal.toFixed(2)}` : '$0.00'}</Text>
        </View>
        <View style={styles.leftContainer}>
          <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
          <Text style={styles.text}>CHECKOUT</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    paddingTop: 0,
    marginTop: 200,
    width: '120%',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: 'white'
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});