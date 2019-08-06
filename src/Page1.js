import React from 'react';
import { View, Button, Text, StyleSheet, Image} from 'react-native';

import Item from './Components/ItemComponent';


const Page1 = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={require('./Components/tiger-icon-png.png')} style={styles.imagem}/>
    <Text>Home</Text>
    <Item />
    <Button title="Adicionar Item" onPress={()=>navigation.navigate('Adicionar')}/>
  </View>
);

Page1.navigationOptions = {
  title: 'Home',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imagem: {
    width: null,
    resizeMode: 'contain',
    height: 220
  }
});

export default Page1;