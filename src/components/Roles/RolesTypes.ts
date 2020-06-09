import { BasicOrganizationPartsFragment, BasicRolePartsFragment, BasicUserPartsFragment } from 'generated/graphql';

export type RoleOrganization = BasicRolePartsFragment & { organization: BasicOrganizationPartsFragment };

export type RoleUser = BasicRolePartsFragment & { user: BasicUserPartsFragment };
