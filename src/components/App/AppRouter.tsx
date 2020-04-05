import React from 'react';
import * as R from 'ramda';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { PathType, RedirectType } from 'types';
import { Routes } from '../../constants';

const AppRouter: React.FC = () => {
  const { Paths, Redirects } = Routes;

  const toPathElement = (props: PathType) => (<Route {...props}/>);
  const toRedirectElement = (props: RedirectType) => (<Redirect {...props}/>);

  const pathElements = R.map(toPathElement, Paths);
  const redirectElements = R.map(toRedirectElement, Redirects);

  return (
    <BrowserRouter>
      <Switch>
        {pathElements}
        {redirectElements}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
