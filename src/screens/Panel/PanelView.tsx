import React from 'react';
import { ViewsConfig, View, ViewChange } from './PanelTypes';

import {
  Container,
  Inner,
  Content
} from './PanelStyle';

import { Sider } from 'components/Panel';
import { Header } from 'components/Panel';

interface Props {
  viewsConfig: ViewsConfig;
  onViewChange: ViewChange;
  selectedView: View;
}

const Panel: React.FC<Props> = (props: Props) => {
  const { viewsConfig, selectedView, onViewChange } = props;
  const PanelComponent = selectedView.component;

  return (
    <Container>
      <Sider viewsConfig={viewsConfig} onViewChange={onViewChange}/>
      <Inner>
        <Header title={selectedView.title} actions={selectedView.headerActions}/>
        <Content>
          <PanelComponent/>
        </Content>
      </Inner>
    </Container>
  );
};

export default Panel;
