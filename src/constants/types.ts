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
  wsUri: string;
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

export enum ErrorCode {
  STORAGE_NOT_ENOUGH_SPACE ,
  SCREEN_ROLE_EXISTS,
  SCREEN_WRONG_KEY,
  ORGANIZATION_LAST_ADMIN_ROLE,
  ORGANIZATION_NOT_ADMIN,
  ORGANIZATION_NOT_AUTHORIZED,
  USER_EMAIL_NOT_VERIFIED,
  USER_EXISTS,
  USER_NOT_EXISTS,
  USER_WRONG_CREDENTIALS,
  USER_WRONG_DATA,
  FILE_NOT_EXISTS,
  FILE_NOT_OWNER,
  FILE_KEY_NOT_EXISTS,
  CAPTCHA_INVALID,
  TOKEN_INVALID,
  AUTH_COOKIE_NOT_EXISTS,
  ROLE_NOT_AUTHORIZED,
  SLIDE_WRONG_SCREEN,
  APP_INSTANCE_NOT_AUTHORIZED,
  NOT_FOUND,
  NOT_AUTHORIZED
}
