import React from 'react';
import loadable from '@loadable/component';
// nested export enums are not available at runtime
import { PanelPath } from 'components/Panel/PanelTypes';
import { PanelTypes } from 'types';
import { HeaderActions as ScreensHeaderActions } from 'components/Screens';
import { HeaderActions as FilesHeaderActions } from 'components/Files';
import { HeaderActions as OrganizationsHeaderActions } from 'components/Organizations';

/*import Screens from './Screens';
import OrganizationSettings from './OrganizationSettings';
import OrganizationsList from './OrganizationsList';
import Files from './Files';
import ModulesList from './ModulesList';
import ModuleInstances from './ModuleInstances';*/

const Screens = loadable(() => import('./Screens'));
const OrganizationSettings = loadable(() => import('./OrganizationSettings'));
const OrganizationsList = loadable(() => import('./OrganizationsList'));
const Files = loadable(() => import('./Files'));
const ModulesList = loadable(() => import('./ModulesList'));
const ModuleInstances = loadable(() => import('./ModuleInstances'));

export const viewsConfig: PanelTypes.ViewsConfig = [
  {
    index: 0,
    elementPathName: PanelPath.Screens,
    iconName: 'tv',
    title: 'Ekrany',
    component: Screens,
    headerActions: <ScreensHeaderActions/>,
    selectedPath: 'screen',
  },
  {
    index: 1,
    elementPathName: PanelPath.OrganizationsList,
    iconName: 'users',
    title: 'Organizacje',
    component: OrganizationsList,
    headerActions: <OrganizationsHeaderActions/>,
    selectedPath: 'organization',
  },
  {
    index: 2,
    elementPathName: PanelPath.Files,
    iconName: 'folder',
    title: 'Pliki',
    component: Files,
    headerActions: <FilesHeaderActions/>,
    selectedPath: 'file',
  },
  {
    index: 3,
    elementPathName: PanelPath.Modules,
    iconName: 'th-large',
    title: 'Moduły',
    component: ModulesList,
    selectedPath: 'module',
  },
  {
    index: 4,
    elementPathName: PanelPath.ModuleInstances,
    iconName: 'th-large',
    title: 'Instancje modułu',
    component: ModuleInstances,
    hideInMenu: true,
  },
  {
    index: 5,
    elementPathName: PanelPath.OrganizationSettings,
    iconName: 'users',
    title: 'Ustawienia organizacji',
    component: OrganizationSettings,
    hideInMenu: true,
  },
];
