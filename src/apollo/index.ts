import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import resolvers from 'components';

import { auth } from 'utils';
import { Api } from 'constants/index';
import { cache } from './cache';

const httpLink = createUploadLink({
  uri: Api.uri,
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:5000/graphql',
  options: {
    reconnect: true
  }
});

const httpWsLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(Api.token);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

export const authLayer = authLink.concat(httpWsLink);

const logoutLink = onError(({ graphQLErrors }) => {
  const error = graphQLErrors && graphQLErrors[0];

  // @ts-ignore wrong typings
  if (error?.message?.statusCode === 401) {
    auth
      .refreshToken()
      .then((success: boolean) => {
        !success && auth.logout({ soft: true })
      })
      .catch(() => (
        auth.logout({ soft: true })
      ));
  }
});

export const link = logoutLink.concat(authLayer);

export const client = new ApolloClient({
  link,
  cache,
  resolvers,
});

export {
  cache,
};
