import { BasicRolePartsFragment, BasicScreenPartsFragment } from 'generated/graphql';

export type ScreenViewerRole = BasicScreenPartsFragment & { viewerRole: BasicRolePartsFragment };
