import { DataProxy } from 'apollo-cache';
import { ViewerRolesDocument, ViewerRolesQuery } from 'generated/graphql';
import { RoleTypes } from 'types';

export const updateCache = (cache: DataProxy, role: RoleTypes.RoleOrganization) => {
  const data = cache.readQuery<ViewerRolesQuery>({ query: ViewerRolesDocument });
  const updatedRoles = data && data?.viewer?.roles?.filter(r => r.id !== role.id);
  const updatedData = {
    viewer: {
      ...data?.viewer,
      roles: updatedRoles,
    }
  };

  cache.writeQuery({
    query: ViewerRolesDocument,
    data: updatedData,
  });
};
