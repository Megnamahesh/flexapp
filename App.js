
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={styles.parentview}>
      <View style={styles.yellowview}/>
      <View style={styles.redview}/>
      <View style={styles.blackview}/>
      <View style={styles.orangeview}/>
      <View style={styles.pinkview}/>
      <View style={styles.greenview}/>
      <View style={styles.purpleview}/>
      <View style={styles.bluebox}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  parentview:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
   flexWrap:'nowrap',
   minWidth:100,
  
  },
 yellowview:{

   backgroundColor:'yellow',
   width:100,
   height:100,
   flexGrow:1,
   
 },
 redview:{

 width:100,
  height:100,
   backgroundColor:'red',
 
 },
 bluebox:{
 
  width:100,
  height:100,
   backgroundColor:'blue',
  
 },
 blackview:{
  width:100,
  height:100,
   backgroundColor:'black',
 },
 orangeview:{
  width:100,
  height:100,
   backgroundColor:'orange',
 },
greenview:{
 width:100,
 height:100,
  backgroundColor:'green',
},
pinkview:{
  width:100,
  height:100,
   backgroundColor:'pink',
 },
 purpleview:{
  width:100,
  height:100,
   backgroundColor:'purple',
 },
})
