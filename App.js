import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './telas/DetailsScreen';
import HomeScreen from './telas/HomeScreen';
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Datails" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
