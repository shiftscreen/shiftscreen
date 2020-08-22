import * as R from 'ramda';
import loadable from '@loadable/component';
import { Module } from 'types';
import modules from 'modules';

export const preloadModules = async () => {
  const toModuleViewPreload = async (module: Module) => (
    await loadable(() => import(`modules/${module.id}/stable/View`)).preload()
  );
  const modulesViewsPreloadList = R.map(toModuleViewPreload, modules);
  await Promise.all(modulesViewsPreloadList);
};
