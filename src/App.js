import { NavigationContainer } from "@react-navigation/native"
import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ title: "second" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
