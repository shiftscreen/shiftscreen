import {
  BasicOrganizationPartsFragment,
  BasicRolePartsFragment,
  BasicScreenPartsFragment,
  BasicSlidePartsFragment
} from 'generated/graphql';

export type ScreenViewerRole = BasicScreenPartsFragment & { viewerRole: BasicRolePartsFragment };

export type ScreenExtended = BasicScreenPartsFragment
  & { slides?: BasicSlidePartsFragment[] | null }
  & { viewerRole: BasicRolePartsFragment }
  & { organization: BasicOrganizationPartsFragment };
