import {
  BasicOrganizationPartsFragment,
  OrganizationByIdDocument,
  OrganizationByIdQuery,
} from 'generated/graphql';
import { cache } from 'apollo';

export const getOrganization = (id: string): BasicOrganizationPartsFragment | null => {
  try {
    const data = cache.readQuery<OrganizationByIdQuery>({
      query: OrganizationByIdDocument,
      variables: { id },
    });

    return data !== null ? data.organization : data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
