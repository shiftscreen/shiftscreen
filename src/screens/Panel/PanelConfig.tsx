import React from 'react';
import { ViewsConfig, PanelPath } from '../../components/Panel/PanelTypes';

import { HeaderActions as ScreensHeaderActions } from 'components/Screens';
import { HeaderActions as FilesHeaderActions } from 'components/Files';
import { HeaderActions as OrganizationsHeaderActions } from 'components/Organizations';

import Screens from './Screens';
import OrganizationSettings from './OrganizationSettings';
import OrganizationsList from './OrganizationsList';
import Files from './Files';
import ModulesList from './ModulesList';
import ModuleInstances from './ModuleInstances';

export const viewsConfig: ViewsConfig = [
  {
    index: 0,
    elementPathName: PanelPath.Screens,
    iconName: 'tv',
    title: 'Ekrany',
    component: Screens,
    headerActions: <ScreensHeaderActions/>,
  },
  {
    index: 1,
    elementPathName: PanelPath.OrganizationsList,
    iconName: 'users',
    title: 'Organizacje',
    component: OrganizationsList,
    headerActions: <OrganizationsHeaderActions/>,
  },
  {
    index: 2,
    elementPathName: PanelPath.Files,
    iconName: 'folder',
    title: 'Pliki',
    component: Files,
    headerActions: <FilesHeaderActions/>,
  },
  {
    index: 3,
    elementPathName: PanelPath.Modules,
    iconName: 'th-large',
    title: 'Moduły',
    component: ModulesList,
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
