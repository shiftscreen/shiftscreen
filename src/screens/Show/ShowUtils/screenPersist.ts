import { ScreenExtendedByKeyQuery } from 'types';
import { PERSISTED_SCREENS_TOKEN } from './constants';

const getAllPersistedScreens = (): Record<string, ScreenExtendedByKeyQuery> => {
  const persistedScreens = localStorage.getItem(PERSISTED_SCREENS_TOKEN);
  return JSON.parse(persistedScreens || '{}');
};

const setAllPersistedScreens = (data: Record<string, ScreenExtendedByKeyQuery>) => {
  const stringData = JSON.stringify(data);
  localStorage.setItem(PERSISTED_SCREENS_TOKEN, stringData);
};

export const getPersistedScreen = (publicKey: string): ScreenExtendedByKeyQuery | undefined => {
  const persistedScreens = getAllPersistedScreens();
  return persistedScreens[publicKey];
};

export const persistScreen = (publicKey: string, data: ScreenExtendedByKeyQuery) => {
  const persistedScreens = getAllPersistedScreens();
  setAllPersistedScreens({
    ...persistedScreens,
    [publicKey]: data,
  })
};
