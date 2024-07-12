// import React, { useContext } from "react";
// import { View, Image, FlatList, TouchableOpacity, StyleSheet, Text } from "react-native";
// import Header from "./Header";
// import { CartContext } from './CartContext';

// export default function MainCart() {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const handleRemovePress = (item) => {
//     console.log('Removing item:', item.id);
//     removeFromCart(item.id);
//   };
  

//   return (
//     <View>
//       <Header />
//       <FlatList
//         data={cartItems}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View style={styles.textContainer}>
//               <Text style={styles.name}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//               <Text style={styles.price}>${item.price}</Text>
//             </View>
//             <TouchableOpacity onPress={() => handleRemovePress(item)}>
//               <Image source={require('../assets/remove.png')} style={styles.removeImage} />
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 16,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#B07D7D',
//   },
//   removeImage: {
//     width: 24,
//     height: 24,
//   },
// });

import React, { useContext } from "react";
import { View, Image, FlatList, TouchableOpacity, StyleSheet, Text, ScrollView } from "react-native";
import Header from "./Header";
import { CartContext } from './CartContext';
import Footer from "./Footer";

export default function MainCart() {
  const { cartItems, removeFromCart, getItemCount } = useContext(CartContext);

  const handleRemovePress = (item) => {
    console.log('Removing item:', item.id);
    removeFromCart(item.id);
  };

  return (
    <ScrollView style={{paddingTop:30}}>
      <Header />
      <View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain"/>
            <View style={styles.textContainer}>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
              <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">{item.description}</Text>
              <View style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"row"}}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.price}>Qty: {getItemCount(item.id)}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleRemovePress(item)}>
              <Image source={require('../assets/remove.png')} style={styles.removeImage} />
            </TouchableOpacity>
          </View>
        )}
      />
      </View>

     
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    backgroundColor:"white"
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B07D7D',
  },
  removeImage: {
    width: 24,
    height: 24,
  },
});
