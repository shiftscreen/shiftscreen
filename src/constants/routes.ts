import loadable from '@loadable/component';
import { Path, PathType, RedirectType } from './types';

const Home = loadable(() => import('screens/Home'));
const Auth = loadable(() => import('screens/Auth'));
const Rules = loadable(() => import('screens/Home'));
const Panel = loadable(() => import('screens/Panel'));
const Studio = loadable(() => import('screens/Studio'));
const Show = loadable(() => import('screens/Show'));
const NotFound = loadable(() => import('screens/NotFound'));

export const Paths: PathType[] = [
  {
    path: Path.Home,
    exact: true,
    component: Home,
  },
  {
    path: Path.Auth,
    exact: true,
    component: Auth,
  },
  {
    path: Path.Rules,
    exact: true,
    component: Rules,
  },
  {
    path: Path.PanelElement,
    exact: true,
    component: Panel,
    meta: {
      protected: true,
    }
  },
  {
    path: Path.Studio,
    exact: true,
    component: Studio,
    meta: {
      protected: true,
    }
  },
  {
    path: Path.Show,
    exact: true,
    component: Show,
  },
  {
    path: Path.NotFound,
    exact: true,
    component: NotFound,
  },
];

export const Redirects: RedirectType[] = [];

export {
  Path,
};
