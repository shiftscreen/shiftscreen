import React from 'react';
import * as R from 'ramda';
import WebFont from 'webfontloader';
import {
  useOnScreenKeyAddedSubscription,
  useOnScreenUpdatedSubscription,
  useScreenExtendedByKeyLazyQuery,
} from 'generated/graphql';
import {
  bootstrap,
  getFilteredOrderedSlides,
  onSubscriptionData,
  persistScreen,
  preloadScreen,
  useScreenKey
} from './ShowUtils';
import { KeyContainer } from './ShowStyle';
import ShowView from './ShowView';

WebFont.load({
  google: {
    families: ['Roboto:900,700,600,500']
  },
});

const Show: React.FC = () => {
  const screenKey = useScreenKey();
  const [getScreen, { data: screenData, loading, error }] = useScreenExtendedByKeyLazyQuery({
    variables: { screenKey },
    pollInterval: 'WebSocket' in window ? undefined : (1000 * 60 * 5), // 5 min
  });
  const { data: keyData } = useOnScreenKeyAddedSubscription({
    variables: { screenKey },
    onSubscriptionData: () => getScreen(),
  });
  const { data: screenUpdatedData } = useOnScreenUpdatedSubscription({
    variables: { screenKey },
    onSubscriptionData: (options) => onSubscriptionData(options, screenKey),
  });
  const slides = getFilteredOrderedSlides(screenData);

  React.useEffect(() => {
    if (screenData) {
      persistScreen(screenKey.publicKey, screenData);
    }

    if (error) {
      preloadScreen(screenKey);
    }
  }, [loading]);

  React.useEffect(() => {
    bootstrap();
    getScreen();
  }, []);

  if (!screenData || error) return (
    <KeyContainer>
      {screenKey.privateKey}
    </KeyContainer>
  );

  if (!screenData.screenByKey.isActive) return (
    <KeyContainer>
      Dezaktywowany
    </KeyContainer>
  );

  return (
    <ShowView slides={slides} />
  )
};

export default Show;
