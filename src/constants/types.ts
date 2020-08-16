import { RedirectProps, RouteProps } from 'react-router';
import { ScaledTypes } from 'types';

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
  Studio = '/studio/:id',
  Show = '/show/:id-:publicKey',
  PanelElement = '/panel/:element?/:id?',
  NotFound = '*',
}

export interface ApiType {
  token: string;
  uri: string;
  recaptchaKey: string;
  tokenExpiration: string;
}

export interface ScreenRatio {
  title: string;
  value: string;
}

export interface SlidesType {
  size: {
    base: ScaledTypes.SizeType
  }
}
