import { RedirectProps, RouteProps } from 'react-router';

export interface ColorsType {
  whitePure: string;
  blackPure: string;
  black: string;
  grey: string;
  teal: string;
  magenta: string;
  violet: string;
}

export type RedirectType = RedirectProps;

export interface PathType extends RouteProps {
  meta?: PathMeta;
}

interface PathMeta {
  protected: boolean;
}

export enum Path {
  Home = '/',
  Auth = '/auth',
  Rules = '/rules',
  Panel = '/panel',
  PanelElement = '/panel/:element?/:id?',
  NotFound = '*',
}

export interface ApiType {
  token: string;
  uri: string;
}

export interface ScreenRatio {
  title: string;
  value: string;
}
