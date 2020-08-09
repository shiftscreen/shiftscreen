import React from 'react';
import * as R from 'ramda';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { PathType, RedirectType } from 'types';
import { Routes } from 'constants/index';

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

const AppRouter: React.FC = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  const { Paths, Redirects } = Routes;

  const toPathElement = ({ meta, component, ...props }: PathType) => {
    const notAuthorized = meta && meta.protected && !data.isLoggedIn;
    const redirectToAuth = () => (<Redirect to={Routes.Path.Auth}/>);
    const key = `${props.path}`;

    return (
      <Route
        {...props}
        key={key}
        component={notAuthorized ? redirectToAuth : component}
      />
    );
  };
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
