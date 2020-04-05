import React from 'react';
import { ViewsConfig, PanelPath } from './PanelTypes';

import { HeaderActions as ScreensHeaderActions } from 'components/Screens';
import { HeaderActions as FilesHeaderActions } from 'components/Files';

import Screens from './Screens';
import Files from './Files';

export const viewsConfig: ViewsConfig = [
  {
    index: 0,
    elementPathName: PanelPath.Screens,
    iconName: 'desktop',
    title: 'Ekrany',
    component: Screens,
    headerActions: <ScreensHeaderActions/>
  },
  {
    index: 1,
    elementPathName: PanelPath.Files,
    iconName: 'folder',
    title: 'Pliki',
    component: Files,
    headerActions: <FilesHeaderActions/>
  },
  {
    index: 2,
    elementPathName: PanelPath.Modules,
    iconName: 'th-large',
    title: 'Moduły',
    component: () => (<></>),
  }
];
