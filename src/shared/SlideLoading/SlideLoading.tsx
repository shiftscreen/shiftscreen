import React from 'react';
import { LoadingIndicator } from 'shared';
import { Container } from './SlideLoadingStyle';

const SlideLoading: React.FC = () => (
  <Container>
    <LoadingIndicator/>
  </Container>
);

export default SlideLoading;
