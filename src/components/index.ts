import { Resolvers } from 'apollo-client';
import * as R from 'ramda';
import authResolvers from './Auth';
import organizationResolvers from './Organizations';

const resolvers: Resolvers | Resolvers[] = R.mergeAll([
  authResolvers,
  organizationResolvers
]);

export default resolvers;
