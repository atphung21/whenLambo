import React from 'react';
import { View, Text, Image } from 'react-native';
import { SIZES, COLORS, FONTS, icons } from '../Constants/index';


const BalanceInfo = ({ title, changePer, displayAmount, containerStyle}) => {
  return (
    <View
      title={title}
      changePer={changePer}
      displayAmount={displayAmount}
      style={{
        ...containerStyle
      }}
      >
      <Text
        style={{
          color: 'white'
        }}
      >Balance Info</Text>
    </View>
  )
}


export default BalanceInfo;