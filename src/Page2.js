import React from 'react';
import {View, Button, Text} from 'react-native';

import Input from './Components/InputComponent';

const Page2 = () => (
  <View>
    <Text>Aqui poderá adicionar novos items!</Text>
    <Input/>
    <Button title="Adicionar Item"/>
  </View>
);

Page2.navigationOptions = {
  title: 'Adicionar',
}

export default Page2;