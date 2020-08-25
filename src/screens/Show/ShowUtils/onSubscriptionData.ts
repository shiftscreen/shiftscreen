import { OnSubscriptionDataOptions } from '@apollo/react-common';
import {
  OnScreenUpdatedSubscription,
  ScreenExtendedByKeyDocument,
  ScreenExtendedByKeyQuery,
  ScreenKeyInput
} from 'generated/graphql';
import { cache } from '../../../apollo';

export const onSubscriptionData = (
  { subscriptionData }: OnSubscriptionDataOptions<OnScreenUpdatedSubscription>,
  screenKey: ScreenKeyInput,
) => {
  if (subscriptionData?.data?.screenUpdated) {
    cache.writeQuery<ScreenExtendedByKeyQuery>({
      query: ScreenExtendedByKeyDocument,
      variables: {
        screenKey,
      },
      data: {
        screenByKey: subscriptionData?.data?.screenUpdated
      },
    })
  }
};
