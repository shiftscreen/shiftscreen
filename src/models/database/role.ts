import { EntityBase } from './base';
import { Screen } from './screen';

export enum RolePermission {
  Admin = "ADMIN",
  Editor = "EDITOR",
}

export interface Role extends EntityBase {
  permissionType: RolePermission;
  screen?: Screen;
}

export interface NewRoleInput {
  permissionType: RolePermission;
  userId: number;
  screenId: number;
}

export interface UpdateRoleInput {
  permissionType: RolePermission;
}
