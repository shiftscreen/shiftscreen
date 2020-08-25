import { preloadModules } from './preloadModules';
import { createPrivateKeyIfNotExists } from './createPrivateKeyIfNotExists';
import { useScreenKey } from './useScreenKey';
import { getFilteredOrderedSlides } from './getFilteredOrderedSlides';
import { preloadScreen } from './preloadScreen';
import { persistScreen } from './screenPersist';
import { onSubscriptionData } from './onSubscriptionData';

export const bootstrap = () => (
  Promise.all([
    preloadModules(),
    createPrivateKeyIfNotExists(),
  ])
);

export {
  useScreenKey,
  getFilteredOrderedSlides,
  persistScreen,
  preloadScreen,
  onSubscriptionData
}
