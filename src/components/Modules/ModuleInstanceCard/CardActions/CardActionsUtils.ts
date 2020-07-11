import { DataProxy } from 'apollo-cache';
import {
  AppInstancesByAppIdDocument,
  AppInstancesByAppIdQuery,
  BasicAppInstancePartsFragment,
} from 'generated/graphql';

export const updateCache = (cache: DataProxy, instance: BasicAppInstancePartsFragment) => {
  const data = cache.readQuery<AppInstancesByAppIdQuery>({
    query: AppInstancesByAppIdDocument,
    variables: {
      appId: instance.appId
    }
  });
  const updatedInstances = data && data?.appInstancesByAppId?.filter(i => i.id !== instance.id);

  const updatedData: AppInstancesByAppIdQuery = {
    appInstancesByAppId: [
      ...updatedInstances || [],
    ]
  };

  cache.writeQuery({
    query: AppInstancesByAppIdDocument,
    data: updatedData,
    variables: {
      appId: instance.appId
    }
  });
};
