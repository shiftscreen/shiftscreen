import { ScreenKeyInput } from '../../../generated/graphql';
import { useParams } from 'react-router';
import { PRIVATE_KEY_TOKEN } from './constants';

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
