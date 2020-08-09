import React from 'react';
import { ConfigProvider } from 'antd';
import plPL from 'antd/es/locale/pl_PL';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from 'apollo';

import AppAuthLayer from './AppAuthLayer';
import AppRouter from './AppRouter';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ConfigProvider locale={plPL}>
      <AppAuthLayer>
        <AppRouter/>
      </AppAuthLayer>
    </ConfigProvider>
  </ApolloProvider>
);

export default App;
