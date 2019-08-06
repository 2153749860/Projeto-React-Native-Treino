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
        text: "",
        itens: [
          {key: '0', nome: 'Item 0', done: false},
          {key: '1', nome: 'Item 1', done: false}
        ]
    }
  }

  renderItem(obj) {
    return (
      <Text style={styles.item}>{obj.item.nome}</Text>
    );
  }

  inserirItem() {
    if(this.state.text === ''){
      return;
    }

    let newItem = {
      key: this.state.itens.length.toString(),
      nome: this.state.text,
      done: false,
    }

    let items = this.state.items;
    items.push(newItem);
    this.setState(items); 
  }

  render() {
    return (
      <FlatList data={this.state.itens} renderItem={this.renderItem} />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    fontSize: 15
  }
});

export default Item;
