import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initalRouteName={'MainLayout'}
      >
        <Stack.Screen name="MainLayout" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  SafeArea: {
    flex: 1,
  },
});

export default App;
