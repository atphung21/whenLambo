import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Portfolio, Market, Profile } from '../Screens/index';
import { COLORS, icons } from '../Constants/index';
import { TabIcon, TabBarCustomButton } from '../Components/index';



const Tab = createBottomTabNavigator();


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
            return <TabIcon focused={focused} label="Home" icon={icons.home}/>;
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} label="Portfolio" icon={icons.briefcase} />;
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return ( <TabIcon focused={focused} label="Trade" isMiddle={true} icon={icons.trade}/>)
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
            return <TabIcon focused={focused} label="Market" icon={icons.market} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} label="Profile" icon={icons.profile}/>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
