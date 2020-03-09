import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import plPL from 'antd/es/locale/pl_PL';

import Home from 'screens/Home';
import Panel from 'screens/Panel';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faThLarge, faFolder } from '@fortawesome/free-solid-svg-icons';
library.add(faDesktop, faThLarge, faFolder);

const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path='/' render={() => <Home/>}/>
      <Route path='/panel' render={() => <Panel/>}/>
    </Switch>
  </Router>
);

const App: React.FC = () => (
  <ConfigProvider locale={plPL}>
    <AppRouter/>
  </ConfigProvider>
);

export default App;
