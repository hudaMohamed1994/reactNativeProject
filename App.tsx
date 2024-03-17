
import React from 'react';
import { PropsWithChildren, useState } from 'react';
import {
  Button,
  FlatList,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInputComponent,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App() {
  const [counter, setCounter] = useState(0)
  const list =
    [
      'dodo',
      'lolo',
      'koko', 'name', 'koko', 'koko','koko', 'koko', 'koko', 'koko',
    ]
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <Text style={styles.text} >this our data {item}</Text>}
      />
    </View>);
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F08880",
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    margin: 20,
    color: Colors.black
  }
});

export default App;
