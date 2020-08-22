import React from 'react';
import * as R from 'ramda';
import WebFont from 'webfontloader';
import { useOnScreenKeyAddedSubscription, useScreenExtendedByKeyLazyQuery, } from 'generated/graphql';
import { bootstrap, getFilteredOrderedSlides, persistScreen, useScreenKey } from './ShowUtils';
import { KeyContainer } from './ShowStyle';
import ShowView from './ShowView';

WebFont.load({
  google: {
    families: ['Roboto:900,700,600,500']
  },
});

const Show: React.FC = () => {
  const screenKey = useScreenKey();
  const [getScreen, { data: screenData, error }] = useScreenExtendedByKeyLazyQuery({
    variables: { screenKey },
  });
  const { data: keyData } = useOnScreenKeyAddedSubscription({
    variables: { screenKey },
  });
  const slides = getFilteredOrderedSlides(screenData);

  React.useEffect(() => {
    const shouldGetScreenData = R.and(
      R.not(R.empty(keyData)),
      R.equals(keyData?.screenKeyAdded.privateKey, screenKey.privateKey),
    );

    if (shouldGetScreenData) {
      getScreen();
    }
  }, [keyData]);

  React.useEffect(() => {
    getScreen();
    bootstrap(screenKey);
  }, [screenKey]);

  React.useEffect(() => {
    if (screenData) {
      persistScreen(screenKey.publicKey, screenData);
    }
  }, [screenData]);

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
