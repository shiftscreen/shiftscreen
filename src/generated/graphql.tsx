import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** File upload scalar type */
  Upload: any;
};

export type AppInstance = {
  __typename?: 'AppInstance';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  appId: Scalars['String'];
  appVersion: Scalars['String'];
  config: Scalars['String'];
  user: User;
  slides?: Maybe<Array<Slide>>;
};

export type BaseEntity = {
  __typename?: 'BaseEntity';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};


export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  filename: Scalars['String'];
  mimeType: Scalars['String'];
  sizeKilobytes: Scalars['Int'];
  user: User;
  keys?: Maybe<Array<FileKey>>;
  link: FileLink;
};

export type FileKey = {
  __typename?: 'FileKey';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  key: Scalars['String'];
  file: File;
  user: User;
};

export type FileKeyInput = {
  id: Scalars['String'];
  key: Scalars['String'];
};

export type FileLink = {
  __typename?: 'FileLink';
  url: Scalars['String'];
  expiryTime: Scalars['Float'];
};


export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  recaptcha: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAppInstance: AppInstance;
  addFile?: Maybe<File>;
  addFileKey: FileKey;
  addOrganization: Organization;
  addRole: Role;
  addScreen: Screen;
  addScreenKey: ScreenKey;
  addSlide: Slide;
  addUser: User;
  deleteAppInstance: Scalars['Boolean'];
  deleteFile: Scalars['Boolean'];
  deleteFileKey: Scalars['Boolean'];
  deleteOrganization: Scalars['Boolean'];
  deleteRole: Scalars['Boolean'];
  deleteScreen: Scalars['Boolean'];
  deleteScreenKey: Scalars['Boolean'];
  deleteSlide: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  fileLink: FileLink;
  login: TokenResponse;
  notifyScreenUpdated: Scalars['Boolean'];
  refreshToken?: Maybe<TokenResponse>;
  revokeToken: Scalars['Boolean'];
  selectOrganization?: Maybe<Organization>;
  updateAppInstance: AppInstance;
  updateFile?: Maybe<File>;
  updateOrganization: Organization;
  updateRole: Role;
  updateScreen: Screen;
  updateSlide: Slide;
  updateUser: User;
};


export type MutationAddAppInstanceArgs = {
  newAppInstanceData: NewAppInstanceInput;
};


export type MutationAddFileArgs = {
  newFileData: NewFileInput;
};


export type MutationAddFileKeyArgs = {
  fileId: Scalars['Int'];
};


export type MutationAddOrganizationArgs = {
  newOrganizationData: NewOrganizationInput;
};


export type MutationAddRoleArgs = {
  newRoleData: NewRoleInput;
};


export type MutationAddScreenArgs = {
  newScreenData: NewScreenInput;
};


export type MutationAddScreenKeyArgs = {
  privateKey: Scalars['String'];
  screenId: Scalars['Int'];
};


export type MutationAddSlideArgs = {
  newSlideData: NewSlideInput;
};


export type MutationAddUserArgs = {
  newUserData: NewUserInput;
};


export type MutationDeleteAppInstanceArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteFileKeyArgs = {
  id: Scalars['String'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteScreenArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteScreenKeyArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteSlideArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  password: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationFileLinkArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  loginData: LoginInput;
};


export type MutationNotifyScreenUpdatedArgs = {
  id: Scalars['Int'];
};


export type MutationSelectOrganizationArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateAppInstanceArgs = {
  updateAppInstanceData: UpdateAppInstanceInput;
  id: Scalars['Int'];
};


export type MutationUpdateFileArgs = {
  updateFileData: UpdateFileInput;
  id: Scalars['Int'];
};


export type MutationUpdateOrganizationArgs = {
  updateOrganizationData: UpdateOrganizationInput;
  id: Scalars['Int'];
};


export type MutationUpdateRoleArgs = {
  updateRoleData: UpdateRoleInput;
  id: Scalars['Int'];
};


export type MutationUpdateScreenArgs = {
  updateScreenData: UpdateScreenInput;
  id: Scalars['Int'];
};


export type MutationUpdateSlideArgs = {
  updateSlideData: UpdateSlideInput;
  id: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  updateUserData: UpdateUserInput;
  id: Scalars['Int'];
};

export type NewAppInstanceInput = {
  title: Scalars['String'];
  appId: Scalars['String'];
  appVersion: Scalars['String'];
  config: Scalars['String'];
};

export type NewFileInput = {
  title: Scalars['String'];
  file: Scalars['Upload'];
};

export type NewOrganizationInput = {
  title: Scalars['String'];
};

export type NewRoleInput = {
  permissionType: PermissionType;
  userId: Scalars['Int'];
  organizationId: Scalars['Int'];
};

export type NewScreenInput = {
  title: Scalars['String'];
  color: Scalars['String'];
  ratio: Scalars['String'];
  organizationId: Scalars['Int'];
};

export type NewSlideInput = {
  durationSeconds: Scalars['Int'];
  transition?: Maybe<Scalars['JSON']>;
  time?: Maybe<Scalars['JSON']>;
  date?: Maybe<Scalars['JSON']>;
  weekdays: Scalars['JSON'];
  appInstanceId?: Maybe<Scalars['Int']>;
  screenId: Scalars['Int'];
};

export type NewUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  rulesAccepted: Scalars['Boolean'];
  picture?: Maybe<Scalars['Upload']>;
  recaptcha: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  viewerPermissionType: Scalars['String'];
  roles?: Maybe<Array<Role>>;
  screens?: Maybe<Array<Screen>>;
};

export enum PermissionType {
  Admin = 'Admin',
  Editor = 'Editor'
}

export enum PredefinedQuotesType {
  Motivational = 'Motivational',
  Business = 'Business'
}

export type Query = {
  __typename?: 'Query';
  appInstance: AppInstance;
  appInstancesByAppId: Array<AppInstance>;
  calendarTodayDayNames: Scalars['String'];
  calendarTodayHoliday: Scalars['String'];
  fileKey: FileKey;
  isLoggedIn: Scalars['Boolean'];
  organization: Organization;
  quotePredefinedQuotes: Array<Quote>;
  screen: Screen;
  screenByKey: Screen;
  selectedOrganization?: Maybe<Organization>;
  slide?: Maybe<Slide>;
  userByEmail: User;
  viewer: User;
};


export type QueryAppInstanceArgs = {
  id: Scalars['Int'];
};


export type QueryAppInstancesByAppIdArgs = {
  appId: Scalars['String'];
};


export type QueryFileKeyArgs = {
  fileKey: FileKeyInput;
};


export type QueryOrganizationArgs = {
  id: Scalars['Int'];
};


export type QueryQuotePredefinedQuotesArgs = {
  type: PredefinedQuotesType;
};


export type QueryScreenArgs = {
  id: Scalars['Int'];
};


export type QueryScreenByKeyArgs = {
  screenKey: ScreenKeyInput;
};


export type QuerySlideArgs = {
  id: Scalars['Int'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};

export type Quote = {
  __typename?: 'Quote';
  id: Scalars['String'];
  content: Scalars['String'];
  author: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  permissionType: PermissionType;
  user: User;
  organization: Organization;
};

export type Screen = {
  __typename?: 'Screen';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  isActive: Scalars['Boolean'];
  color: Scalars['String'];
  ratio: Scalars['String'];
  publicKey: Scalars['String'];
  slidesOrder?: Maybe<Scalars['JSON']>;
  organization: Organization;
  keys?: Maybe<Array<ScreenKey>>;
  slides?: Maybe<Array<Slide>>;
  viewerRole: Role;
};

export type ScreenKey = {
  __typename?: 'ScreenKey';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  privateKey?: Maybe<Scalars['String']>;
  screen: Screen;
  user: User;
};

export type ScreenKeyInput = {
  screenId: Scalars['Int'];
  publicKey: Scalars['String'];
  privateKey: Scalars['String'];
};

export type ScreenKeyInputSubscription = {
  __typename?: 'ScreenKeyInputSubscription';
  screenId: Scalars['Int'];
  publicKey: Scalars['String'];
  privateKey: Scalars['String'];
};

export type Slide = {
  __typename?: 'Slide';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  durationSeconds: Scalars['Int'];
  transition?: Maybe<Scalars['JSON']>;
  time?: Maybe<Scalars['JSON']>;
  date?: Maybe<Scalars['JSON']>;
  weekdays?: Maybe<Scalars['JSON']>;
  appInstance?: Maybe<AppInstance>;
};

export type SlideInput = {
  id?: Maybe<Scalars['Int']>;
  isActive: Scalars['Boolean'];
  durationSeconds: Scalars['Int'];
  transition?: Maybe<Scalars['JSON']>;
  time?: Maybe<Scalars['JSON']>;
  date?: Maybe<Scalars['JSON']>;
  weekdays: Scalars['JSON'];
  appInstanceId?: Maybe<Scalars['Int']>;
};

export type Storage = {
  __typename?: 'Storage';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  usedKilobytes: Scalars['Int'];
  maxKilobytes: Scalars['Int'];
  user: User;
};

export type Subscription = {
  __typename?: 'Subscription';
  screenKeyAdded: ScreenKeyInputSubscription;
  screenUpdated: Screen;
};


export type SubscriptionScreenKeyAddedArgs = {
  screenKey: ScreenKeyInput;
};


export type SubscriptionScreenUpdatedArgs = {
  screenKey: ScreenKeyInput;
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  tokenType: Scalars['String'];
  accessToken: Scalars['String'];
  expiresIn: Scalars['Int'];
};

export type UpdateAppInstanceInput = {
  title?: Maybe<Scalars['String']>;
  appVersion?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
};

export type UpdateFileInput = {
  title?: Maybe<Scalars['String']>;
};

export type UpdateOrganizationInput = {
  title: Scalars['String'];
};

export type UpdateRoleInput = {
  permissionType?: Maybe<PermissionType>;
};

export type UpdateScreenInput = {
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  ratio?: Maybe<Scalars['String']>;
  slidesOrder?: Maybe<Scalars['JSON']>;
  organizationId?: Maybe<Scalars['Int']>;
  slides?: Maybe<Array<SlideInput>>;
};

export type UpdateSlideInput = {
  isActive?: Maybe<Scalars['Boolean']>;
  durationSeconds?: Maybe<Scalars['Int']>;
  transition?: Maybe<Scalars['JSON']>;
  time?: Maybe<Scalars['JSON']>;
  date?: Maybe<Scalars['JSON']>;
  weekdays?: Maybe<Scalars['JSON']>;
  appInstanceId?: Maybe<Scalars['Int']>;
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  oldPassword?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  rulesAcceptedAt: Scalars['DateTime'];
  storage: Storage;
  roles?: Maybe<Array<Role>>;
  files?: Maybe<Array<File>>;
  appsInstances?: Maybe<Array<AppInstance>>;
};

export type AddUserMutationVariables = Exact<{
  values: NewUserInput;
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: (
    { __typename?: 'User' }
    & BasicUserPartsFragment
  ) }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
  password: Scalars['String'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export type LoginMutationVariables = Exact<{
  values: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'TokenResponse' }
    & Pick<TokenResponse, 'tokenType' | 'accessToken' | 'expiresIn'>
  ) }
);

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken?: Maybe<(
    { __typename?: 'TokenResponse' }
    & Pick<TokenResponse, 'accessToken' | 'tokenType' | 'expiresIn'>
  )> }
);

export type RevokeTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RevokeTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'revokeToken'>
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['Int'];
  values: UpdateUserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & BasicUserPartsFragment
  ) }
);

export type UserByEmailQueryQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserByEmailQueryQuery = (
  { __typename?: 'Query' }
  & { userByEmail: (
    { __typename?: 'User' }
    & BasicUserPartsFragment
  ) }
);

export type BasicUserPartsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'firstName' | 'lastName' | 'rulesAcceptedAt'>
);

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'firstName' | 'lastName' | 'rulesAcceptedAt'>
  ) }
);

export type AddFileKeyMutationVariables = Exact<{
  fileId: Scalars['Int'];
}>;


export type AddFileKeyMutation = (
  { __typename?: 'Mutation' }
  & { addFileKey: (
    { __typename?: 'FileKey' }
    & Pick<FileKey, 'id' | 'key'>
  ) }
);

export type AddFileMutationVariables = Exact<{
  values: NewFileInput;
}>;


export type AddFileMutation = (
  { __typename?: 'Mutation' }
  & { addFile?: Maybe<(
    { __typename?: 'File' }
    & BasicFilePartsFragment
  )> }
);

export type DeleteFileMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteFileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteFile'>
);

export type FileByKeyQueryVariables = Exact<{
  fileKey: FileKeyInput;
}>;


export type FileByKeyQuery = (
  { __typename?: 'Query' }
  & { fileKey: (
    { __typename?: 'FileKey' }
    & Pick<FileKey, 'id'>
    & { file: (
      { __typename?: 'File' }
      & BasicFilePartsFragment
    ) }
  ) }
);

export type FileLinkByKeyQueryVariables = Exact<{
  fileKey: FileKeyInput;
}>;


export type FileLinkByKeyQuery = (
  { __typename?: 'Query' }
  & { fileKey: (
    { __typename?: 'FileKey' }
    & Pick<FileKey, 'id'>
    & { file: (
      { __typename?: 'File' }
      & Pick<File, 'id'>
      & { link: (
        { __typename?: 'FileLink' }
        & Pick<FileLink, 'url' | 'expiryTime'>
      ) }
    ) }
  ) }
);

export type FileLinkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FileLinkMutation = (
  { __typename?: 'Mutation' }
  & { fileLink: (
    { __typename?: 'FileLink' }
    & Pick<FileLink, 'url' | 'expiryTime'>
  ) }
);

export type BasicFilePartsFragment = (
  { __typename?: 'File' }
  & Pick<File, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'filename' | 'mimeType' | 'sizeKilobytes'>
);

export type UpdateFileMutationVariables = Exact<{
  id: Scalars['Int'];
  values: UpdateFileInput;
}>;


export type UpdateFileMutation = (
  { __typename?: 'Mutation' }
  & { updateFile?: Maybe<(
    { __typename?: 'File' }
    & BasicFilePartsFragment
  )> }
);

export type ViewerFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerFilesQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { files?: Maybe<Array<(
      { __typename?: 'File' }
      & BasicFilePartsFragment
    )>> }
  ) }
);

export type ViewerStorageQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerStorageQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { storage: (
      { __typename?: 'Storage' }
      & Pick<Storage, 'id' | 'maxKilobytes' | 'usedKilobytes'>
    ) }
  ) }
);

export type AddAppInstanceMutationVariables = Exact<{
  values: NewAppInstanceInput;
}>;


export type AddAppInstanceMutation = (
  { __typename?: 'Mutation' }
  & { addAppInstance: (
    { __typename?: 'AppInstance' }
    & BasicAppInstancePartsFragment
  ) }
);

export type BasicAppInstancePartsFragment = (
  { __typename?: 'AppInstance' }
  & Pick<AppInstance, 'id' | 'createdAt' | 'updatedAt' | 'appId' | 'appVersion' | 'config' | 'title'>
);

export type AppInstancesByAppIdQueryVariables = Exact<{
  appId: Scalars['String'];
}>;


export type AppInstancesByAppIdQuery = (
  { __typename?: 'Query' }
  & { appInstancesByAppId: Array<(
    { __typename?: 'AppInstance' }
    & BasicAppInstancePartsFragment
  )> }
);

export type DeleteAppInstanceMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteAppInstanceMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAppInstance'>
);

export type UpdateAppInstanceMutationVariables = Exact<{
  id: Scalars['Int'];
  values: UpdateAppInstanceInput;
}>;


export type UpdateAppInstanceMutation = (
  { __typename?: 'Mutation' }
  & { updateAppInstance: (
    { __typename?: 'AppInstance' }
    & BasicAppInstancePartsFragment
  ) }
);

export type ViewerAppInstancesQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerAppInstancesQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { appsInstances?: Maybe<Array<(
      { __typename?: 'AppInstance' }
      & BasicAppInstancePartsFragment
    )>> }
  ) }
);

export type AddOrganizationMutationVariables = Exact<{
  values: NewOrganizationInput;
}>;


export type AddOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { addOrganization: (
    { __typename?: 'Organization' }
    & BasicOrganizationPartsFragment
  ) }
);

export type DeleteOrganizationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteOrganizationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteOrganization'>
);

export type OrganizationByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type OrganizationByIdQuery = (
  { __typename?: 'Query' }
  & { organization: (
    { __typename?: 'Organization' }
    & BasicOrganizationPartsFragment
  ) }
);

export type BasicOrganizationPartsFragment = (
  { __typename?: 'Organization' }
  & Pick<Organization, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'viewerPermissionType'>
);

export type SelectOrganizationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SelectOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { selectOrganization?: Maybe<(
    { __typename?: 'Organization' }
    & BasicOrganizationPartsFragment
  )> }
);

export type SelectedOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectedOrganizationQuery = (
  { __typename?: 'Query' }
  & { selectedOrganization?: Maybe<(
    { __typename?: 'Organization' }
    & BasicOrganizationPartsFragment
  )> }
);

export type UpdateOrganizationMutationVariables = Exact<{
  id: Scalars['Int'];
  values: UpdateOrganizationInput;
}>;


export type UpdateOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { updateOrganization: (
    { __typename?: 'Organization' }
    & BasicOrganizationPartsFragment
  ) }
);

export type AddRoleMutationVariables = Exact<{
  values: NewRoleInput;
}>;


export type AddRoleMutation = (
  { __typename?: 'Mutation' }
  & { addRole: (
    { __typename?: 'Role' }
    & { user: (
      { __typename?: 'User' }
      & BasicUserPartsFragment
    ) }
    & BasicRolePartsFragment
  ) }
);

export type DeleteRoleMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteRoleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteRole'>
);

export type OrganizationRolesQueryVariables = Exact<{
  organizationId: Scalars['Int'];
}>;


export type OrganizationRolesQuery = (
  { __typename?: 'Query' }
  & { organization: (
    { __typename?: 'Organization' }
    & { roles?: Maybe<Array<(
      { __typename?: 'Role' }
      & { user: (
        { __typename?: 'User' }
        & BasicUserPartsFragment
      ) }
      & BasicRolePartsFragment
    )>> }
    & BasicOrganizationPartsFragment
  ) }
);

export type BasicRolePartsFragment = (
  { __typename?: 'Role' }
  & Pick<Role, 'id' | 'createdAt' | 'updatedAt' | 'permissionType'>
);

export type UpdateRoleMutationVariables = Exact<{
  id: Scalars['Int'];
  values: UpdateRoleInput;
}>;


export type UpdateRoleMutation = (
  { __typename?: 'Mutation' }
  & { updateRole: (
    { __typename?: 'Role' }
    & BasicRolePartsFragment
  ) }
);

export type ViewerRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerRolesQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { roles?: Maybe<Array<(
      { __typename?: 'Role' }
      & { organization: (
        { __typename?: 'Organization' }
        & BasicOrganizationPartsFragment
      ) }
      & BasicRolePartsFragment
    )>> }
  ) }
);

export type AddScreenKeyMutationVariables = Exact<{
  screenId: Scalars['Int'];
  privateKey: Scalars['String'];
}>;


export type AddScreenKeyMutation = (
  { __typename?: 'Mutation' }
  & { addScreenKey: (
    { __typename?: 'ScreenKey' }
    & Pick<ScreenKey, 'id' | 'privateKey'>
  ) }
);

export type AddScreenMutationVariables = Exact<{
  values: NewScreenInput;
}>;


export type AddScreenMutation = (
  { __typename?: 'Mutation' }
  & { addScreen: (
    { __typename?: 'Screen' }
    & { viewerRole: (
      { __typename?: 'Role' }
      & BasicRolePartsFragment
    ) }
    & BasicScreenPartsFragment
  ) }
);

export type DeleteScreenMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteScreenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteScreen'>
);

export type NotifyScreenUpdatedMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type NotifyScreenUpdatedMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'notifyScreenUpdated'>
);

export type OrganizationScreensQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type OrganizationScreensQuery = (
  { __typename?: 'Query' }
  & { organization: (
    { __typename?: 'Organization' }
    & Pick<Organization, 'id'>
    & { screens?: Maybe<Array<(
      { __typename?: 'Screen' }
      & { viewerRole: (
        { __typename?: 'Role' }
        & BasicRolePartsFragment
      ) }
      & BasicScreenPartsFragment
    )>> }
  ) }
);

export type ScreenByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ScreenByIdQuery = (
  { __typename?: 'Query' }
  & { screen: (
    { __typename?: 'Screen' }
    & BasicScreenPartsFragment
  ) }
);

export type ScreenExtendedByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ScreenExtendedByIdQuery = (
  { __typename?: 'Query' }
  & { screen: (
    { __typename?: 'Screen' }
    & ExtendedScreenPartsFragment
  ) }
);

export type ScreenExtendedByKeyQueryVariables = Exact<{
  screenKey: ScreenKeyInput;
}>;


export type ScreenExtendedByKeyQuery = (
  { __typename?: 'Query' }
  & { screenByKey: (
    { __typename?: 'Screen' }
    & { slides?: Maybe<Array<(
      { __typename?: 'Slide' }
      & BasicSlidePartsFragment
    )>> }
    & BasicScreenPartsFragment
  ) }
);

export type ExtendedScreenPartsFragment = (
  { __typename?: 'Screen' }
  & { viewerRole: (
    { __typename?: 'Role' }
    & BasicRolePartsFragment
  ), slides?: Maybe<Array<(
    { __typename?: 'Slide' }
    & BasicSlidePartsFragment
  )>>, organization: (
    { __typename?: 'Organization' }
    & BasicOrganizationPartsFragment
  ) }
  & BasicScreenPartsFragment
);

export type OnScreenKeyAddedSubscriptionVariables = Exact<{
  screenKey: ScreenKeyInput;
}>;


export type OnScreenKeyAddedSubscription = (
  { __typename?: 'Subscription' }
  & { screenKeyAdded: (
    { __typename?: 'ScreenKeyInputSubscription' }
    & Pick<ScreenKeyInputSubscription, 'privateKey'>
  ) }
);

export type BasicScreenPartsFragment = (
  { __typename?: 'Screen' }
  & Pick<Screen, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'isActive' | 'color' | 'ratio' | 'slidesOrder' | 'publicKey'>
);

export type OnScreenUpdatedSubscriptionVariables = Exact<{
  screenKey: ScreenKeyInput;
}>;


export type OnScreenUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { screenUpdated: (
    { __typename?: 'Screen' }
    & { slides?: Maybe<Array<(
      { __typename?: 'Slide' }
      & BasicSlidePartsFragment
    )>> }
    & BasicScreenPartsFragment
  ) }
);

export type UpdateScreenMutationVariables = Exact<{
  id: Scalars['Int'];
  values: UpdateScreenInput;
}>;


export type UpdateScreenMutation = (
  { __typename?: 'Mutation' }
  & { updateScreen: (
    { __typename?: 'Screen' }
    & BasicScreenPartsFragment
  ) }
);

export type AddSlideMutationVariables = Exact<{
  values: NewSlideInput;
}>;


export type AddSlideMutation = (
  { __typename?: 'Mutation' }
  & { addSlide: (
    { __typename?: 'Slide' }
    & BasicSlidePartsFragment
  ) }
);

export type DeleteSlideMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSlideMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteSlide'>
);

export type SlideByIdLocalQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SlideByIdLocalQuery = (
  { __typename?: 'Query' }
  & { slide?: Maybe<(
    { __typename?: 'Slide' }
    & BasicSlidePartsFragment
  )> }
);

export type BasicSlidePartsFragment = (
  { __typename?: 'Slide' }
  & Pick<Slide, 'id' | 'createdAt' | 'updatedAt' | 'date' | 'durationSeconds' | 'isActive' | 'time' | 'transition' | 'weekdays'>
  & { appInstance?: Maybe<(
    { __typename?: 'AppInstance' }
    & BasicAppInstancePartsFragment
  )> }
);

export type UpdateSlideMutationVariables = Exact<{
  id: Scalars['Int'];
  values: UpdateSlideInput;
}>;


export type UpdateSlideMutation = (
  { __typename?: 'Mutation' }
  & { updateSlide: (
    { __typename?: 'Slide' }
    & BasicSlidePartsFragment
  ) }
);

export type CalendarUtilsStableQueryVariables = Exact<{ [key: string]: never; }>;


export type CalendarUtilsStableQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'calendarTodayDayNames' | 'calendarTodayHoliday'>
);

export type QuotePredefinedQuotesQueryVariables = Exact<{
  type: PredefinedQuotesType;
}>;


export type QuotePredefinedQuotesQuery = (
  { __typename?: 'Query' }
  & { quotePredefinedQuotes: Array<(
    { __typename?: 'Quote' }
    & Pick<Quote, 'id' | 'content' | 'author'>
  )> }
);

export const BasicUserPartsFragmentDoc = gql`
    fragment BasicUserParts on User {
  id
  createdAt
  updatedAt
  email
  firstName
  lastName
  rulesAcceptedAt
}
    `;
export const BasicFilePartsFragmentDoc = gql`
    fragment BasicFileParts on File {
  id
  createdAt
  updatedAt
  title
  filename
  mimeType
  sizeKilobytes
}
    `;
export const BasicScreenPartsFragmentDoc = gql`
    fragment BasicScreenParts on Screen {
  id
  createdAt
  updatedAt
  title
  isActive
  color
  ratio
  slidesOrder
  publicKey
}
    `;
export const BasicRolePartsFragmentDoc = gql`
    fragment BasicRoleParts on Role {
  id
  createdAt
  updatedAt
  permissionType
}
    `;
export const BasicAppInstancePartsFragmentDoc = gql`
    fragment BasicAppInstanceParts on AppInstance {
  id
  createdAt
  updatedAt
  appId
  appVersion
  config
  title
}
    `;
export const BasicSlidePartsFragmentDoc = gql`
    fragment BasicSlideParts on Slide {
  id
  createdAt
  updatedAt
  date
  durationSeconds
  isActive
  time
  transition
  weekdays
  appInstance {
    ...BasicAppInstanceParts
  }
}
    ${BasicAppInstancePartsFragmentDoc}`;
export const BasicOrganizationPartsFragmentDoc = gql`
    fragment BasicOrganizationParts on Organization {
  id
  createdAt
  updatedAt
  title
  viewerPermissionType
}
    `;
export const ExtendedScreenPartsFragmentDoc = gql`
    fragment ExtendedScreenParts on Screen {
  ...BasicScreenParts
  viewerRole {
    ...BasicRoleParts
  }
  slides {
    ...BasicSlideParts
  }
  organization {
    ...BasicOrganizationParts
  }
}
    ${BasicScreenPartsFragmentDoc}
${BasicRolePartsFragmentDoc}
${BasicSlidePartsFragmentDoc}
${BasicOrganizationPartsFragmentDoc}`;
export const AddUserDocument = gql`
    mutation AddUser($values: NewUserInput!) {
  addUser(newUserData: $values) {
    ...BasicUserParts
  }
}
    ${BasicUserPartsFragmentDoc}`;
export type AddUserMutationFn = ApolloReactCommon.MutationFunction<AddUserMutation, AddUserMutationVariables>;
export type AddUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddUserMutation, AddUserMutationVariables>, 'mutation'>;

    export const AddUserComponent = (props: AddUserComponentProps) => (
      <ApolloReactComponents.Mutation<AddUserMutation, AddUserMutationVariables> mutation={AddUserDocument} {...props} />
    );
    

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        return ApolloReactHooks.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, baseOptions);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = ApolloReactCommon.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = ApolloReactCommon.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: Int!, $password: String!) {
  deleteUser(id: $id, password: $password)
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export type DeleteUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteUserMutation, DeleteUserMutationVariables>, 'mutation'>;

    export const DeleteUserComponent = (props: DeleteUserComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteUserMutation, DeleteUserMutationVariables> mutation={DeleteUserDocument} {...props} />
    );
    

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($values: LoginInput!) {
  login(loginData: $values) {
    tokenType
    accessToken
    expiresIn
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken {
    accessToken
    tokenType
    expiresIn
  }
}
    `;
export type RefreshTokenMutationFn = ApolloReactCommon.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;
export type RefreshTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RefreshTokenMutation, RefreshTokenMutationVariables>, 'mutation'>;

    export const RefreshTokenComponent = (props: RefreshTokenComponentProps) => (
      <ApolloReactComponents.Mutation<RefreshTokenMutation, RefreshTokenMutationVariables> mutation={RefreshTokenDocument} {...props} />
    );
    

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, baseOptions);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = ApolloReactCommon.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RevokeTokenDocument = gql`
    mutation RevokeToken {
  revokeToken
}
    `;
export type RevokeTokenMutationFn = ApolloReactCommon.MutationFunction<RevokeTokenMutation, RevokeTokenMutationVariables>;
export type RevokeTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RevokeTokenMutation, RevokeTokenMutationVariables>, 'mutation'>;

    export const RevokeTokenComponent = (props: RevokeTokenComponentProps) => (
      <ApolloReactComponents.Mutation<RevokeTokenMutation, RevokeTokenMutationVariables> mutation={RevokeTokenDocument} {...props} />
    );
    

/**
 * __useRevokeTokenMutation__
 *
 * To run a mutation, you first call `useRevokeTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeTokenMutation, { data, loading, error }] = useRevokeTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRevokeTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RevokeTokenMutation, RevokeTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<RevokeTokenMutation, RevokeTokenMutationVariables>(RevokeTokenDocument, baseOptions);
      }
export type RevokeTokenMutationHookResult = ReturnType<typeof useRevokeTokenMutation>;
export type RevokeTokenMutationResult = ApolloReactCommon.MutationResult<RevokeTokenMutation>;
export type RevokeTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<RevokeTokenMutation, RevokeTokenMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: Int!, $values: UpdateUserInput!) {
  updateUser(id: $id, updateUserData: $values) {
    ...BasicUserParts
  }
}
    ${BasicUserPartsFragmentDoc}`;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserMutation, UpdateUserMutationVariables>, 'mutation'>;

    export const UpdateUserComponent = (props: UpdateUserComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserMutation, UpdateUserMutationVariables> mutation={UpdateUserDocument} {...props} />
    );
    

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserByEmailQueryDocument = gql`
    query UserByEmailQuery($email: String!) {
  userByEmail(email: $email) {
    ...BasicUserParts
  }
}
    ${BasicUserPartsFragmentDoc}`;
export type UserByEmailQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserByEmailQueryQuery, UserByEmailQueryQueryVariables>, 'query'> & ({ variables: UserByEmailQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserByEmailQueryComponent = (props: UserByEmailQueryComponentProps) => (
      <ApolloReactComponents.Query<UserByEmailQueryQuery, UserByEmailQueryQueryVariables> query={UserByEmailQueryDocument} {...props} />
    );
    

/**
 * __useUserByEmailQueryQuery__
 *
 * To run a query within a React component, call `useUserByEmailQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByEmailQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByEmailQueryQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUserByEmailQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserByEmailQueryQuery, UserByEmailQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<UserByEmailQueryQuery, UserByEmailQueryQueryVariables>(UserByEmailQueryDocument, baseOptions);
      }
export function useUserByEmailQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserByEmailQueryQuery, UserByEmailQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserByEmailQueryQuery, UserByEmailQueryQueryVariables>(UserByEmailQueryDocument, baseOptions);
        }
export type UserByEmailQueryQueryHookResult = ReturnType<typeof useUserByEmailQueryQuery>;
export type UserByEmailQueryLazyQueryHookResult = ReturnType<typeof useUserByEmailQueryLazyQuery>;
export type UserByEmailQueryQueryResult = ApolloReactCommon.QueryResult<UserByEmailQueryQuery, UserByEmailQueryQueryVariables>;
export const ViewerDocument = gql`
    query Viewer {
  viewer {
    id
    createdAt
    updatedAt
    email
    firstName
    lastName
    rulesAcceptedAt
  }
}
    `;
export type ViewerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ViewerQuery, ViewerQueryVariables>, 'query'>;

    export const ViewerComponent = (props: ViewerComponentProps) => (
      <ApolloReactComponents.Query<ViewerQuery, ViewerQueryVariables> query={ViewerDocument} {...props} />
    );
    

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, baseOptions);
      }
export function useViewerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, baseOptions);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = ApolloReactCommon.QueryResult<ViewerQuery, ViewerQueryVariables>;
export const AddFileKeyDocument = gql`
    mutation AddFileKey($fileId: Int!) {
  addFileKey(fileId: $fileId) {
    id
    key
  }
}
    `;
export type AddFileKeyMutationFn = ApolloReactCommon.MutationFunction<AddFileKeyMutation, AddFileKeyMutationVariables>;
export type AddFileKeyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddFileKeyMutation, AddFileKeyMutationVariables>, 'mutation'>;

    export const AddFileKeyComponent = (props: AddFileKeyComponentProps) => (
      <ApolloReactComponents.Mutation<AddFileKeyMutation, AddFileKeyMutationVariables> mutation={AddFileKeyDocument} {...props} />
    );
    

/**
 * __useAddFileKeyMutation__
 *
 * To run a mutation, you first call `useAddFileKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFileKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFileKeyMutation, { data, loading, error }] = useAddFileKeyMutation({
 *   variables: {
 *      fileId: // value for 'fileId'
 *   },
 * });
 */
export function useAddFileKeyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFileKeyMutation, AddFileKeyMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFileKeyMutation, AddFileKeyMutationVariables>(AddFileKeyDocument, baseOptions);
      }
export type AddFileKeyMutationHookResult = ReturnType<typeof useAddFileKeyMutation>;
export type AddFileKeyMutationResult = ApolloReactCommon.MutationResult<AddFileKeyMutation>;
export type AddFileKeyMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFileKeyMutation, AddFileKeyMutationVariables>;
export const AddFileDocument = gql`
    mutation AddFile($values: NewFileInput!) {
  addFile(newFileData: $values) {
    ...BasicFileParts
  }
}
    ${BasicFilePartsFragmentDoc}`;
export type AddFileMutationFn = ApolloReactCommon.MutationFunction<AddFileMutation, AddFileMutationVariables>;
export type AddFileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddFileMutation, AddFileMutationVariables>, 'mutation'>;

    export const AddFileComponent = (props: AddFileComponentProps) => (
      <ApolloReactComponents.Mutation<AddFileMutation, AddFileMutationVariables> mutation={AddFileDocument} {...props} />
    );
    

/**
 * __useAddFileMutation__
 *
 * To run a mutation, you first call `useAddFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFileMutation, { data, loading, error }] = useAddFileMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useAddFileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFileMutation, AddFileMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFileMutation, AddFileMutationVariables>(AddFileDocument, baseOptions);
      }
export type AddFileMutationHookResult = ReturnType<typeof useAddFileMutation>;
export type AddFileMutationResult = ApolloReactCommon.MutationResult<AddFileMutation>;
export type AddFileMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFileMutation, AddFileMutationVariables>;
export const DeleteFileDocument = gql`
    mutation DeleteFile($id: Int!) {
  deleteFile(id: $id)
}
    `;
export type DeleteFileMutationFn = ApolloReactCommon.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;
export type DeleteFileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteFileMutation, DeleteFileMutationVariables>, 'mutation'>;

    export const DeleteFileComponent = (props: DeleteFileComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteFileMutation, DeleteFileMutationVariables> mutation={DeleteFileDocument} {...props} />
    );
    

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, baseOptions);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = ApolloReactCommon.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const FileByKeyDocument = gql`
    query FileByKey($fileKey: FileKeyInput!) {
  fileKey(fileKey: $fileKey) {
    id
    file {
      ...BasicFileParts
    }
  }
}
    ${BasicFilePartsFragmentDoc}`;
export type FileByKeyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FileByKeyQuery, FileByKeyQueryVariables>, 'query'> & ({ variables: FileByKeyQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FileByKeyComponent = (props: FileByKeyComponentProps) => (
      <ApolloReactComponents.Query<FileByKeyQuery, FileByKeyQueryVariables> query={FileByKeyDocument} {...props} />
    );
    

/**
 * __useFileByKeyQuery__
 *
 * To run a query within a React component, call `useFileByKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileByKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileByKeyQuery({
 *   variables: {
 *      fileKey: // value for 'fileKey'
 *   },
 * });
 */
export function useFileByKeyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FileByKeyQuery, FileByKeyQueryVariables>) {
        return ApolloReactHooks.useQuery<FileByKeyQuery, FileByKeyQueryVariables>(FileByKeyDocument, baseOptions);
      }
export function useFileByKeyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FileByKeyQuery, FileByKeyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FileByKeyQuery, FileByKeyQueryVariables>(FileByKeyDocument, baseOptions);
        }
export type FileByKeyQueryHookResult = ReturnType<typeof useFileByKeyQuery>;
export type FileByKeyLazyQueryHookResult = ReturnType<typeof useFileByKeyLazyQuery>;
export type FileByKeyQueryResult = ApolloReactCommon.QueryResult<FileByKeyQuery, FileByKeyQueryVariables>;
export const FileLinkByKeyDocument = gql`
    query FileLinkByKey($fileKey: FileKeyInput!) {
  fileKey(fileKey: $fileKey) {
    id
    file {
      id
      link {
        url
        expiryTime
      }
    }
  }
}
    `;
export type FileLinkByKeyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<FileLinkByKeyQuery, FileLinkByKeyQueryVariables>, 'query'> & ({ variables: FileLinkByKeyQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FileLinkByKeyComponent = (props: FileLinkByKeyComponentProps) => (
      <ApolloReactComponents.Query<FileLinkByKeyQuery, FileLinkByKeyQueryVariables> query={FileLinkByKeyDocument} {...props} />
    );
    

/**
 * __useFileLinkByKeyQuery__
 *
 * To run a query within a React component, call `useFileLinkByKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileLinkByKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileLinkByKeyQuery({
 *   variables: {
 *      fileKey: // value for 'fileKey'
 *   },
 * });
 */
export function useFileLinkByKeyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FileLinkByKeyQuery, FileLinkByKeyQueryVariables>) {
        return ApolloReactHooks.useQuery<FileLinkByKeyQuery, FileLinkByKeyQueryVariables>(FileLinkByKeyDocument, baseOptions);
      }
export function useFileLinkByKeyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FileLinkByKeyQuery, FileLinkByKeyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FileLinkByKeyQuery, FileLinkByKeyQueryVariables>(FileLinkByKeyDocument, baseOptions);
        }
export type FileLinkByKeyQueryHookResult = ReturnType<typeof useFileLinkByKeyQuery>;
export type FileLinkByKeyLazyQueryHookResult = ReturnType<typeof useFileLinkByKeyLazyQuery>;
export type FileLinkByKeyQueryResult = ApolloReactCommon.QueryResult<FileLinkByKeyQuery, FileLinkByKeyQueryVariables>;
export const FileLinkDocument = gql`
    mutation FileLink($id: Int!) {
  fileLink(id: $id) {
    url
    expiryTime
  }
}
    `;
export type FileLinkMutationFn = ApolloReactCommon.MutationFunction<FileLinkMutation, FileLinkMutationVariables>;
export type FileLinkComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<FileLinkMutation, FileLinkMutationVariables>, 'mutation'>;

    export const FileLinkComponent = (props: FileLinkComponentProps) => (
      <ApolloReactComponents.Mutation<FileLinkMutation, FileLinkMutationVariables> mutation={FileLinkDocument} {...props} />
    );
    

/**
 * __useFileLinkMutation__
 *
 * To run a mutation, you first call `useFileLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFileLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fileLinkMutation, { data, loading, error }] = useFileLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFileLinkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FileLinkMutation, FileLinkMutationVariables>) {
        return ApolloReactHooks.useMutation<FileLinkMutation, FileLinkMutationVariables>(FileLinkDocument, baseOptions);
      }
export type FileLinkMutationHookResult = ReturnType<typeof useFileLinkMutation>;
export type FileLinkMutationResult = ApolloReactCommon.MutationResult<FileLinkMutation>;
export type FileLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<FileLinkMutation, FileLinkMutationVariables>;
export const UpdateFileDocument = gql`
    mutation UpdateFile($id: Int!, $values: UpdateFileInput!) {
  updateFile(id: $id, updateFileData: $values) {
    ...BasicFileParts
  }
}
    ${BasicFilePartsFragmentDoc}`;
export type UpdateFileMutationFn = ApolloReactCommon.MutationFunction<UpdateFileMutation, UpdateFileMutationVariables>;
export type UpdateFileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateFileMutation, UpdateFileMutationVariables>, 'mutation'>;

    export const UpdateFileComponent = (props: UpdateFileComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateFileMutation, UpdateFileMutationVariables> mutation={UpdateFileDocument} {...props} />
    );
    

/**
 * __useUpdateFileMutation__
 *
 * To run a mutation, you first call `useUpdateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFileMutation, { data, loading, error }] = useUpdateFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateFileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFileMutation, UpdateFileMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateFileMutation, UpdateFileMutationVariables>(UpdateFileDocument, baseOptions);
      }
export type UpdateFileMutationHookResult = ReturnType<typeof useUpdateFileMutation>;
export type UpdateFileMutationResult = ApolloReactCommon.MutationResult<UpdateFileMutation>;
export type UpdateFileMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateFileMutation, UpdateFileMutationVariables>;
export const ViewerFilesDocument = gql`
    query ViewerFiles {
  viewer {
    id
    files {
      ...BasicFileParts
    }
  }
}
    ${BasicFilePartsFragmentDoc}`;
export type ViewerFilesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ViewerFilesQuery, ViewerFilesQueryVariables>, 'query'>;

    export const ViewerFilesComponent = (props: ViewerFilesComponentProps) => (
      <ApolloReactComponents.Query<ViewerFilesQuery, ViewerFilesQueryVariables> query={ViewerFilesDocument} {...props} />
    );
    

/**
 * __useViewerFilesQuery__
 *
 * To run a query within a React component, call `useViewerFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerFilesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerFilesQuery, ViewerFilesQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewerFilesQuery, ViewerFilesQueryVariables>(ViewerFilesDocument, baseOptions);
      }
export function useViewerFilesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerFilesQuery, ViewerFilesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewerFilesQuery, ViewerFilesQueryVariables>(ViewerFilesDocument, baseOptions);
        }
export type ViewerFilesQueryHookResult = ReturnType<typeof useViewerFilesQuery>;
export type ViewerFilesLazyQueryHookResult = ReturnType<typeof useViewerFilesLazyQuery>;
export type ViewerFilesQueryResult = ApolloReactCommon.QueryResult<ViewerFilesQuery, ViewerFilesQueryVariables>;
export const ViewerStorageDocument = gql`
    query ViewerStorage {
  viewer {
    id
    storage {
      id
      maxKilobytes
      usedKilobytes
    }
  }
}
    `;
export type ViewerStorageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ViewerStorageQuery, ViewerStorageQueryVariables>, 'query'>;

    export const ViewerStorageComponent = (props: ViewerStorageComponentProps) => (
      <ApolloReactComponents.Query<ViewerStorageQuery, ViewerStorageQueryVariables> query={ViewerStorageDocument} {...props} />
    );
    

/**
 * __useViewerStorageQuery__
 *
 * To run a query within a React component, call `useViewerStorageQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerStorageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerStorageQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerStorageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerStorageQuery, ViewerStorageQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewerStorageQuery, ViewerStorageQueryVariables>(ViewerStorageDocument, baseOptions);
      }
export function useViewerStorageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerStorageQuery, ViewerStorageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewerStorageQuery, ViewerStorageQueryVariables>(ViewerStorageDocument, baseOptions);
        }
export type ViewerStorageQueryHookResult = ReturnType<typeof useViewerStorageQuery>;
export type ViewerStorageLazyQueryHookResult = ReturnType<typeof useViewerStorageLazyQuery>;
export type ViewerStorageQueryResult = ApolloReactCommon.QueryResult<ViewerStorageQuery, ViewerStorageQueryVariables>;
export const AddAppInstanceDocument = gql`
    mutation AddAppInstance($values: NewAppInstanceInput!) {
  addAppInstance(newAppInstanceData: $values) {
    ...BasicAppInstanceParts
  }
}
    ${BasicAppInstancePartsFragmentDoc}`;
export type AddAppInstanceMutationFn = ApolloReactCommon.MutationFunction<AddAppInstanceMutation, AddAppInstanceMutationVariables>;
export type AddAppInstanceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddAppInstanceMutation, AddAppInstanceMutationVariables>, 'mutation'>;

    export const AddAppInstanceComponent = (props: AddAppInstanceComponentProps) => (
      <ApolloReactComponents.Mutation<AddAppInstanceMutation, AddAppInstanceMutationVariables> mutation={AddAppInstanceDocument} {...props} />
    );
    

/**
 * __useAddAppInstanceMutation__
 *
 * To run a mutation, you first call `useAddAppInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAppInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAppInstanceMutation, { data, loading, error }] = useAddAppInstanceMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useAddAppInstanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddAppInstanceMutation, AddAppInstanceMutationVariables>) {
        return ApolloReactHooks.useMutation<AddAppInstanceMutation, AddAppInstanceMutationVariables>(AddAppInstanceDocument, baseOptions);
      }
export type AddAppInstanceMutationHookResult = ReturnType<typeof useAddAppInstanceMutation>;
export type AddAppInstanceMutationResult = ApolloReactCommon.MutationResult<AddAppInstanceMutation>;
export type AddAppInstanceMutationOptions = ApolloReactCommon.BaseMutationOptions<AddAppInstanceMutation, AddAppInstanceMutationVariables>;
export const AppInstancesByAppIdDocument = gql`
    query AppInstancesByAppId($appId: String!) {
  appInstancesByAppId(appId: $appId) {
    ...BasicAppInstanceParts
  }
}
    ${BasicAppInstancePartsFragmentDoc}`;
export type AppInstancesByAppIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AppInstancesByAppIdQuery, AppInstancesByAppIdQueryVariables>, 'query'> & ({ variables: AppInstancesByAppIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AppInstancesByAppIdComponent = (props: AppInstancesByAppIdComponentProps) => (
      <ApolloReactComponents.Query<AppInstancesByAppIdQuery, AppInstancesByAppIdQueryVariables> query={AppInstancesByAppIdDocument} {...props} />
    );
    

/**
 * __useAppInstancesByAppIdQuery__
 *
 * To run a query within a React component, call `useAppInstancesByAppIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppInstancesByAppIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppInstancesByAppIdQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useAppInstancesByAppIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AppInstancesByAppIdQuery, AppInstancesByAppIdQueryVariables>) {
        return ApolloReactHooks.useQuery<AppInstancesByAppIdQuery, AppInstancesByAppIdQueryVariables>(AppInstancesByAppIdDocument, baseOptions);
      }
export function useAppInstancesByAppIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AppInstancesByAppIdQuery, AppInstancesByAppIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AppInstancesByAppIdQuery, AppInstancesByAppIdQueryVariables>(AppInstancesByAppIdDocument, baseOptions);
        }
export type AppInstancesByAppIdQueryHookResult = ReturnType<typeof useAppInstancesByAppIdQuery>;
export type AppInstancesByAppIdLazyQueryHookResult = ReturnType<typeof useAppInstancesByAppIdLazyQuery>;
export type AppInstancesByAppIdQueryResult = ApolloReactCommon.QueryResult<AppInstancesByAppIdQuery, AppInstancesByAppIdQueryVariables>;
export const DeleteAppInstanceDocument = gql`
    mutation DeleteAppInstance($id: Int!) {
  deleteAppInstance(id: $id)
}
    `;
export type DeleteAppInstanceMutationFn = ApolloReactCommon.MutationFunction<DeleteAppInstanceMutation, DeleteAppInstanceMutationVariables>;
export type DeleteAppInstanceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteAppInstanceMutation, DeleteAppInstanceMutationVariables>, 'mutation'>;

    export const DeleteAppInstanceComponent = (props: DeleteAppInstanceComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteAppInstanceMutation, DeleteAppInstanceMutationVariables> mutation={DeleteAppInstanceDocument} {...props} />
    );
    

/**
 * __useDeleteAppInstanceMutation__
 *
 * To run a mutation, you first call `useDeleteAppInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAppInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAppInstanceMutation, { data, loading, error }] = useDeleteAppInstanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAppInstanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAppInstanceMutation, DeleteAppInstanceMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAppInstanceMutation, DeleteAppInstanceMutationVariables>(DeleteAppInstanceDocument, baseOptions);
      }
export type DeleteAppInstanceMutationHookResult = ReturnType<typeof useDeleteAppInstanceMutation>;
export type DeleteAppInstanceMutationResult = ApolloReactCommon.MutationResult<DeleteAppInstanceMutation>;
export type DeleteAppInstanceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAppInstanceMutation, DeleteAppInstanceMutationVariables>;
export const UpdateAppInstanceDocument = gql`
    mutation UpdateAppInstance($id: Int!, $values: UpdateAppInstanceInput!) {
  updateAppInstance(id: $id, updateAppInstanceData: $values) {
    ...BasicAppInstanceParts
  }
}
    ${BasicAppInstancePartsFragmentDoc}`;
export type UpdateAppInstanceMutationFn = ApolloReactCommon.MutationFunction<UpdateAppInstanceMutation, UpdateAppInstanceMutationVariables>;
export type UpdateAppInstanceComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateAppInstanceMutation, UpdateAppInstanceMutationVariables>, 'mutation'>;

    export const UpdateAppInstanceComponent = (props: UpdateAppInstanceComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateAppInstanceMutation, UpdateAppInstanceMutationVariables> mutation={UpdateAppInstanceDocument} {...props} />
    );
    

/**
 * __useUpdateAppInstanceMutation__
 *
 * To run a mutation, you first call `useUpdateAppInstanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppInstanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAppInstanceMutation, { data, loading, error }] = useUpdateAppInstanceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateAppInstanceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAppInstanceMutation, UpdateAppInstanceMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAppInstanceMutation, UpdateAppInstanceMutationVariables>(UpdateAppInstanceDocument, baseOptions);
      }
export type UpdateAppInstanceMutationHookResult = ReturnType<typeof useUpdateAppInstanceMutation>;
export type UpdateAppInstanceMutationResult = ApolloReactCommon.MutationResult<UpdateAppInstanceMutation>;
export type UpdateAppInstanceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAppInstanceMutation, UpdateAppInstanceMutationVariables>;
export const ViewerAppInstancesDocument = gql`
    query ViewerAppInstances {
  viewer {
    id
    appsInstances {
      ...BasicAppInstanceParts
    }
  }
}
    ${BasicAppInstancePartsFragmentDoc}`;
export type ViewerAppInstancesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ViewerAppInstancesQuery, ViewerAppInstancesQueryVariables>, 'query'>;

    export const ViewerAppInstancesComponent = (props: ViewerAppInstancesComponentProps) => (
      <ApolloReactComponents.Query<ViewerAppInstancesQuery, ViewerAppInstancesQueryVariables> query={ViewerAppInstancesDocument} {...props} />
    );
    

/**
 * __useViewerAppInstancesQuery__
 *
 * To run a query within a React component, call `useViewerAppInstancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerAppInstancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerAppInstancesQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerAppInstancesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerAppInstancesQuery, ViewerAppInstancesQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewerAppInstancesQuery, ViewerAppInstancesQueryVariables>(ViewerAppInstancesDocument, baseOptions);
      }
export function useViewerAppInstancesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerAppInstancesQuery, ViewerAppInstancesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewerAppInstancesQuery, ViewerAppInstancesQueryVariables>(ViewerAppInstancesDocument, baseOptions);
        }
export type ViewerAppInstancesQueryHookResult = ReturnType<typeof useViewerAppInstancesQuery>;
export type ViewerAppInstancesLazyQueryHookResult = ReturnType<typeof useViewerAppInstancesLazyQuery>;
export type ViewerAppInstancesQueryResult = ApolloReactCommon.QueryResult<ViewerAppInstancesQuery, ViewerAppInstancesQueryVariables>;
export const AddOrganizationDocument = gql`
    mutation AddOrganization($values: NewOrganizationInput!) {
  addOrganization(newOrganizationData: $values) {
    ...BasicOrganizationParts
  }
}
    ${BasicOrganizationPartsFragmentDoc}`;
export type AddOrganizationMutationFn = ApolloReactCommon.MutationFunction<AddOrganizationMutation, AddOrganizationMutationVariables>;
export type AddOrganizationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddOrganizationMutation, AddOrganizationMutationVariables>, 'mutation'>;

    export const AddOrganizationComponent = (props: AddOrganizationComponentProps) => (
      <ApolloReactComponents.Mutation<AddOrganizationMutation, AddOrganizationMutationVariables> mutation={AddOrganizationDocument} {...props} />
    );
    

/**
 * __useAddOrganizationMutation__
 *
 * To run a mutation, you first call `useAddOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrganizationMutation, { data, loading, error }] = useAddOrganizationMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useAddOrganizationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddOrganizationMutation, AddOrganizationMutationVariables>) {
        return ApolloReactHooks.useMutation<AddOrganizationMutation, AddOrganizationMutationVariables>(AddOrganizationDocument, baseOptions);
      }
export type AddOrganizationMutationHookResult = ReturnType<typeof useAddOrganizationMutation>;
export type AddOrganizationMutationResult = ApolloReactCommon.MutationResult<AddOrganizationMutation>;
export type AddOrganizationMutationOptions = ApolloReactCommon.BaseMutationOptions<AddOrganizationMutation, AddOrganizationMutationVariables>;
export const DeleteOrganizationDocument = gql`
    mutation DeleteOrganization($id: Int!) {
  deleteOrganization(id: $id)
}
    `;
export type DeleteOrganizationMutationFn = ApolloReactCommon.MutationFunction<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;
export type DeleteOrganizationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>, 'mutation'>;

    export const DeleteOrganizationComponent = (props: DeleteOrganizationComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteOrganizationMutation, DeleteOrganizationMutationVariables> mutation={DeleteOrganizationDocument} {...props} />
    );
    

/**
 * __useDeleteOrganizationMutation__
 *
 * To run a mutation, you first call `useDeleteOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrganizationMutation, { data, loading, error }] = useDeleteOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrganizationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>(DeleteOrganizationDocument, baseOptions);
      }
export type DeleteOrganizationMutationHookResult = ReturnType<typeof useDeleteOrganizationMutation>;
export type DeleteOrganizationMutationResult = ApolloReactCommon.MutationResult<DeleteOrganizationMutation>;
export type DeleteOrganizationMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOrganizationMutation, DeleteOrganizationMutationVariables>;
export const OrganizationByIdDocument = gql`
    query OrganizationById($id: Int!) {
  organization(id: $id) {
    ...BasicOrganizationParts
  }
}
    ${BasicOrganizationPartsFragmentDoc}`;
export type OrganizationByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrganizationByIdQuery, OrganizationByIdQueryVariables>, 'query'> & ({ variables: OrganizationByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrganizationByIdComponent = (props: OrganizationByIdComponentProps) => (
      <ApolloReactComponents.Query<OrganizationByIdQuery, OrganizationByIdQueryVariables> query={OrganizationByIdDocument} {...props} />
    );
    

/**
 * __useOrganizationByIdQuery__
 *
 * To run a query within a React component, call `useOrganizationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrganizationByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrganizationByIdQuery, OrganizationByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<OrganizationByIdQuery, OrganizationByIdQueryVariables>(OrganizationByIdDocument, baseOptions);
      }
export function useOrganizationByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrganizationByIdQuery, OrganizationByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrganizationByIdQuery, OrganizationByIdQueryVariables>(OrganizationByIdDocument, baseOptions);
        }
export type OrganizationByIdQueryHookResult = ReturnType<typeof useOrganizationByIdQuery>;
export type OrganizationByIdLazyQueryHookResult = ReturnType<typeof useOrganizationByIdLazyQuery>;
export type OrganizationByIdQueryResult = ApolloReactCommon.QueryResult<OrganizationByIdQuery, OrganizationByIdQueryVariables>;
export const SelectOrganizationDocument = gql`
    mutation SelectOrganization($id: Int!) {
  selectOrganization(id: $id) @client {
    ...BasicOrganizationParts
  }
}
    ${BasicOrganizationPartsFragmentDoc}`;
export type SelectOrganizationMutationFn = ApolloReactCommon.MutationFunction<SelectOrganizationMutation, SelectOrganizationMutationVariables>;
export type SelectOrganizationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SelectOrganizationMutation, SelectOrganizationMutationVariables>, 'mutation'>;

    export const SelectOrganizationComponent = (props: SelectOrganizationComponentProps) => (
      <ApolloReactComponents.Mutation<SelectOrganizationMutation, SelectOrganizationMutationVariables> mutation={SelectOrganizationDocument} {...props} />
    );
    

/**
 * __useSelectOrganizationMutation__
 *
 * To run a mutation, you first call `useSelectOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSelectOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [selectOrganizationMutation, { data, loading, error }] = useSelectOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSelectOrganizationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SelectOrganizationMutation, SelectOrganizationMutationVariables>) {
        return ApolloReactHooks.useMutation<SelectOrganizationMutation, SelectOrganizationMutationVariables>(SelectOrganizationDocument, baseOptions);
      }
export type SelectOrganizationMutationHookResult = ReturnType<typeof useSelectOrganizationMutation>;
export type SelectOrganizationMutationResult = ApolloReactCommon.MutationResult<SelectOrganizationMutation>;
export type SelectOrganizationMutationOptions = ApolloReactCommon.BaseMutationOptions<SelectOrganizationMutation, SelectOrganizationMutationVariables>;
export const SelectedOrganizationDocument = gql`
    query SelectedOrganization {
  selectedOrganization @client {
    ...BasicOrganizationParts
  }
}
    ${BasicOrganizationPartsFragmentDoc}`;
export type SelectedOrganizationComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SelectedOrganizationQuery, SelectedOrganizationQueryVariables>, 'query'>;

    export const SelectedOrganizationComponent = (props: SelectedOrganizationComponentProps) => (
      <ApolloReactComponents.Query<SelectedOrganizationQuery, SelectedOrganizationQueryVariables> query={SelectedOrganizationDocument} {...props} />
    );
    

/**
 * __useSelectedOrganizationQuery__
 *
 * To run a query within a React component, call `useSelectedOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectedOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectedOrganizationQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectedOrganizationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SelectedOrganizationQuery, SelectedOrganizationQueryVariables>) {
        return ApolloReactHooks.useQuery<SelectedOrganizationQuery, SelectedOrganizationQueryVariables>(SelectedOrganizationDocument, baseOptions);
      }
export function useSelectedOrganizationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SelectedOrganizationQuery, SelectedOrganizationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SelectedOrganizationQuery, SelectedOrganizationQueryVariables>(SelectedOrganizationDocument, baseOptions);
        }
export type SelectedOrganizationQueryHookResult = ReturnType<typeof useSelectedOrganizationQuery>;
export type SelectedOrganizationLazyQueryHookResult = ReturnType<typeof useSelectedOrganizationLazyQuery>;
export type SelectedOrganizationQueryResult = ApolloReactCommon.QueryResult<SelectedOrganizationQuery, SelectedOrganizationQueryVariables>;
export const UpdateOrganizationDocument = gql`
    mutation UpdateOrganization($id: Int!, $values: UpdateOrganizationInput!) {
  updateOrganization(id: $id, updateOrganizationData: $values) {
    ...BasicOrganizationParts
  }
}
    ${BasicOrganizationPartsFragmentDoc}`;
export type UpdateOrganizationMutationFn = ApolloReactCommon.MutationFunction<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;
export type UpdateOrganizationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>, 'mutation'>;

    export const UpdateOrganizationComponent = (props: UpdateOrganizationComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateOrganizationMutation, UpdateOrganizationMutationVariables> mutation={UpdateOrganizationDocument} {...props} />
    );
    

/**
 * __useUpdateOrganizationMutation__
 *
 * To run a mutation, you first call `useUpdateOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganizationMutation, { data, loading, error }] = useUpdateOrganizationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateOrganizationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>(UpdateOrganizationDocument, baseOptions);
      }
export type UpdateOrganizationMutationHookResult = ReturnType<typeof useUpdateOrganizationMutation>;
export type UpdateOrganizationMutationResult = ApolloReactCommon.MutationResult<UpdateOrganizationMutation>;
export type UpdateOrganizationMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;
export const AddRoleDocument = gql`
    mutation AddRole($values: NewRoleInput!) {
  addRole(newRoleData: $values) {
    ...BasicRoleParts
    user {
      ...BasicUserParts
    }
  }
}
    ${BasicRolePartsFragmentDoc}
${BasicUserPartsFragmentDoc}`;
export type AddRoleMutationFn = ApolloReactCommon.MutationFunction<AddRoleMutation, AddRoleMutationVariables>;
export type AddRoleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddRoleMutation, AddRoleMutationVariables>, 'mutation'>;

    export const AddRoleComponent = (props: AddRoleComponentProps) => (
      <ApolloReactComponents.Mutation<AddRoleMutation, AddRoleMutationVariables> mutation={AddRoleDocument} {...props} />
    );
    

/**
 * __useAddRoleMutation__
 *
 * To run a mutation, you first call `useAddRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRoleMutation, { data, loading, error }] = useAddRoleMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useAddRoleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddRoleMutation, AddRoleMutationVariables>) {
        return ApolloReactHooks.useMutation<AddRoleMutation, AddRoleMutationVariables>(AddRoleDocument, baseOptions);
      }
export type AddRoleMutationHookResult = ReturnType<typeof useAddRoleMutation>;
export type AddRoleMutationResult = ApolloReactCommon.MutationResult<AddRoleMutation>;
export type AddRoleMutationOptions = ApolloReactCommon.BaseMutationOptions<AddRoleMutation, AddRoleMutationVariables>;
export const DeleteRoleDocument = gql`
    mutation DeleteRole($id: Int!) {
  deleteRole(id: $id)
}
    `;
export type DeleteRoleMutationFn = ApolloReactCommon.MutationFunction<DeleteRoleMutation, DeleteRoleMutationVariables>;
export type DeleteRoleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteRoleMutation, DeleteRoleMutationVariables>, 'mutation'>;

    export const DeleteRoleComponent = (props: DeleteRoleComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteRoleMutation, DeleteRoleMutationVariables> mutation={DeleteRoleDocument} {...props} />
    );
    

/**
 * __useDeleteRoleMutation__
 *
 * To run a mutation, you first call `useDeleteRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleMutation, { data, loading, error }] = useDeleteRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRoleMutation, DeleteRoleMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteRoleMutation, DeleteRoleMutationVariables>(DeleteRoleDocument, baseOptions);
      }
export type DeleteRoleMutationHookResult = ReturnType<typeof useDeleteRoleMutation>;
export type DeleteRoleMutationResult = ApolloReactCommon.MutationResult<DeleteRoleMutation>;
export type DeleteRoleMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const OrganizationRolesDocument = gql`
    query OrganizationRoles($organizationId: Int!) {
  organization(id: $organizationId) {
    ...BasicOrganizationParts
    roles {
      ...BasicRoleParts
      user {
        ...BasicUserParts
      }
    }
  }
}
    ${BasicOrganizationPartsFragmentDoc}
${BasicRolePartsFragmentDoc}
${BasicUserPartsFragmentDoc}`;
export type OrganizationRolesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrganizationRolesQuery, OrganizationRolesQueryVariables>, 'query'> & ({ variables: OrganizationRolesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrganizationRolesComponent = (props: OrganizationRolesComponentProps) => (
      <ApolloReactComponents.Query<OrganizationRolesQuery, OrganizationRolesQueryVariables> query={OrganizationRolesDocument} {...props} />
    );
    

/**
 * __useOrganizationRolesQuery__
 *
 * To run a query within a React component, call `useOrganizationRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationRolesQuery({
 *   variables: {
 *      organizationId: // value for 'organizationId'
 *   },
 * });
 */
export function useOrganizationRolesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrganizationRolesQuery, OrganizationRolesQueryVariables>) {
        return ApolloReactHooks.useQuery<OrganizationRolesQuery, OrganizationRolesQueryVariables>(OrganizationRolesDocument, baseOptions);
      }
export function useOrganizationRolesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrganizationRolesQuery, OrganizationRolesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrganizationRolesQuery, OrganizationRolesQueryVariables>(OrganizationRolesDocument, baseOptions);
        }
export type OrganizationRolesQueryHookResult = ReturnType<typeof useOrganizationRolesQuery>;
export type OrganizationRolesLazyQueryHookResult = ReturnType<typeof useOrganizationRolesLazyQuery>;
export type OrganizationRolesQueryResult = ApolloReactCommon.QueryResult<OrganizationRolesQuery, OrganizationRolesQueryVariables>;
export const UpdateRoleDocument = gql`
    mutation UpdateRole($id: Int!, $values: UpdateRoleInput!) {
  updateRole(id: $id, updateRoleData: $values) {
    ...BasicRoleParts
  }
}
    ${BasicRolePartsFragmentDoc}`;
export type UpdateRoleMutationFn = ApolloReactCommon.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>;
export type UpdateRoleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateRoleMutation, UpdateRoleMutationVariables>, 'mutation'>;

    export const UpdateRoleComponent = (props: UpdateRoleComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateRoleMutation, UpdateRoleMutationVariables> mutation={UpdateRoleDocument} {...props} />
    );
    

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateRoleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRoleMutation, UpdateRoleMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateRoleMutation, UpdateRoleMutationVariables>(UpdateRoleDocument, baseOptions);
      }
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = ApolloReactCommon.MutationResult<UpdateRoleMutation>;
export type UpdateRoleMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const ViewerRolesDocument = gql`
    query ViewerRoles {
  viewer {
    id
    roles {
      ...BasicRoleParts
      organization {
        ...BasicOrganizationParts
      }
    }
  }
}
    ${BasicRolePartsFragmentDoc}
${BasicOrganizationPartsFragmentDoc}`;
export type ViewerRolesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ViewerRolesQuery, ViewerRolesQueryVariables>, 'query'>;

    export const ViewerRolesComponent = (props: ViewerRolesComponentProps) => (
      <ApolloReactComponents.Query<ViewerRolesQuery, ViewerRolesQueryVariables> query={ViewerRolesDocument} {...props} />
    );
    

/**
 * __useViewerRolesQuery__
 *
 * To run a query within a React component, call `useViewerRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerRolesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ViewerRolesQuery, ViewerRolesQueryVariables>) {
        return ApolloReactHooks.useQuery<ViewerRolesQuery, ViewerRolesQueryVariables>(ViewerRolesDocument, baseOptions);
      }
export function useViewerRolesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewerRolesQuery, ViewerRolesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ViewerRolesQuery, ViewerRolesQueryVariables>(ViewerRolesDocument, baseOptions);
        }
export type ViewerRolesQueryHookResult = ReturnType<typeof useViewerRolesQuery>;
export type ViewerRolesLazyQueryHookResult = ReturnType<typeof useViewerRolesLazyQuery>;
export type ViewerRolesQueryResult = ApolloReactCommon.QueryResult<ViewerRolesQuery, ViewerRolesQueryVariables>;
export const AddScreenKeyDocument = gql`
    mutation AddScreenKey($screenId: Int!, $privateKey: String!) {
  addScreenKey(screenId: $screenId, privateKey: $privateKey) {
    id
    privateKey
  }
}
    `;
export type AddScreenKeyMutationFn = ApolloReactCommon.MutationFunction<AddScreenKeyMutation, AddScreenKeyMutationVariables>;
export type AddScreenKeyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddScreenKeyMutation, AddScreenKeyMutationVariables>, 'mutation'>;

    export const AddScreenKeyComponent = (props: AddScreenKeyComponentProps) => (
      <ApolloReactComponents.Mutation<AddScreenKeyMutation, AddScreenKeyMutationVariables> mutation={AddScreenKeyDocument} {...props} />
    );
    

/**
 * __useAddScreenKeyMutation__
 *
 * To run a mutation, you first call `useAddScreenKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddScreenKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addScreenKeyMutation, { data, loading, error }] = useAddScreenKeyMutation({
 *   variables: {
 *      screenId: // value for 'screenId'
 *      privateKey: // value for 'privateKey'
 *   },
 * });
 */
export function useAddScreenKeyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddScreenKeyMutation, AddScreenKeyMutationVariables>) {
        return ApolloReactHooks.useMutation<AddScreenKeyMutation, AddScreenKeyMutationVariables>(AddScreenKeyDocument, baseOptions);
      }
export type AddScreenKeyMutationHookResult = ReturnType<typeof useAddScreenKeyMutation>;
export type AddScreenKeyMutationResult = ApolloReactCommon.MutationResult<AddScreenKeyMutation>;
export type AddScreenKeyMutationOptions = ApolloReactCommon.BaseMutationOptions<AddScreenKeyMutation, AddScreenKeyMutationVariables>;
export const AddScreenDocument = gql`
    mutation AddScreen($values: NewScreenInput!) {
  addScreen(newScreenData: $values) {
    ...BasicScreenParts
    viewerRole {
      ...BasicRoleParts
    }
  }
}
    ${BasicScreenPartsFragmentDoc}
${BasicRolePartsFragmentDoc}`;
export type AddScreenMutationFn = ApolloReactCommon.MutationFunction<AddScreenMutation, AddScreenMutationVariables>;
export type AddScreenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddScreenMutation, AddScreenMutationVariables>, 'mutation'>;

    export const AddScreenComponent = (props: AddScreenComponentProps) => (
      <ApolloReactComponents.Mutation<AddScreenMutation, AddScreenMutationVariables> mutation={AddScreenDocument} {...props} />
    );
    

/**
 * __useAddScreenMutation__
 *
 * To run a mutation, you first call `useAddScreenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddScreenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addScreenMutation, { data, loading, error }] = useAddScreenMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useAddScreenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddScreenMutation, AddScreenMutationVariables>) {
        return ApolloReactHooks.useMutation<AddScreenMutation, AddScreenMutationVariables>(AddScreenDocument, baseOptions);
      }
export type AddScreenMutationHookResult = ReturnType<typeof useAddScreenMutation>;
export type AddScreenMutationResult = ApolloReactCommon.MutationResult<AddScreenMutation>;
export type AddScreenMutationOptions = ApolloReactCommon.BaseMutationOptions<AddScreenMutation, AddScreenMutationVariables>;
export const DeleteScreenDocument = gql`
    mutation DeleteScreen($id: Int!) {
  deleteScreen(id: $id)
}
    `;
export type DeleteScreenMutationFn = ApolloReactCommon.MutationFunction<DeleteScreenMutation, DeleteScreenMutationVariables>;
export type DeleteScreenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteScreenMutation, DeleteScreenMutationVariables>, 'mutation'>;

    export const DeleteScreenComponent = (props: DeleteScreenComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteScreenMutation, DeleteScreenMutationVariables> mutation={DeleteScreenDocument} {...props} />
    );
    

/**
 * __useDeleteScreenMutation__
 *
 * To run a mutation, you first call `useDeleteScreenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteScreenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteScreenMutation, { data, loading, error }] = useDeleteScreenMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteScreenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteScreenMutation, DeleteScreenMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteScreenMutation, DeleteScreenMutationVariables>(DeleteScreenDocument, baseOptions);
      }
export type DeleteScreenMutationHookResult = ReturnType<typeof useDeleteScreenMutation>;
export type DeleteScreenMutationResult = ApolloReactCommon.MutationResult<DeleteScreenMutation>;
export type DeleteScreenMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteScreenMutation, DeleteScreenMutationVariables>;
export const NotifyScreenUpdatedDocument = gql`
    mutation NotifyScreenUpdated($id: Int!) {
  notifyScreenUpdated(id: $id)
}
    `;
export type NotifyScreenUpdatedMutationFn = ApolloReactCommon.MutationFunction<NotifyScreenUpdatedMutation, NotifyScreenUpdatedMutationVariables>;
export type NotifyScreenUpdatedComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<NotifyScreenUpdatedMutation, NotifyScreenUpdatedMutationVariables>, 'mutation'>;

    export const NotifyScreenUpdatedComponent = (props: NotifyScreenUpdatedComponentProps) => (
      <ApolloReactComponents.Mutation<NotifyScreenUpdatedMutation, NotifyScreenUpdatedMutationVariables> mutation={NotifyScreenUpdatedDocument} {...props} />
    );
    

/**
 * __useNotifyScreenUpdatedMutation__
 *
 * To run a mutation, you first call `useNotifyScreenUpdatedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNotifyScreenUpdatedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [notifyScreenUpdatedMutation, { data, loading, error }] = useNotifyScreenUpdatedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNotifyScreenUpdatedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<NotifyScreenUpdatedMutation, NotifyScreenUpdatedMutationVariables>) {
        return ApolloReactHooks.useMutation<NotifyScreenUpdatedMutation, NotifyScreenUpdatedMutationVariables>(NotifyScreenUpdatedDocument, baseOptions);
      }
export type NotifyScreenUpdatedMutationHookResult = ReturnType<typeof useNotifyScreenUpdatedMutation>;
export type NotifyScreenUpdatedMutationResult = ApolloReactCommon.MutationResult<NotifyScreenUpdatedMutation>;
export type NotifyScreenUpdatedMutationOptions = ApolloReactCommon.BaseMutationOptions<NotifyScreenUpdatedMutation, NotifyScreenUpdatedMutationVariables>;
export const OrganizationScreensDocument = gql`
    query OrganizationScreens($id: Int!) {
  organization(id: $id) {
    id
    screens {
      ...BasicScreenParts
      viewerRole {
        ...BasicRoleParts
      }
    }
  }
}
    ${BasicScreenPartsFragmentDoc}
${BasicRolePartsFragmentDoc}`;
export type OrganizationScreensComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrganizationScreensQuery, OrganizationScreensQueryVariables>, 'query'> & ({ variables: OrganizationScreensQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrganizationScreensComponent = (props: OrganizationScreensComponentProps) => (
      <ApolloReactComponents.Query<OrganizationScreensQuery, OrganizationScreensQueryVariables> query={OrganizationScreensDocument} {...props} />
    );
    

/**
 * __useOrganizationScreensQuery__
 *
 * To run a query within a React component, call `useOrganizationScreensQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationScreensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationScreensQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrganizationScreensQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrganizationScreensQuery, OrganizationScreensQueryVariables>) {
        return ApolloReactHooks.useQuery<OrganizationScreensQuery, OrganizationScreensQueryVariables>(OrganizationScreensDocument, baseOptions);
      }
export function useOrganizationScreensLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrganizationScreensQuery, OrganizationScreensQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrganizationScreensQuery, OrganizationScreensQueryVariables>(OrganizationScreensDocument, baseOptions);
        }
export type OrganizationScreensQueryHookResult = ReturnType<typeof useOrganizationScreensQuery>;
export type OrganizationScreensLazyQueryHookResult = ReturnType<typeof useOrganizationScreensLazyQuery>;
export type OrganizationScreensQueryResult = ApolloReactCommon.QueryResult<OrganizationScreensQuery, OrganizationScreensQueryVariables>;
export const ScreenByIdDocument = gql`
    query ScreenById($id: Int!) {
  screen(id: $id) {
    ...BasicScreenParts
  }
}
    ${BasicScreenPartsFragmentDoc}`;
export type ScreenByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ScreenByIdQuery, ScreenByIdQueryVariables>, 'query'> & ({ variables: ScreenByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ScreenByIdComponent = (props: ScreenByIdComponentProps) => (
      <ApolloReactComponents.Query<ScreenByIdQuery, ScreenByIdQueryVariables> query={ScreenByIdDocument} {...props} />
    );
    

/**
 * __useScreenByIdQuery__
 *
 * To run a query within a React component, call `useScreenByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useScreenByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScreenByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useScreenByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ScreenByIdQuery, ScreenByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<ScreenByIdQuery, ScreenByIdQueryVariables>(ScreenByIdDocument, baseOptions);
      }
export function useScreenByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ScreenByIdQuery, ScreenByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ScreenByIdQuery, ScreenByIdQueryVariables>(ScreenByIdDocument, baseOptions);
        }
export type ScreenByIdQueryHookResult = ReturnType<typeof useScreenByIdQuery>;
export type ScreenByIdLazyQueryHookResult = ReturnType<typeof useScreenByIdLazyQuery>;
export type ScreenByIdQueryResult = ApolloReactCommon.QueryResult<ScreenByIdQuery, ScreenByIdQueryVariables>;
export const ScreenExtendedByIdDocument = gql`
    query ScreenExtendedById($id: Int!) {
  screen(id: $id) {
    ...ExtendedScreenParts
  }
}
    ${ExtendedScreenPartsFragmentDoc}`;
export type ScreenExtendedByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ScreenExtendedByIdQuery, ScreenExtendedByIdQueryVariables>, 'query'> & ({ variables: ScreenExtendedByIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ScreenExtendedByIdComponent = (props: ScreenExtendedByIdComponentProps) => (
      <ApolloReactComponents.Query<ScreenExtendedByIdQuery, ScreenExtendedByIdQueryVariables> query={ScreenExtendedByIdDocument} {...props} />
    );
    

/**
 * __useScreenExtendedByIdQuery__
 *
 * To run a query within a React component, call `useScreenExtendedByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useScreenExtendedByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScreenExtendedByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useScreenExtendedByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ScreenExtendedByIdQuery, ScreenExtendedByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<ScreenExtendedByIdQuery, ScreenExtendedByIdQueryVariables>(ScreenExtendedByIdDocument, baseOptions);
      }
export function useScreenExtendedByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ScreenExtendedByIdQuery, ScreenExtendedByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ScreenExtendedByIdQuery, ScreenExtendedByIdQueryVariables>(ScreenExtendedByIdDocument, baseOptions);
        }
export type ScreenExtendedByIdQueryHookResult = ReturnType<typeof useScreenExtendedByIdQuery>;
export type ScreenExtendedByIdLazyQueryHookResult = ReturnType<typeof useScreenExtendedByIdLazyQuery>;
export type ScreenExtendedByIdQueryResult = ApolloReactCommon.QueryResult<ScreenExtendedByIdQuery, ScreenExtendedByIdQueryVariables>;
export const ScreenExtendedByKeyDocument = gql`
    query ScreenExtendedByKey($screenKey: ScreenKeyInput!) {
  screenByKey(screenKey: $screenKey) {
    ...BasicScreenParts
    slides {
      ...BasicSlideParts
    }
  }
}
    ${BasicScreenPartsFragmentDoc}
${BasicSlidePartsFragmentDoc}`;
export type ScreenExtendedByKeyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ScreenExtendedByKeyQuery, ScreenExtendedByKeyQueryVariables>, 'query'> & ({ variables: ScreenExtendedByKeyQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ScreenExtendedByKeyComponent = (props: ScreenExtendedByKeyComponentProps) => (
      <ApolloReactComponents.Query<ScreenExtendedByKeyQuery, ScreenExtendedByKeyQueryVariables> query={ScreenExtendedByKeyDocument} {...props} />
    );
    

/**
 * __useScreenExtendedByKeyQuery__
 *
 * To run a query within a React component, call `useScreenExtendedByKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useScreenExtendedByKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScreenExtendedByKeyQuery({
 *   variables: {
 *      screenKey: // value for 'screenKey'
 *   },
 * });
 */
export function useScreenExtendedByKeyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ScreenExtendedByKeyQuery, ScreenExtendedByKeyQueryVariables>) {
        return ApolloReactHooks.useQuery<ScreenExtendedByKeyQuery, ScreenExtendedByKeyQueryVariables>(ScreenExtendedByKeyDocument, baseOptions);
      }
export function useScreenExtendedByKeyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ScreenExtendedByKeyQuery, ScreenExtendedByKeyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ScreenExtendedByKeyQuery, ScreenExtendedByKeyQueryVariables>(ScreenExtendedByKeyDocument, baseOptions);
        }
export type ScreenExtendedByKeyQueryHookResult = ReturnType<typeof useScreenExtendedByKeyQuery>;
export type ScreenExtendedByKeyLazyQueryHookResult = ReturnType<typeof useScreenExtendedByKeyLazyQuery>;
export type ScreenExtendedByKeyQueryResult = ApolloReactCommon.QueryResult<ScreenExtendedByKeyQuery, ScreenExtendedByKeyQueryVariables>;
export const OnScreenKeyAddedDocument = gql`
    subscription onScreenKeyAdded($screenKey: ScreenKeyInput!) {
  screenKeyAdded(screenKey: $screenKey) {
    privateKey
  }
}
    `;
export type OnScreenKeyAddedComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<OnScreenKeyAddedSubscription, OnScreenKeyAddedSubscriptionVariables>, 'subscription'>;

    export const OnScreenKeyAddedComponent = (props: OnScreenKeyAddedComponentProps) => (
      <ApolloReactComponents.Subscription<OnScreenKeyAddedSubscription, OnScreenKeyAddedSubscriptionVariables> subscription={OnScreenKeyAddedDocument} {...props} />
    );
    

/**
 * __useOnScreenKeyAddedSubscription__
 *
 * To run a query within a React component, call `useOnScreenKeyAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnScreenKeyAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnScreenKeyAddedSubscription({
 *   variables: {
 *      screenKey: // value for 'screenKey'
 *   },
 * });
 */
export function useOnScreenKeyAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnScreenKeyAddedSubscription, OnScreenKeyAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnScreenKeyAddedSubscription, OnScreenKeyAddedSubscriptionVariables>(OnScreenKeyAddedDocument, baseOptions);
      }
export type OnScreenKeyAddedSubscriptionHookResult = ReturnType<typeof useOnScreenKeyAddedSubscription>;
export type OnScreenKeyAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnScreenKeyAddedSubscription>;
export const OnScreenUpdatedDocument = gql`
    subscription onScreenUpdated($screenKey: ScreenKeyInput!) {
  screenUpdated(screenKey: $screenKey) {
    ...BasicScreenParts
    slides {
      ...BasicSlideParts
    }
  }
}
    ${BasicScreenPartsFragmentDoc}
${BasicSlidePartsFragmentDoc}`;
export type OnScreenUpdatedComponentProps = Omit<ApolloReactComponents.SubscriptionComponentOptions<OnScreenUpdatedSubscription, OnScreenUpdatedSubscriptionVariables>, 'subscription'>;

    export const OnScreenUpdatedComponent = (props: OnScreenUpdatedComponentProps) => (
      <ApolloReactComponents.Subscription<OnScreenUpdatedSubscription, OnScreenUpdatedSubscriptionVariables> subscription={OnScreenUpdatedDocument} {...props} />
    );
    

/**
 * __useOnScreenUpdatedSubscription__
 *
 * To run a query within a React component, call `useOnScreenUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnScreenUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnScreenUpdatedSubscription({
 *   variables: {
 *      screenKey: // value for 'screenKey'
 *   },
 * });
 */
export function useOnScreenUpdatedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnScreenUpdatedSubscription, OnScreenUpdatedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnScreenUpdatedSubscription, OnScreenUpdatedSubscriptionVariables>(OnScreenUpdatedDocument, baseOptions);
      }
export type OnScreenUpdatedSubscriptionHookResult = ReturnType<typeof useOnScreenUpdatedSubscription>;
export type OnScreenUpdatedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnScreenUpdatedSubscription>;
export const UpdateScreenDocument = gql`
    mutation UpdateScreen($id: Int!, $values: UpdateScreenInput!) {
  updateScreen(id: $id, updateScreenData: $values) {
    ...BasicScreenParts
  }
}
    ${BasicScreenPartsFragmentDoc}`;
export type UpdateScreenMutationFn = ApolloReactCommon.MutationFunction<UpdateScreenMutation, UpdateScreenMutationVariables>;
export type UpdateScreenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateScreenMutation, UpdateScreenMutationVariables>, 'mutation'>;

    export const UpdateScreenComponent = (props: UpdateScreenComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateScreenMutation, UpdateScreenMutationVariables> mutation={UpdateScreenDocument} {...props} />
    );
    

/**
 * __useUpdateScreenMutation__
 *
 * To run a mutation, you first call `useUpdateScreenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScreenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScreenMutation, { data, loading, error }] = useUpdateScreenMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateScreenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateScreenMutation, UpdateScreenMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateScreenMutation, UpdateScreenMutationVariables>(UpdateScreenDocument, baseOptions);
      }
export type UpdateScreenMutationHookResult = ReturnType<typeof useUpdateScreenMutation>;
export type UpdateScreenMutationResult = ApolloReactCommon.MutationResult<UpdateScreenMutation>;
export type UpdateScreenMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateScreenMutation, UpdateScreenMutationVariables>;
export const AddSlideDocument = gql`
    mutation AddSlide($values: NewSlideInput!) {
  addSlide(newSlideData: $values) {
    ...BasicSlideParts
  }
}
    ${BasicSlidePartsFragmentDoc}`;
export type AddSlideMutationFn = ApolloReactCommon.MutationFunction<AddSlideMutation, AddSlideMutationVariables>;
export type AddSlideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddSlideMutation, AddSlideMutationVariables>, 'mutation'>;

    export const AddSlideComponent = (props: AddSlideComponentProps) => (
      <ApolloReactComponents.Mutation<AddSlideMutation, AddSlideMutationVariables> mutation={AddSlideDocument} {...props} />
    );
    

/**
 * __useAddSlideMutation__
 *
 * To run a mutation, you first call `useAddSlideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSlideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSlideMutation, { data, loading, error }] = useAddSlideMutation({
 *   variables: {
 *      values: // value for 'values'
 *   },
 * });
 */
export function useAddSlideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddSlideMutation, AddSlideMutationVariables>) {
        return ApolloReactHooks.useMutation<AddSlideMutation, AddSlideMutationVariables>(AddSlideDocument, baseOptions);
      }
export type AddSlideMutationHookResult = ReturnType<typeof useAddSlideMutation>;
export type AddSlideMutationResult = ApolloReactCommon.MutationResult<AddSlideMutation>;
export type AddSlideMutationOptions = ApolloReactCommon.BaseMutationOptions<AddSlideMutation, AddSlideMutationVariables>;
export const DeleteSlideDocument = gql`
    mutation DeleteSlide($id: Int!) {
  deleteSlide(id: $id)
}
    `;
export type DeleteSlideMutationFn = ApolloReactCommon.MutationFunction<DeleteSlideMutation, DeleteSlideMutationVariables>;
export type DeleteSlideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteSlideMutation, DeleteSlideMutationVariables>, 'mutation'>;

    export const DeleteSlideComponent = (props: DeleteSlideComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteSlideMutation, DeleteSlideMutationVariables> mutation={DeleteSlideDocument} {...props} />
    );
    

/**
 * __useDeleteSlideMutation__
 *
 * To run a mutation, you first call `useDeleteSlideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSlideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSlideMutation, { data, loading, error }] = useDeleteSlideMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSlideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSlideMutation, DeleteSlideMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteSlideMutation, DeleteSlideMutationVariables>(DeleteSlideDocument, baseOptions);
      }
export type DeleteSlideMutationHookResult = ReturnType<typeof useDeleteSlideMutation>;
export type DeleteSlideMutationResult = ApolloReactCommon.MutationResult<DeleteSlideMutation>;
export type DeleteSlideMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteSlideMutation, DeleteSlideMutationVariables>;
export const SlideByIdLocalDocument = gql`
    query SlideByIdLocal($id: Int!) {
  slide(id: $id) @client {
    ...BasicSlideParts
  }
}
    ${BasicSlidePartsFragmentDoc}`;
export type SlideByIdLocalComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SlideByIdLocalQuery, SlideByIdLocalQueryVariables>, 'query'> & ({ variables: SlideByIdLocalQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SlideByIdLocalComponent = (props: SlideByIdLocalComponentProps) => (
      <ApolloReactComponents.Query<SlideByIdLocalQuery, SlideByIdLocalQueryVariables> query={SlideByIdLocalDocument} {...props} />
    );
    

/**
 * __useSlideByIdLocalQuery__
 *
 * To run a query within a React component, call `useSlideByIdLocalQuery` and pass it any options that fit your needs.
 * When your component renders, `useSlideByIdLocalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSlideByIdLocalQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSlideByIdLocalQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SlideByIdLocalQuery, SlideByIdLocalQueryVariables>) {
        return ApolloReactHooks.useQuery<SlideByIdLocalQuery, SlideByIdLocalQueryVariables>(SlideByIdLocalDocument, baseOptions);
      }
export function useSlideByIdLocalLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SlideByIdLocalQuery, SlideByIdLocalQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SlideByIdLocalQuery, SlideByIdLocalQueryVariables>(SlideByIdLocalDocument, baseOptions);
        }
export type SlideByIdLocalQueryHookResult = ReturnType<typeof useSlideByIdLocalQuery>;
export type SlideByIdLocalLazyQueryHookResult = ReturnType<typeof useSlideByIdLocalLazyQuery>;
export type SlideByIdLocalQueryResult = ApolloReactCommon.QueryResult<SlideByIdLocalQuery, SlideByIdLocalQueryVariables>;
export const UpdateSlideDocument = gql`
    mutation UpdateSlide($id: Int!, $values: UpdateSlideInput!) {
  updateSlide(id: $id, updateSlideData: $values) {
    ...BasicSlideParts
  }
}
    ${BasicSlidePartsFragmentDoc}`;
export type UpdateSlideMutationFn = ApolloReactCommon.MutationFunction<UpdateSlideMutation, UpdateSlideMutationVariables>;
export type UpdateSlideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateSlideMutation, UpdateSlideMutationVariables>, 'mutation'>;

    export const UpdateSlideComponent = (props: UpdateSlideComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateSlideMutation, UpdateSlideMutationVariables> mutation={UpdateSlideDocument} {...props} />
    );
    

/**
 * __useUpdateSlideMutation__
 *
 * To run a mutation, you first call `useUpdateSlideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSlideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSlideMutation, { data, loading, error }] = useUpdateSlideMutation({
 *   variables: {
 *      id: // value for 'id'
 *      values: // value for 'values'
 *   },
 * });
 */
export function useUpdateSlideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSlideMutation, UpdateSlideMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateSlideMutation, UpdateSlideMutationVariables>(UpdateSlideDocument, baseOptions);
      }
export type UpdateSlideMutationHookResult = ReturnType<typeof useUpdateSlideMutation>;
export type UpdateSlideMutationResult = ApolloReactCommon.MutationResult<UpdateSlideMutation>;
export type UpdateSlideMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateSlideMutation, UpdateSlideMutationVariables>;
export const CalendarUtilsStableDocument = gql`
    query CalendarUtilsStable {
  calendarTodayDayNames
  calendarTodayHoliday
}
    `;
export type CalendarUtilsStableComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CalendarUtilsStableQuery, CalendarUtilsStableQueryVariables>, 'query'>;

    export const CalendarUtilsStableComponent = (props: CalendarUtilsStableComponentProps) => (
      <ApolloReactComponents.Query<CalendarUtilsStableQuery, CalendarUtilsStableQueryVariables> query={CalendarUtilsStableDocument} {...props} />
    );
    

/**
 * __useCalendarUtilsStableQuery__
 *
 * To run a query within a React component, call `useCalendarUtilsStableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalendarUtilsStableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalendarUtilsStableQuery({
 *   variables: {
 *   },
 * });
 */
export function useCalendarUtilsStableQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CalendarUtilsStableQuery, CalendarUtilsStableQueryVariables>) {
        return ApolloReactHooks.useQuery<CalendarUtilsStableQuery, CalendarUtilsStableQueryVariables>(CalendarUtilsStableDocument, baseOptions);
      }
export function useCalendarUtilsStableLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CalendarUtilsStableQuery, CalendarUtilsStableQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CalendarUtilsStableQuery, CalendarUtilsStableQueryVariables>(CalendarUtilsStableDocument, baseOptions);
        }
export type CalendarUtilsStableQueryHookResult = ReturnType<typeof useCalendarUtilsStableQuery>;
export type CalendarUtilsStableLazyQueryHookResult = ReturnType<typeof useCalendarUtilsStableLazyQuery>;
export type CalendarUtilsStableQueryResult = ApolloReactCommon.QueryResult<CalendarUtilsStableQuery, CalendarUtilsStableQueryVariables>;
export const QuotePredefinedQuotesDocument = gql`
    query QuotePredefinedQuotes($type: PredefinedQuotesType!) {
  quotePredefinedQuotes(type: $type) {
    id
    content
    author
  }
}
    `;
export type QuotePredefinedQuotesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<QuotePredefinedQuotesQuery, QuotePredefinedQuotesQueryVariables>, 'query'> & ({ variables: QuotePredefinedQuotesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const QuotePredefinedQuotesComponent = (props: QuotePredefinedQuotesComponentProps) => (
      <ApolloReactComponents.Query<QuotePredefinedQuotesQuery, QuotePredefinedQuotesQueryVariables> query={QuotePredefinedQuotesDocument} {...props} />
    );
    

/**
 * __useQuotePredefinedQuotesQuery__
 *
 * To run a query within a React component, call `useQuotePredefinedQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuotePredefinedQuotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuotePredefinedQuotesQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useQuotePredefinedQuotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QuotePredefinedQuotesQuery, QuotePredefinedQuotesQueryVariables>) {
        return ApolloReactHooks.useQuery<QuotePredefinedQuotesQuery, QuotePredefinedQuotesQueryVariables>(QuotePredefinedQuotesDocument, baseOptions);
      }
export function useQuotePredefinedQuotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QuotePredefinedQuotesQuery, QuotePredefinedQuotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<QuotePredefinedQuotesQuery, QuotePredefinedQuotesQueryVariables>(QuotePredefinedQuotesDocument, baseOptions);
        }
export type QuotePredefinedQuotesQueryHookResult = ReturnType<typeof useQuotePredefinedQuotesQuery>;
export type QuotePredefinedQuotesLazyQueryHookResult = ReturnType<typeof useQuotePredefinedQuotesLazyQuery>;
export type QuotePredefinedQuotesQueryResult = ApolloReactCommon.QueryResult<QuotePredefinedQuotesQuery, QuotePredefinedQuotesQueryVariables>;