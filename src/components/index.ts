import { Resolvers } from 'apollo-client';
import * as R from 'ramda';
import authResolvers from './Auth';

const resolvers: Resolvers | Resolvers[] = R.mergeAll([
  authResolvers
]);

export default resolvers;
