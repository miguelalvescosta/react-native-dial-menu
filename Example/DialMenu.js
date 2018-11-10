/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Dialmenu from './DialMenu';
import DialMenuItem from './DialMenuItem'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class DialMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{height: 80, bottom: 0}}>
       <Dialmenu type={"left"} menuColor= {'#5EADD6'} buttonColor= {"#405E70"}  style={{height: '30%'}}>
            
       <DialMenuItem imageSource={require('./Assets/home.png')} title={"Home"} textColor= {"white"} iconsColor= {"white"}/>
             <DialMenuItem imageSource={require('./Assets/store.png')} title={"Store"} title={"Home"} textColor= {"white"} iconsColor= {"white"}/>
             <DialMenuItem imageSource={require('./Assets/cart.png')} title={"Cart"}  title={"Home"} textColor= {"white"} iconsColor= {"white"}/>
             <DialMenuItem imageSource={require('./Assets/travel.png')} title={"Travel"} title={"Home"} textColor= {"white"} iconsColor= {"white"}/>
          
          </Dialmenu>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
