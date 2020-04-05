import { Resolvers } from 'apollo-client';
import * as R from 'ramda';

const isLoggedIn = (): boolean => R.not(R.empty(localStorage.getItem('token')));

const authResolvers: Resolvers | Resolvers[] = {
  Query: {
    isLoggedIn,
  },
};

export default authResolvers;
