import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import resolvers from 'components';

import { Api } from 'constants/index';

const httpLink = createHttpLink({
  uri: Api.uri,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(Api.token);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

export const link = authLink.concat(httpLink);
export const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
  resolvers,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem(Api.token),
  },
});
