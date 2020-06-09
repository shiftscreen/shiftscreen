import React from 'react';
import * as R from 'ramda';

import { BasicSlidePartsFragment } from 'generated/graphql';
import { Container } from './StudioSlidesListStyle';
import ListElementView from './ListElement';

// MOCKUP

const slide: BasicSlidePartsFragment = {
  id: '1',
  createdAt: '',
  updatedAt: '',
  date: '',
  durationMilliseconds: 200,
  index: 0,
  isActive: true,
  time: '',
  transition: '',
  weekdays: '',
  appInstance: {
    id: '11',
    createdAt: '',
    updatedAt: '',
    appId: 'hello',
    appVersion: 'v1',
    config: '{"name":"lesie","color":"#FDB827","imageKey":{"key":"fdsfdsf","id":"fdsfdsafdsa"}}',
    title: 'Hello',
  }
};

const slide2: BasicSlidePartsFragment = {
  id: '2',
  createdAt: '',
  updatedAt: '',
  date: '',
  durationMilliseconds: 200,
  index: 0,
  isActive: true,
  time: '',
  transition: '',
  weekdays: '',
  appInstance: null,
};

const list = [slide, slide2];

const StudioSlidesList: React.FC = () => {

  const toListElement = (slide: BasicSlidePartsFragment) => (
    <ListElementView
      key={slide.id}
      slide={slide}
      selected={slide.id === '1'}
    />
  );
  const slidesList = R.map(toListElement, list);

  return (
    <Container>
      {slidesList}
    </Container>
  );
};

export default StudioSlidesList;
