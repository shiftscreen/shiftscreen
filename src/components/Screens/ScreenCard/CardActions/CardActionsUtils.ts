import { DataProxy } from 'apollo-cache';
import {
  OrganizationScreensDocument,
  OrganizationScreensQuery,
  ScreenTypes,
  SelectedOrganizationDocument,
  SelectedOrganizationQuery,
} from 'types';

export const updateCacheAfterScreenDelete = (cache: DataProxy, screen: ScreenTypes.ScreenViewerRole) => {
  const selectedOrganization = cache.readQuery<SelectedOrganizationQuery>({
    query: SelectedOrganizationDocument,
  });
  if (!selectedOrganization?.selectedOrganization) {
    return;
  }

  const data = cache.readQuery<OrganizationScreensQuery>({
    query: OrganizationScreensDocument,
    variables: {
      id: parseInt(selectedOrganization.selectedOrganization.id, 10)
    }
  });
  const updatedScreens = data && data?.organization?.screens?.filter(s => s.id !== screen.id);
  const updatedData = {
    organization: {
      ...data?.organization,
      screens: updatedScreens,
    }
  };

  cache.writeQuery({
    query: OrganizationScreensDocument,
    data: updatedData,
  });
};
