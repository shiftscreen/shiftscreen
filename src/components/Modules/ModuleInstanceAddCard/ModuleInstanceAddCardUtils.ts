import {
  AddAppInstanceMutation,
  AppInstancesByAppIdDocument,
  AppInstancesByAppIdQuery,
  Module,
  NewAppInstanceInput,
} from 'types';
import { DataProxy } from 'apollo-cache';
import { FetchResult } from 'apollo-link';

export const getDefaultValues = (module: Module): NewAppInstanceInput => ({
  title: 'Nowa instancja',
  appId: module.id,
  appVersion: 'stable',
  config: '{}',
});

export const updateCache = (
  cache: DataProxy,
  { data }: FetchResult<AddAppInstanceMutation>,
  module: Module,
) => {
  const current = cache.readQuery<AppInstancesByAppIdQuery>({
    query: AppInstancesByAppIdDocument,
    variables: {
      appId: module.id,
    }
  });

  if (current?.appInstancesByAppId && data?.addAppInstance) {
    cache.writeQuery<AppInstancesByAppIdQuery>({
      query: AppInstancesByAppIdDocument,
      data: {
        appInstancesByAppId: [
          ...current.appInstancesByAppId,
          data.addAppInstance,
        ],
      },
      variables: {
        appId: module.id
      }
    });
  }
};
