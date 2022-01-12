import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS } from '../Constants/theme';

const TabIcon = ({ isMiddle, label, focused }) => {
  if (isMiddle) {
    return (
      <View>
        <Text style={{ color: COLORS.white }}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;
