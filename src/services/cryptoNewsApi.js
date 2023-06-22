import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '1cadb56c66mshb3160b8e5803a90p1097d4jsn321007ba9116',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }
  const baseUrl = 'https://crypto-news16.p.rapidapi.com/news/all';
  const createRequest = (url) => ({ url , header: cryptoNewsHeaders});
  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
      getCryptoNews : builder.query({
          query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      })
    })
});
export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;
