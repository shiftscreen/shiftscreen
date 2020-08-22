import { cache } from 'apollo';
import { ScreenExtendedByKeyQuery, ScreenExtendedByKeyDocument, ScreenKeyInput } from 'generated/graphql';
import { getPersistedScreen } from './screenPersist';

export const preloadScreen = (screenKey: ScreenKeyInput) => {
  const persistedScreen = getPersistedScreen(screenKey.publicKey);

  if (persistedScreen) {
    cache.writeQuery<ScreenExtendedByKeyQuery>({
      query: ScreenExtendedByKeyDocument,
      variables: {
        screenKey,
      },
      data: persistedScreen,
    })
  }
};
