import React from 'react';
import { IconName } from '@fortawesome/fontawesome-common-types';

export interface View {
  index: number;
  elementPathName: string;
  iconName: IconName;
  title: string;
  headerActions?: React.ReactElement;
  component: React.FC;
}

export type ViewsConfig = View[];

export enum PanelPath {
  Screens = 'screens',
  Files = 'files',
  Modules = 'modules',
}
