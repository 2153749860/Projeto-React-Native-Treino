/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Button,
  Platform,
  Animated,
  ScrollView,
  Image
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";


const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 200;

class App extends Component {

  constructor() {
    super();
    this.scrollYAnimatedValue = new Animated.Value(0);
    this.state = {
      text: '',
      items: [
        { key: '0', desc: 'Item 1', comp: 'Olá Mundo!', done: false },
        { key: '1', desc: 'Item 2', comp: 'Olá Mundo!', done: false },
      ],
    };

    this.inserirItem = this.inserirItem.bind(this);
  }

  renderItem(obj) {
    return (
      //<Text style={styles.cell}>{obj.item.desc}</Text>
      <Text style={styles.box}>
        <Text style={styles.cell}>{obj.item.desc} {"\n"}</Text>
        <Text style={styles.text}>{obj.item.comp}</Text>
      </Text>
    );
  }

  inserirItem() {
    if (this.state.text === '') {
      return;
    }

    let newItem = {
      key: this.state.items.length.toString(),
      desc: this.state.text,
      done: false
    };

    let items = this.state.items;
    items.push(newItem);
    this.setState(items);

    let text = "";
    this.setState({ text });
  }

  render() {
    const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      });

    const headerBackgroundColor = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: ['#00ffff', '#0000ff'],
        extrapolate: 'clamp'
      });

    return (
      <Fragment>
        <StatusBar backgroundColor="black" barStyle="white" />
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
            )}>
            <Image source={require('./tiger-icon-png.png')} style={styles.imagem} />
            <FlatList
              style={styles.lista}
              data={this.state.items}
              renderItem={this.renderItem}
              //renderItemText={this.renderItemText}
              extradata={this.state}
            />
          </ScrollView>
          <Animated.View style={[styles.animatedHeaderContainer, { height: headerHeight, backgroundColor: headerBackgroundColor }]}>
            <Text style={styles.headerText}>Lista de todos</Text>
          </Animated.View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                this.setState({ text });
              }}
              value={this.state.text}
            />
            <Button onPress={this.inserirItem} title="Inserir" />
            
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  lista: {
    marginTop: 24,
  },
  cell: {
    padding: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: "#E4EBEE",
    fontSize: 20,
    marginBottom: 2,
  },
  input: {
    backgroundColor: "white",
    borderColor: "#CCC",
    borderWidth: 3,
    padding: 10,
    margin: 20,
    flex: 1,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  animatedHeaderContainer: {
    position: 'absolute',
    top: (Platform.OS == 'ios') ? 20 : 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 22
  },
  imagem: {
    width: null,
    resizeMode: 'contain',
    height: 220
  },
  text: {
    padding: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: "#E4EBEE",
    fontSize: 15,
    marginBottom: 2,
  },
  box: {
    padding: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: "#E4EBEE",
    marginBottom: 2,
  }
});

export default App;

