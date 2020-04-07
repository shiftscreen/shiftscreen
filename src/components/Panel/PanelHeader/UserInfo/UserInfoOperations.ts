import { client } from 'apollo';
import { Api } from 'constants/index';

export const logout = () => {
  localStorage.removeItem(Api.token);
  client.writeData({ data: { isLoggedIn: false } });
};
