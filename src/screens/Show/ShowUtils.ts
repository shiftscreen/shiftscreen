import * as R from 'ramda';
import loadable from '@loadable/component';
import { Module } from 'types';
import modules from 'modules';

export const PRIVATE_KEY_TOKEN = 'shiftscreen-private-key';

const preloadModules = async () => {
  const toModuleViewPreload = async (module: Module) => (
    await loadable(() => import(`modules/${module.id}/stable/View`)).preload()
  );
  const modulesViewsPreloadList = R.map(toModuleViewPreload, modules);
  await Promise.all(modulesViewsPreloadList);
};

const generateRandomKey = (): string => {
  const ids = [1, 2, 3];
  const toRandom = () => Math.floor(Math.random() * 899) + 100; // between 100 and 999
  return ids
    .map(toRandom)
    .toString()
    .replace(/,/g,"-");
};

const createPrivateKeyIfNotExists = () => {
  const keyExists = localStorage.getItem(PRIVATE_KEY_TOKEN);

  if (!keyExists) {
    const key = generateRandomKey();
    localStorage.setItem(PRIVATE_KEY_TOKEN, key);
    window.location.reload();
  }
};

export const bootstrap = () => {
  preloadModules();
  createPrivateKeyIfNotExists();
};
