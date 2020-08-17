import React from 'react';
import WebFont from 'webfontloader';
import * as R from 'ramda';
import { useParams } from 'react-router';
import {
  useOnScreenKeyAddedSubscription,
  useScreenExtendedByKeyLazyQuery,
} from 'generated/graphql';
import { bootstrap, getFilteredOrderedSlides, useScreenKey } from './ShowUtils';
import { KeyContainer } from './ShowStyle';
import ShowView from './ShowView';

WebFont.load({
  google: {
    families: ['Roboto:900,700,600,500']
  },
});

const Show: React.FC = () => {
  const screenKey = useScreenKey();
  const [getScreen, { data: slidesData, error }] = useScreenExtendedByKeyLazyQuery({
    variables: { screenKey },
  });
  const { data: keyData } = useOnScreenKeyAddedSubscription({
    variables: { screenKey },
  });
  const slides = getFilteredOrderedSlides(slidesData);

  React.useEffect(() => {
    if (keyData) {
      getScreen();
    }
  }, [keyData]);

  React.useEffect(() => {
    bootstrap();
    getScreen();
  }, []);

  if (!slidesData || error) return (
    <KeyContainer>
      {screenKey.privateKey}
    </KeyContainer>
  );

  return (
    <ShowView slides={slides} />
  )
};

export default Show;
