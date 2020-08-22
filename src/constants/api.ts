import { ApiType } from 'types';

const Api: ApiType = {
  token: 'shiftscreen-token',
  tokenExpiration: 'shiftscreen-token-expires-on',
  recaptchaKey: process.env.NODE_ENV === 'production'
    ? '6LfgoLIZAAAAAPz7AQy1wxxwkcJsH6ebhlf9D5zd'
    : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
  uri: '/graphql',
  wsUri: process.env.NODE_ENV === 'production'
    ? 'wss://api.shiftscreen.pl/graphql'
    : 'ws://localhost:5000/graphql',
};

export default Api;
