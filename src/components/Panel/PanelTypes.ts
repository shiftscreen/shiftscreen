import React from 'react';
import { IconName } from '@fortawesome/fontawesome-common-types';

export interface View {
  index: number;
  elementPathName: string;
  iconName: IconName;
  title: string;
  headerActions?: React.ReactElement;
  component: React.FC;
  hideInMenu?: boolean;
}

export type ViewsConfig = View[];

export enum PanelPath {
  Screens = 'screens',
  OrganizationsList = 'organizations',
  OrganizationSettings = 'organization',
  Files = 'files',
  Modules = 'modules',
  ModuleInstances = 'module',
}
