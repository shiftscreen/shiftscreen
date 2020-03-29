import React from 'react';
import { ConfigProvider } from 'antd';
import plPL from 'antd/es/locale/pl_PL';

const App: React.FC = () => (
  <ConfigProvider locale={plPL}>
    <AppRouter/>
  </ConfigProvider>
);

export default App;
