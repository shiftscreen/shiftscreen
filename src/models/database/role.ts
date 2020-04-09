import { EntityBase } from './base';
import { Screen } from './screen';
import { PermissionType } from 'generated/graphql';

export interface Role extends EntityBase {
  permissionType: PermissionType;
  screen?: Screen;
}

export interface NewRoleInput {
  permissionType: PermissionType;
  userId: number;
  screenId: number;
}

export interface UpdateRoleInput {
  permissionType?: PermissionType;
}

export {
  PermissionType,
}
