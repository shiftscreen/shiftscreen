import { IdValue, toIdValue } from 'apollo-utilities';
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { GraphQLCache } from './types';
import { Api } from '../constants';

const getById = (__typename: string, id: string): IdValue => (
  toIdValue(defaultDataIdFromObject({ __typename, id }) || '')
);

export const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      organization: (_, args) => getById('Organization', args.id),
    },
  },
});

cache.writeData<GraphQLCache>({
  data: {
    isLoggedIn: !!localStorage.getItem(Api.token),
    selectedOrganization: null,
  },
});
