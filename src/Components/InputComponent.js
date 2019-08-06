import React, { Component } from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';

import Item from './ItemComponent';

class Input extends Component {
  render() {
    return (
      <View style={styles.inputView}>
        <TextInput style={styles.inputBox} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "white",
    borderColor: "#CCC",
    borderWidth: 3,
    padding: 10,
    margin: 20,
    flex: 1,
    height: 40,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  }
}) 

export default Input;