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
  fileLink: FileLink;
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
  updateRoleData: UpdateRoleInput;
  id: Scalars['Int'];
};


export type MutationAddSlideArgs = {
  newSlideData: NewSlideInput;
};


export type MutationUpdateSlideArgs = {
  updateSlideData: UpdateSlideInput;
  id: Scalars['Int'];
};


export type MutationDeleteSlideArgs = {
  id: Scalars['Int'];
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
  id: Scalars['Int'];
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
  durationMilliseconds: Scalars['Int'];
  index: Scalars['Int'];
  appId: Scalars['String'];
  appVersion: Scalars['String'];
  appConfig: Scalars['String'];
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

export type UpdateFileInput = {
  title?: Maybe<Scalars['String']>;
};

export type UpdateRoleInput = {
  permissionType?: Maybe<PermissionType>;
};

export type UpdateScreenInput = {
  title?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateSlideInput = {
  durationMilliseconds?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  appId?: Maybe<Scalars['String']>;
  appConfig?: Maybe<Scalars['String']>;
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

export type AddUserMutationVariables = {
  values: NewUserInput;
};


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'firstName' | 'lastName' | 'rulesAcceptedAt'>
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

export type AddFileMutationVariables = {
  values: NewFileInput;
};


export type AddFileMutation = (
  { __typename?: 'Mutation' }
  & { addFile?: Maybe<(
    { __typename?: 'File' }
    & BasicPartsFragment
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

export type BasicPartsFragment = (
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
      & BasicPartsFragment
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

export type ViewerQueryVariables = {};


export type ViewerQuery = (
  { __typename?: 'Query' }
  & { viewer: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'firstName' | 'lastName' | 'rulesAcceptedAt'>
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
      & Pick<Role, 'id' | 'createdAt' | 'updatedAt' | 'permissionType'>
      & { screen: (
        { __typename?: 'Screen' }
        & Pick<Screen, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'isActive'>
      ) }
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
    & Pick<Screen, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'isActive'>
  ) }
);

export type DeleteScreenMutationVariables = {
  id: Scalars['Int'];
};


export type DeleteScreenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteScreen'>
);

export type UpdateScreenMutationVariables = {
  id: Scalars['Int'];
  values: UpdateScreenInput;
};


export type UpdateScreenMutation = (
  { __typename?: 'Mutation' }
  & { updateScreen: (
    { __typename?: 'Screen' }
    & Pick<Screen, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'isActive'>
  ) }
);

export const BasicPartsFragmentDoc = gql`
    fragment BasicParts on File {
  id
  createdAt
  updatedAt
  title
  filename
  mimeType
  sizeKilobytes
}
    `;
export const AddUserDocument = gql`
    mutation AddUser($values: NewUserInput!) {
  addUser(newUserData: $values) {
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
export const AddFileDocument = gql`
    mutation AddFile($values: NewFileInput!) {
  addFile(newFileData: $values) {
    ...BasicParts
  }
}
    ${BasicPartsFragmentDoc}`;
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
      ...BasicParts
    }
  }
}
    ${BasicPartsFragmentDoc}`;
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
export const ViewerRolesDocument = gql`
    query ViewerRoles {
  viewer {
    id
    roles {
      id
      createdAt
      updatedAt
      permissionType
      screen {
        id
        createdAt
        updatedAt
        title
        isActive
      }
    }
  }
}
    `;
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
    id
    createdAt
    updatedAt
    title
    isActive
  }
}
    `;
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
export const UpdateScreenDocument = gql`
    mutation UpdateScreen($id: Int!, $values: UpdateScreenInput!) {
  updateScreen(id: $id, updateScreenData: $values) {
    id
    createdAt
    updatedAt
    title
    isActive
  }
}
    `;
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