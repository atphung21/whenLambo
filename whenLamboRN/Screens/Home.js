import React from 'react';
import { View, Text } from 'react-native';
import { MainLayout } from './index';
import { connect } from 'react-redux';
import { getHoldings, getCoinMarket } from '../Stores/Market/marketActions';
import { useFocusEffect } from '@react-navigation/native';

const dummyData = [
  {
    id: 'bitcoin',
    qty: 888,
  },
  {
    id: 'ethereum',
    qty: 188,
  },
  {
    id: 'dogecoin',
    qty: 88888,
  },
];

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {

  useFocusEffect(
    React.useCallback(() => {
      getHoldings((holdings = dummyData));
    }, [])
  );

  return (
    <MainLayout>
      <View>
        <Text>Home TEST</Text>
      </View>
    </MainLayout>
  );
};

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getCoinMarket(
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
