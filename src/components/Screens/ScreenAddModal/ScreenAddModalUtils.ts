import { AddScreenMutation, OrganizationScreensDocument, OrganizationScreensQuery } from 'generated/graphql';
import { DataProxy } from 'apollo-cache';
import { BasicOrganizationPartsFragment } from 'types';
import { FetchResult } from 'apollo-link';

export const updateCache = (
  cache: DataProxy,
  { data }: FetchResult<AddScreenMutation>,
  selectedOrganization: BasicOrganizationPartsFragment | null | undefined
) => {
  if (!selectedOrganization) {
    return;
  }

  const current = cache.readQuery<OrganizationScreensQuery>({
    query: OrganizationScreensDocument,
    variables: {
      id: parseInt(selectedOrganization.id, 10)
    }
  });

  if (current?.organization?.screens && data?.addScreen) {
    cache.writeQuery<OrganizationScreensQuery>({
      query: OrganizationScreensDocument,
      data: {
        organization: {
          ...current.organization,
          screens: [...current.organization.screens, data.addScreen],
        },
      }
    });
  }
};
