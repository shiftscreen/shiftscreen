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
  /** File upload scalar type */
  Upload: any;
};


export type File = {
   __typename?: 'File';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  filename: Scalars['String'];
  mimeType: Scalars['String'];
  sizeBytes: Scalars['Float'];
  user: User;
  link: FileLink;
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
  addSlide: Slide;
  updateSlide: Slide;
  deleteSlide: Scalars['Boolean'];
  addScreen: Screen;
  updateScreen: Screen;
  deleteScreen: Scalars['Boolean'];
  addFile?: Maybe<File>;
  updateFile?: Maybe<File>;
  deleteFile: Scalars['Boolean'];
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
  id: Scalars['Float'];
};


export type MutationDeleteRoleArgs = {
  updateRoleData: UpdateRoleInput;
  id: Scalars['Float'];
};


export type MutationAddSlideArgs = {
  newSlideData: NewSlideInput;
};


export type MutationUpdateSlideArgs = {
  updateSlideData: UpdateSlideInput;
  id: Scalars['Float'];
};


export type MutationDeleteSlideArgs = {
  id: Scalars['Float'];
};


export type MutationAddScreenArgs = {
  newScreenData: NewScreenInput;
};


export type MutationUpdateScreenArgs = {
  updateScreenData: UpdateScreenInput;
  id: Scalars['Float'];
};


export type MutationDeleteScreenArgs = {
  id: Scalars['Float'];
};


export type MutationAddFileArgs = {
  newFileData: NewFileInput;
};


export type MutationUpdateFileArgs = {
  updateFileData: UpdateFileInput;
  id: Scalars['Float'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['Float'];
};

export type NewFileInput = {
  title: Scalars['String'];
  file: Scalars['Upload'];
};

export type NewRoleInput = {
  permissionType: PermissionType;
  userId: Scalars['Int'];
  screenId: Scalars['Int'];
};

export type NewScreenInput = {
  title: Scalars['String'];
};

export type NewSlideInput = {
  durationMilliseconds: Scalars['Float'];
  index: Scalars['Float'];
  appId: Scalars['String'];
  appConfig: Scalars['String'];
  screenId: Scalars['Float'];
};

export type NewUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  rulesAccepted: Scalars['Boolean'];
  picture?: Maybe<Scalars['Upload']>;
};

export enum PermissionType {
  Admin = 'Admin',
  Editor = 'Editor'
}

export type Query = {
   __typename?: 'Query';
  viewer: User;
  user: User;
  screen: Screen;
};


export type QueryUserArgs = {
  email: Scalars['String'];
};


export type QueryScreenArgs = {
  id: Scalars['Float'];
};

export type Role = {
   __typename?: 'Role';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  permissionType: PermissionType;
  user: User;
  screen: Screen;
};

export type Screen = {
   __typename?: 'Screen';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  isActive: Scalars['Boolean'];
  roles?: Maybe<Array<Role>>;
  slides?: Maybe<Array<Slide>>;
};

export type Slide = {
   __typename?: 'Slide';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  durationMilliseconds: Scalars['Float'];
  index: Scalars['Float'];
  appId: Scalars['String'];
  appVersion: Scalars['String'];
  appConfig: Scalars['String'];
};

export type Storage = {
   __typename?: 'Storage';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  usedKilobytes: Scalars['Float'];
  maxKilobytes: Scalars['Float'];
  user: User;
};

export type TokenResponse = {
   __typename?: 'TokenResponse';
  accessToken: Scalars['String'];
  tokenType: Scalars['String'];
  expiresIn: Scalars['String'];
};

export type UpdateFileInput = {
  title: Scalars['String'];
};

export type UpdateRoleInput = {
  permissionType: PermissionType;
};

export type UpdateScreenInput = {
  title: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type UpdateSlideInput = {
  durationMilliseconds: Scalars['Float'];
  index: Scalars['Float'];
  appId: Scalars['String'];
  appConfig: Scalars['String'];
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
};

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

export type ViewerQueryVariables = {};


export type ViewerQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'firstName' | 'lastName' | 'rulesAcceptedAt'>
  ) }
);


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