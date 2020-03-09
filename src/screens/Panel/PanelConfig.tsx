import React from 'react';
import { ViewsConfig } from './PanelTypes';

import Screens, { ScreensHeaderActions } from './Screens';
import Files, { FilesHeaderActions } from './Files';

export const viewsConfig: ViewsConfig = [
  {
    index: 0,
    path: '/panel/screens',
    iconName: 'desktop',
    title: 'Ekrany',
    component: Screens,
    headerActions: <ScreensHeaderActions/>
  },
  {
    index: 1,
    path: '/panel/files',
    iconName: 'folder',
    title: 'Pliki',
    component: Files,
    headerActions: <FilesHeaderActions/>
  },
  {
    index: 2,
    path: '/panel/modules',
    iconName: 'th-large',
    title: 'Moduły',
    component: Screens,
  }
];
