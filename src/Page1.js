import React from 'react';
import { View, Button, Text, FlatList} from 'react-native';

import Item from './Components/ItemComponent';

const Page1 = ({ navigation }) => (
  <View>
    <Text>Home</Text>
    <Item />
    <Button title="Adicionar Item" onPress={()=>navigation.navigate('Adicionar')}/>
  </View>
);

Page1.navigationOptions = {
  title: 'Home',
}

export default Page1;