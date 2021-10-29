import React, {Component, useState} from 'react';

import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

class Spinner extends Component {
  render() {
    const {loadingBox, loadingCard, message} = styles;
    return (
      <View style={loadingBox}>
        <View style={loadingCard}>
          <ActivityIndicator size="large" color="green"  style={{marginTop:20}}/>
          <Text style={message}>Wait, it's loading...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingBox: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  loadingCard: {
    backgroundColor: 'lightblue',
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 10,
    
   
  },

  message: {
    marginTop: 50,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Spinner;
