import { BasicOrganizationPartsFragment } from 'generated/graphql';

export interface GraphQLCache {
  isLoggedIn: boolean;
  selectedOrganization: BasicOrganizationPartsFragment | null;
}
