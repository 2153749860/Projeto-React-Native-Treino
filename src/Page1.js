import React from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';

import Item from './Components/ItemComponent';


const Page1 = ({ navigation }) => (
  <View style={styles.container}>
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
})

export default Page1;