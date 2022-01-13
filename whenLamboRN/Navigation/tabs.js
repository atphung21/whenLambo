import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Portfolio, Market, Profile } from '../Screens/index';
import { COLORS } from '../Constants/theme';
import { TabIcon } from '../Components/index';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        borderTopColor: 'transparent',
        tabBarStyle: {
          height: 140,
          backgroundColor: COLORS.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} label="Home" />;
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} label="Portfolio" />;
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} label="Trade" isMiddle={true} />;
          },
          tabBarButton: (props) => {
            return (
              <TabBarCustomButton
                {...props}
                onPress={() => console.log('Trade Button')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} label="Market" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} label="Profile" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
