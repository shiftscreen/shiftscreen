import { Resolver, Resolvers } from 'apollo-client';
import { OrganizationByIdDocument } from 'generated/graphql';
import { handleError } from '../../utils';

const selectOrganization: Resolver = (_, { id }, { cache }) => {
  try {
    const data = cache.readQuery({
      query: OrganizationByIdDocument,
      variables: { id },
    });
    const selectedOrganization = data.organization;

    cache.writeData({ data: { selectedOrganization } });

    return selectedOrganization;
  } catch (e) {
    handleError(e);
  }

  return null;
};

const organizationsResolvers: Resolvers | Resolvers[] = {
  Mutation: {
    selectOrganization,
  },
};

export default organizationsResolvers;
