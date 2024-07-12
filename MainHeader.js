import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainHeader = ({ onSidebarPress }) => {
  const navigation = useNavigation(); 

  const handleCartPress = () => {
    navigation.navigate('MainCart'); 
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onSidebarPress}>
        <Image source={require('../assets/Menu.png')} style={styles.menuIcon} />
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={styles.logoIcon} />
      <View style={styles.rightIcons}>
        <Image source={require('../assets/Search.png')} style={styles.icon} />
        <TouchableOpacity onPress={handleCartPress}>
          <Image source={require('../assets/shoppingBag.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  logoIcon: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default MainHeader;
