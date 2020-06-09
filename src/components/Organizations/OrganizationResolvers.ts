import { Resolver, Resolvers } from 'apollo-client';
import { OrganizationByIdDocument } from 'generated/graphql';

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
    console.error(e);
  }

  return null;
};

const organizationsResolvers: Resolvers | Resolvers[] = {
  Mutation: {
    selectOrganization,
  },
};

export default organizationsResolvers;
