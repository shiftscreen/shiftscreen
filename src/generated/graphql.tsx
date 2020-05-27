import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
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
};

export type Mutation = {
   __typename?: 'Mutation';
  addUser: User;
  login: TokenResponse;
  addRole: Role;
  updateRole: Role;
  deleteRole: Scalars['Boolean'];
  addOrganization: Organization;
  updateOrganization: Organization;
  deleteOrganization: Scalars['Boolean'];
  addAppInstance: AppInstance;
  updateAppInstance: AppInstance;
  deleteAppInstance: Scalars['Boolean'];
  addSlide: Slide;
  addScreen: Screen;
  updateScreen: Screen;
  deleteScreen: Scalars['Boolean'];
  addFile?: Maybe<File>;
  updateFile?: Maybe<File>;
  deleteFile: Scalars['Boolean'];
  fileLink: FileLink;
  addFileKey: FileKey;
  deleteFileKey: Scalars['Boolean'];
};


export type MutationAddUserArgs = {
  newUserData: NewUserInput;
};


export type MutationLoginArgs = {
  loginData: LoginInput;
};


export type MutationAddRoleArgs = {
  newRoleData: NewRoleInput;
};


export type MutationUpdateRoleArgs = {
  updateRoleData: UpdateRoleInput;
  id: Scalars['Int'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['Int'];
};


export type MutationAddOrganizationArgs = {
  newOrganizationData: NewOrganizationInput;
};


export type MutationUpdateOrganizationArgs = {
  updateOrganizationData: UpdateOrganizationInput;
  id: Scalars['Int'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['Int'];
};


export type MutationAddAppInstanceArgs = {
  newAppInstanceData: NewAppInstanceInput;
};


export type MutationUpdateAppInstanceArgs = {
  updateAppInstanceData: UpdateAppInstanceInput;
  id: Scalars['Int'];
};


export type MutationDeleteAppInstanceArgs = {
  id: Scalars['Int'];
};


export type MutationAddSlideArgs = {
  newSlideData: NewSlideInput;
};


export type MutationAddScreenArgs = {
  newScreenData: NewScreenInput;
};


export type MutationUpdateScreenArgs = {
  updateScreenData: UpdateScreenInput;
  id: Scalars['Int'];
};


export type MutationDeleteScreenArgs = {
  id: Scalars['Int'];
};


export type MutationAddFileArgs = {
  newFileData: NewFileInput;
};


export type MutationUpdateFileArgs = {
  updateFileData: UpdateFileInput;
  id: Scalars['Int'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['Int'];
};


export type MutationFileLinkArgs = {
  id: Scalars['Int'];
};


export type MutationAddFileKeyArgs = {
  fileId: Scalars['Int'];
};


export type MutationDeleteFileKeyArgs = {
  id: Scalars['String'];
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
  color: ScreenColor;
  ratio: Scalars['String'];
  organizationId: Scalars['Int'];
};

export type NewSlideInput = {
  index: Scalars['Int'];
  durationMilliseconds: Scalars['Int'];
  transition?: Maybe<Scalars['JSON']>;
  time?: Maybe<Scalars['JSON']>;
  date?: Maybe<Scalars['JSON']>;
  weekdays: Scalars['JSON'];
  appInstanceId: Scalars['Float'];
  screenId: Scalars['Int'];
};

export type NewUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  rulesAccepted: Scalars['Boolean'];
  picture?: Maybe<Scalars['Upload']>;
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

export type Query = {
   __typename?: 'Query';
  viewer: User;
  userByEmail: User;
  organization: Organization;
  appInstance: AppInstance;
  screen: Screen;
  fileKey: FileKey;
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryOrganizationArgs = {
  id: Scalars['Int'];
};


export type QueryAppInstanceArgs = {
  id: Scalars['Int'];
};


export type QueryScreenArgs = {
  id: Scalars['Int'];
};


export type QueryFileKeyArgs = {
  fileKey: FileKeyInput;
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
  color: ScreenColor;
  ratio: Scalars['String'];
  organization: Organization;
  slides?: Maybe<Array<Slide>>;
};

export enum ScreenColor {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}

export type Slide = {
   __typename?: 'Slide';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  index: Scalars['Int'];
  durationMilliseconds: Scalars['Int'];
  transition?: Maybe<Scalars['JSON']>;
  time?: Maybe<Scalars['JSON']>;
  date?: Maybe<Scalars['JSON']>;
  weekdays?: Maybe<Scalars['JSON']>;
  appInstance: AppInstance;
};

export type SlideInput = {
  id?: Maybe<Scalars['Int']>;
  isActive: Scalars['Boolean'];
  index: Scalars['Int'];
  durationMilliseconds: Scalars['Int'];
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

export type TokenResponse = {
   __typename?: 'TokenResponse';
  accessToken: Scalars['String'];
  tokenType: Scalars['String'];
  expiresIn: Scalars['String'];
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
  color?: Maybe<ScreenColor>;
  ratio?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  slides?: Maybe<Array<SlideInput>>;
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
  appInstances: Array<AppInstance>;
};

export type AddUserMutationVariables = {
  values: NewUserInput;
};


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: (
    { __typename?: 'User' }
    & BasicUserPartsFragment
  ) }
);

export type LoginMutationVariables = {
  values: LoginInput;
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'TokenResponse' }
    & Pick<TokenResponse, 'tokenType' | 'accessToken' | 'expiresIn'>
  ) }
);

export type UserByEmailQueryQueryVariables = {
  email: Scalars['String'];
};


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

export type AddFileMutationVariables = {
  values: NewFileInput;
};


export type AddFileMutation = (
  { __typename?: 'Mutation' }
  & { addFile?: Maybe<(
    { __typename?: 'File' }
    & BasicFilePartsFragment
  )> }
);

export type DeleteFileMutationVariables = {
  id: Scalars['Int'];
};


export type DeleteFileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteFile'>
);

export type FileLinkMutationVariables = {
  id: Scalars['Int'];
};


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

export type ViewerFilesQueryVariables = {};


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

export type ViewerStorageQueryVariables = {};


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

export type AddOrganizationMutationVariables = {
  values: NewOrganizationInput;
};


export type AddOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { addOrganization: (
    { __typename?: 'Organization' }
    & BasicOrganizationPartsFragment
  ) }
);

export type DeleteOrganizationMutationVariables = {
  id: Scalars['Int'];
};


export type DeleteOrganizationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteOrganization'>
);

export type OrganizationByIdQueryVariables = {
  id: Scalars['Int'];
};


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

export type UpdateOrganizationMutationVariables = {
  id: Scalars['Int'];
  values: UpdateOrganizationInput;
};


export type UpdateOrganizationMutation = (
  { __typename?: 'Mutation' }
  & { updateOrganization: (
    { __typename?: 'Organization' }
    & BasicOrganizationPartsFragment
  ) }
);

export type ViewerQueryVariables = {};


export type ViewerQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'firstName' | 'lastName' | 'rulesAcceptedAt'>
  ) }
);

export type AddRoleMutationVariables = {
  values: NewRoleInput;
};


export type AddRoleMutation = (
  { __typename?: 'Mutation' }
  & { addRole: (
    { __typename?: 'Role' }
    & { user: (
      { __typename?: 'User' }
      & BasicUserPartsFragment
    ) }
    & BasicRolesPartsFragment
  ) }
);

export type DeleteRoleMutationVariables = {
  id: Scalars['Int'];
};


export type DeleteRoleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteRole'>
);

export type OrganizationRolesQueryVariables = {
  organizationId: Scalars['Int'];
};


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
      & BasicRolesPartsFragment
    )>> }
    & BasicOrganizationPartsFragment
  ) }
);

export type BasicRolesPartsFragment = (
  { __typename?: 'Role' }
  & Pick<Role, 'id' | 'createdAt' | 'updatedAt' | 'permissionType'>
);

export type UpdateRoleMutationVariables = {
  id: Scalars['Int'];
  values: UpdateRoleInput;
};


export type UpdateRoleMutation = (
  { __typename?: 'Mutation' }
  & { updateRole: (
    { __typename?: 'Role' }
    & BasicRolesPartsFragment
  ) }
);

export type ViewerRolesQueryVariables = {};


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
      & BasicRolesPartsFragment
    )>> }
  ) }
);

export type AddScreenMutationVariables = {
  values: NewScreenInput;
};


export type AddScreenMutation = (
  { __typename?: 'Mutation' }
  & { addScreen: (
    { __typename?: 'Screen' }
    & BasicScreenPartsFragment
  ) }
);

export type DeleteScreenMutationVariables = {
  id: Scalars['Int'];
};


export type DeleteScreenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteScreen'>
);

export type OrganizationScreensQueryVariables = {
  id: Scalars['Int'];
};


export type OrganizationScreensQuery = (
  { __typename?: 'Query' }
  & { organization: (
    { __typename?: 'Organization' }
    & Pick<Organization, 'id'>
    & { screens?: Maybe<Array<(
      { __typename?: 'Screen' }
      & BasicScreenPartsFragment
    )>> }
  ) }
);

export type BasicScreenPartsFragment = (
  { __typename?: 'Screen' }
  & Pick<Screen, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'isActive' | 'color' | 'ratio'>
);

export type UpdateScreenMutationVariables = {
  id: Scalars['Int'];
  values: UpdateScreenInput;
};


export type UpdateScreenMutation = (
  { __typename?: 'Mutation' }
  & { updateScreen: (
    { __typename?: 'Screen' }
    & BasicScreenPartsFragment
  ) }
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
export const BasicOrganizationPartsFragmentDoc = gql`
    fragment BasicOrganizationParts on Organization {
  id
  createdAt
  updatedAt
  title
  viewerPermissionType
}
    `;
export const BasicRolesPartsFragmentDoc = gql`
    fragment BasicRolesParts on Role {
  id
  createdAt
  updatedAt
  permissionType
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
}
    `;
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
export const AddRoleDocument = gql`
    mutation AddRole($values: NewRoleInput!) {
  addRole(newRoleData: $values) {
    ...BasicRolesParts
    user {
      ...BasicUserParts
    }
  }
}
    ${BasicRolesPartsFragmentDoc}
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
      ...BasicRolesParts
      user {
        ...BasicUserParts
      }
    }
  }
}
    ${BasicOrganizationPartsFragmentDoc}
${BasicRolesPartsFragmentDoc}
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
    ...BasicRolesParts
  }
}
    ${BasicRolesPartsFragmentDoc}`;
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
      ...BasicRolesParts
      organization {
        ...BasicOrganizationParts
      }
    }
  }
}
    ${BasicRolesPartsFragmentDoc}
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
export const AddScreenDocument = gql`
    mutation AddScreen($values: NewScreenInput!) {
  addScreen(newScreenData: $values) {
    ...BasicScreenParts
  }
}
    ${BasicScreenPartsFragmentDoc}`;
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
export const OrganizationScreensDocument = gql`
    query OrganizationScreens($id: Int!) {
  organization(id: $id) {
    id
    screens {
      ...BasicScreenParts
    }
  }
}
    ${BasicScreenPartsFragmentDoc}`;
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