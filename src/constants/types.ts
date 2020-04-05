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

export type PathType = RouteProps;
export type RedirectType = RedirectProps;

export enum Path {
  Home = '/',
  Auth = '/auth',
  Rules = '/rules',
  Panel = '/panel',
  PanelElement = '/panel/:element?',
  NotFound = '*',
}

export interface ApiType {
  token: string;
  uri: string;
}
