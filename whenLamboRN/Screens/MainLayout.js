import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, SIZES, icons } from '../Constants/index';

const MainLayout = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {children}
    </View>
  );
};

export default MainLayout;
