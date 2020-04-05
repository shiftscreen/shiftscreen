import React from 'react';

import {
  Container,
  Inner,
  Content
} from './PanelStyle';
import { ViewsConfig, View } from './PanelTypes';

import { Sider } from 'components/Panel';
import { Header, ContentHeader } from 'components/Panel';

interface Props {
  viewsConfig: ViewsConfig;
  selectedView: View;
}

const Panel: React.FC<Props> = (props: Props) => {
  const { viewsConfig, selectedView } = props;
  const PanelComponent = selectedView.component;

  return (
    <Container>
      <Sider viewsConfig={viewsConfig} />
      <Inner>
        <Header />
        <Content>
          <ContentHeader title={selectedView.title} actions={selectedView.headerActions} />
          <PanelComponent/>
        </Content>
      </Inner>
    </Container>
  );
};

export default Panel;
