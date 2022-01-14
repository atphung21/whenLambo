import React from 'react';
import { View, Text } from 'react-native';
import { MainLayout } from './index';
import { connect } from 'react-redux';
import { getHoldings, getCoinMarket } from '../Stores/Market/marketActions';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS, SIZES, FONTS } from '../Constants/index';
import { BalanceInfo } from '../Components/index';

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
      getCoinMarket();
    }, [])
  );

  function renderWalletInfoSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray
        }}
      >
        {/* {Balance Info} */}
        <BalanceInfo
          title="Your Wallet"
          displayAmount="45,000"
          changePer="2.3"
          containerStyle={{
            marginTop: 50,
          }}
        />
        {/* {Buttons} */}
      </View>
    );
  }

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}
      >
        {/* {Header} */}
        {renderWalletInfoSection()}
        {/* {Chart} */}
        {/* {Top Crytos} */}
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
