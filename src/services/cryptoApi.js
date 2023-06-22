import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '1cadb56c66mshb3160b8e5803a90p1097d4jsn321007ba9116'
}
const baseUrl = 'https://api.coinranking.com/v2';

const createRequest = (url) => ({ url , headers: cryptoApiHeaders})
export const cryptoApi = createApi({
      reducerPath: 'cryptoApi',
      baseQuery : fetchBaseQuery({baseUrl}),
      endpoints : (builder) => ({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({coinId , timePeriod}) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
        })
      })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery , useGetCryptoHistoryQuery
} = cryptoApi;