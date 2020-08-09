import React from 'react';

import { LoadingIndicator } from 'shared';
import { PanelTypes } from 'types';
import { Sider } from 'components/Panel';
import { Header, ContentHeader } from 'components/Panel';

import {
  Container,
  Inner,
  Content
} from './PanelStyle';

interface Props {
  viewsConfig: PanelTypes.ViewsConfig;
  selectedView: PanelTypes.View;
}

const Panel: React.FC<Props> = (props: Props) => {
  const { viewsConfig, selectedView } = props;
  const PanelComponent = selectedView.component;

  return (
    <Container>
      <Sider viewsConfig={viewsConfig}/>
      <Inner>
        <Header/>
        <Content>
          <ContentHeader title={selectedView.title} actions={selectedView.headerActions}/>
          <PanelComponent fallback={<LoadingIndicator/>}/>
        </Content>
      </Inner>
    </Container>
  );
};

export default Panel;
