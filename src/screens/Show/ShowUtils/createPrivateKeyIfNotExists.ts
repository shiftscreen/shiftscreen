import { generateRandomKey } from './generateRandomKey';
import { PRIVATE_KEY_TOKEN } from './constants';

export const createPrivateKeyIfNotExists = () => {
  const keyExists = localStorage.getItem(PRIVATE_KEY_TOKEN);

  if (!keyExists) {
    const key = generateRandomKey();
    localStorage.setItem(PRIVATE_KEY_TOKEN, key);
    window.location.reload();
  }
};
