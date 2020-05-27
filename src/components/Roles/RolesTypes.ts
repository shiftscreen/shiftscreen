import { BasicOrganizationPartsFragment, BasicRolesPartsFragment, BasicUserPartsFragment } from 'generated/graphql';

export type RoleOrganization = BasicRolesPartsFragment & { organization: BasicOrganizationPartsFragment};

export type RoleUser = BasicRolesPartsFragment & { user: BasicUserPartsFragment };
