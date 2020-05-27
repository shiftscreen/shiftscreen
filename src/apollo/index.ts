import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import resolvers from 'components';

import { Api } from 'constants/index';
import { cache } from './cache';

const httpLink = createUploadLink({
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

export const client = new ApolloClient({
  link,
  cache,
  resolvers,
});

export {
  cache,
}
