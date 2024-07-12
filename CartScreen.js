import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import MainHeader from './MainHeader';

function CartScreen() {
  return (
    <View>
      <View style={styles.container}>
        {/* <MainHeader /> */}
        <View>
          <Text style={{fontSize:27,fontWeight:'320'}}>Materials</Text>
          <Text style={{fontSize:27,fontWeight:'320',color:'gray'}}>
            We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
          </Text>
          <View>
            <View style={styles.imageContent}>
              <Image source={require('../assets/Do Not Bleach.png')} />
              <Text style={{fontSize:20,fontWeight:'300',color:'gray'}}>Do not use bleach</Text>
            </View>
            <View style={styles.imageContent}>
              <Image source={require('../assets/Do Not Tumble Dry.png')} />
              <Text style={{fontSize:20,fontWeight:'300',color:'gray'}}>Do not tumble dry</Text>
            </View>
            <View style={styles.imageContent}>
              <Image source={require('../assets/Do Not Wash.png')} />
              <Text style={{fontSize:20,fontWeight:'300',color:'gray'}}>Dry clean with tetrachloroethylene</Text>
            </View>
            <View style={styles.imageContent}>
              <Image source={require('../assets/Iron Low Temperature.png')} />
              <Text style={{fontSize:20,fontWeight:'300',color:'gray'}}>Iron at a maximum of 110C/230F</Text>
            </View>
          </View>
          <View style={styles.textContent}>
            <View>
              <View style={{borderBottomWidth:0.25, width:"100%",color:'gray', textAlign:"center",marginTop:20,marginBottom:20}}></View>
              <View style={styles.imageContent}>
                <Image source={require('../assets/Door to Door Delivery.png')}/>
                <Text style={{fontSize:20,fontWeight:'320'}}>Free Flat Rate Shipping</Text>
              </View>
              <View style={{marginTop:5}}>
                <Text  style={{fontSize:20,fontWeight:'300',color:'gray'}}>Estimated to be delivered on</Text>
                <Text  style={{fontSize:20,fontWeight:'300',color:'gray'}}>09/11/2021 - 12/11/2021</Text>
              </View>
            </View>
            <View>
              <Image style={{marginTop:5}} source={require('../assets/Up.png')}/>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.leftContainer}>
              <Image source={require('../assets/Plus.png')} style={styles.icon} />
              <Text style={styles.text}>ADD TO BASKET</Text>
            </View>
            <Image source={require('../assets/Heart.png')} style={styles.icon} 
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
  },
  imageContent: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 10
  },
  textContent: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 5,
  },
  bottom: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10, 
    marginTop: 200
  },
  leftContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  icon: {
    width: 30, 
    height: 30, 
    tintColor: 'white', 
  },
  text: {
    color: 'white',
    fontSize: 16, 
    marginLeft: 10, 
  },
});

export default CartScreen;
