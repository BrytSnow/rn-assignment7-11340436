import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sidebar = ({ isOpen, onClose }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    onClose();
  };

  const handleStorePress = () => {
    onClose();
    navigation.navigate('MainCart');
  };

  const handleLocationsPress = () => {
    onClose();
    navigation.navigate('Cart'); 
  };

  if (!isOpen) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={handlePress}>
        <Image source={require('../assets/Close.png')} style={styles.closeImage} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={handleStorePress}>
          <Text style={styles.sidebarText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.sidebarText}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sidebarText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sidebarText}>Jewelery</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sidebarText}>Electronic</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sidebarText}>Clothing</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 200,
    backgroundColor: '#fff',
    zIndex: 100,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 101,
  },
  closeImage: {
    width: 30,
    height: 30,
  },
  scrollViewContent: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sidebarText: {
    fontSize: 25,
    marginVertical: 5,
    color: '#000',
    fontWeight: '400',
    borderBottomWidth: 1
  },
});

export default Sidebar;
