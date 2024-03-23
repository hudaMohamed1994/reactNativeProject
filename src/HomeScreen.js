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

function Home({ navigation }) {
  const [counter, setCounter] = useState(0)
  const list =
    [
      'firstItem',
      '',
      'name3', 'name4', 'name5', 'name5', 'name5', 'name5', 'name5', 'name0',
    ]
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        this is our List ....
      </Text>
      <FlatList
        data={list}
        renderItem={({ item }) => <Text style={styles.text} >this our data {item}</Text>}
      />
      <Button
        title="Learn More"
        color="#841584"
        onPress={() => navigation.navigate('DetailsScreen')}
      ></Button>
    </View>);
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F08880",
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
    fontFamily: 'Raleway-Italic',
    margin: 10,
    color: "#F08000"
  },
  header: {
    fontSize: 40,
    margin: 20,
    color: Colors.black
  }
});

export default Home;
