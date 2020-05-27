import { DataProxy } from 'apollo-cache';
import {
  Organization,
  OrganizationRolesDocument,
  OrganizationRolesQuery,
} from 'generated/graphql';
import { RolesTypes } from 'types';

export const updateCache = (cache: DataProxy, role: RolesTypes.RoleUser, organization: Organization) => {
  const data = cache.readQuery<OrganizationRolesQuery>({
    query: OrganizationRolesDocument,
    variables: {
      organizationId: parseInt(organization.id, 10),
    }
  });
  const updatedRoles = data && data?.organization?.roles?.filter(r => r.id !== role.id);
  const updatedData = {
    organization: {
      ...data?.organization,
      roles: updatedRoles,
    }
  };

  cache.writeQuery({
    query: OrganizationRolesDocument,
    data: updatedData,
  });
};
