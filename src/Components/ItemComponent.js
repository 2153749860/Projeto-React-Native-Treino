import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

class Item extends Component {
  constructor() {
    super();
    this.state = {
        itens: [
          {key: '0', nome: 'Item 0'},
          {key: '1', nome: 'Item 1'}
        ]
    }


  }

  renderItem(obj) {
    return (
      <Text>{obj.item.nome}</Text>
    );
  }

  render() {
    return (
      <FlatList data={this.state.itens} renderItem={this.renderItem} />
    );
  }
}

export default Item;
