import { ScreenKeyInput } from 'types';
import { preloadModules } from './preloadModules';
import { createPrivateKeyIfNotExists } from './createPrivateKeyIfNotExists';
import { useScreenKey } from './useScreenKey';
import { getFilteredOrderedSlides } from './getFilteredOrderedSlides';
import { preloadScreen } from './preloadScreen';
import { persistScreen } from './screenPersist';

export const bootstrap = (key: ScreenKeyInput) => {
  preloadModules();
  createPrivateKeyIfNotExists();
  preloadScreen(key);
};

export {
  useScreenKey,
  getFilteredOrderedSlides,
  persistScreen,
}
