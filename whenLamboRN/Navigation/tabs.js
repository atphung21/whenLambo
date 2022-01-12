import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Portfolio, Market, Profile } from '../Screens/index';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          backgroundColor: 'blue',
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Trade" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
