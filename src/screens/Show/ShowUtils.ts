import * as R from 'ramda';
import loadable from '@loadable/component';
import { BasicSlidePartsFragment, Module, ScreenExtendedByKeyQuery, ScreenKeyInput, Slide } from 'types';
import modules from 'modules';
import { useParams } from 'react-router';

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

export const getFilteredOrderedSlides = (data?: ScreenExtendedByKeyQuery): BasicSlidePartsFragment[] => {
  const screen = data?.screenByKey;
  const slides = screen?.slides || [];
  const slidesOrder: number[] = screen?.slidesOrder || [];

  if (R.isNil(screen)) {
    return [];
  }

  const toSlide = (id: number) => (
    R.find<Slide>(
      R.propEq('id', id.toString())
    )(slides)
  );
  const list = R.map(toSlide, slidesOrder);
  const orderedList: any = R.reject(R.isNil, list);
  console.log({ slidesOrder });

  return orderedList.filter((slide: BasicSlidePartsFragment) => slide.isActive);
};

export const useScreenKey = (): ScreenKeyInput => {
  const { publicKey, id } = useParams();
  const privateKey = localStorage.getItem(PRIVATE_KEY_TOKEN) || '';
  const screenId = parseInt(id, 10);

  return {
    publicKey,
    privateKey,
    screenId,
  }
};
