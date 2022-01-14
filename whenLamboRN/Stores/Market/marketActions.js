import axios from 'axios';

export const GET_HOLDINGS_BEGIN = 'GET_HOLDINGS_BEGIN';
export const GET_HOLDINGS_SUCCESS = 'GET_HOLDINGS_SUCCESS';
export const GET_HOLDINGS_FAILURE = 'GET_HOLDINGS_FAILURE';

export const GET_COIN_MARKET_BEGIN = 'GET_COIN_MARKET_BEGIN';
export const GET_COIN_MARKET_SUCCESS = 'GET_COIN_MARKET_SUCCESS';
export const GET_COIN_MARKET_FAILURE = 'GET_COIN_MARKET_FAILURE';
//Holdings / my holdings

export const getHoldingsBegin = () => ({
  type: GET_HOLDINGS_BEGIN,
});

export const getHoldingSuccess = (myHoldings) => ({
  type: GET_HOLDINGS_SUCCESS,
  payload: { myHoldings },
});

export const getHoldingFailure = (error) => ({
  type: GET_HOLDINGS_FAILURE,
  payload: { error },
});

export function getHoldings(
  holdings = [],
  currency = 'usd',
  orderBy = 'market_cap_desc',
  sparkline = true,
  priceChangePerc = '7d',
  perPage = 10,
  page = 1
) {
  return (dispatch) => {
    dispatch(getHoldingsBegin());

    let ids = holdings.map((item) => item).join(',');
    let apiURL =
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${ids}`;

    return axios({
      url: apiURL,
      method: 'GET',
      header: {
        Accept: 'application/json',
      },
    }).then((response) => {
      console.log('GetHoldings:', response)
        if (response == 200) {
          //Massage data
          let myHoldings = response.data.map((item) => {
            //retrive current holdings -> current quantity
            let coin = holdings.find((a) => a.id == item.id);

            //Price from 7 days ago
            let price7d =
              item.current_price /
              (1 + item.price_change_percentage_7d_in_currency * 0.01);

            return {
              id: item.id,
              symbol: item.name,
              image: item.image,
              current_price: item.current_price,
              qty: coin.qty,
              total: coin.qty * item.current_price,
              price_change_percentage_7d_in_currency:
                item.price_change_percentage_7d_in_currency,
              holding_value_change_7d:
                (item.current_price - price7d) * coin.qty,
              sparkline_in_7d: {
                value: item.sparkline_in_7d.price.map((price) => {
                  return price * coin.qty;
                }),
              },
            };
          });

          dispatch(getHoldingsSuccess(myHoldings));
        } else {
          dispatch(getHoldingFailure(response.data));
        }
      })
      .catch((error) => {
        dispatch(getHoldingFailure(error));
      });
  };
}

//Coin Market

export const getCoinMarketBegin = () => ({
  type: GET_COIN_MARKET_BEGIN,
});

export const getCoinMarketSuccess = (coins) => ({
  type: GET_COIN_MARKET_SUCCESS,
  payload: coins,
});

export const getCoinMarketFailure = (error) => ({
  type: GET_COIN_MARKET_FAILURE,
  payload: error,
});

export function getCoinMarket(
  currency = 'usd',
  orderBy = 'market_cap_desc',
  sparkline = true,
  priceChangePerc = '7d',
  perPage = 10,
  page = 1
) {
  return (dispatch) => {
    dispatch(getCoinMarketBegin());

    let apiUrl =
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`;

    return axios({
      url: apiUrl,
      method: 'GET',
      header: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response == 200) {
          dispatch(getCoinMarketSucess(response.data));
        } else {
          dispatch(getCoinMarketFailure(response.data));
        }
      })
      .catch((error) => {
        dispatch(getCoinMarketFailure(error));
      });
  };
}
