import { ApiType } from 'types';

const Api: ApiType = {
  token: 'shiftscreen-token',
  tokenExpiration: 'shiftscreen-token-expires-on',
  recaptchaKey: '6LfgoLIZAAAAAPz7AQy1wxxwkcJsH6ebhlf9D5zd',
  uri: '/graphql',
  wsUri: process.env.NODE_ENV === 'production'
    ? 'wss://api.shiftscreen.pl/graphql'
    : 'ws://localhost:5000/graphql',
};

export default Api;
