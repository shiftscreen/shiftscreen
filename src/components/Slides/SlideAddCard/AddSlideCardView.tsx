import React from 'react';
import { FetchResult } from 'apollo-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from './AddSlideCardStyle';
import {
  AddSlideMutation,
  BasicScreenPartsFragment,
  useAddSlideMutation,
  useUpdateScreenMutation
} from 'generated/graphql';
import { getDefaultValues, updateCache } from './AddSlideCardUtils';

interface Props {
  screen: BasicScreenPartsFragment;
}

const AddSlideCard: React.FC<Props> = ({ screen }: Props) => {
  const [updateScreen] = useUpdateScreenMutation();
  const defaultValues = getDefaultValues(screen);

  const addToOrder = async (mutationResult: FetchResult<AddSlideMutation>) => {
    const newSlideData = mutationResult.data?.addSlide;
    if (!newSlideData) {
      return;
    }

    const newSlideId = parseInt(newSlideData.id, 10);
    const currentOrder: number[] = screen.slidesOrder;
    const newOrder = currentOrder.concat(newSlideId);

    try {
      await updateScreen({
        variables: {
          id: parseInt(screen.id, 10),
          values: {
            slidesOrder: newOrder,
          }
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateScreen: {
            ...screen,
            slidesOrder: newOrder,
            __typename: 'Screen',
          }
        }
      })
    } catch (e) {
      console.error(e)
    }
  };

  const [addSlide, { loading }] = useAddSlideMutation({
    variables: {
      values: defaultValues
    },
    update: (cache, mutationResult: FetchResult<AddSlideMutation>) => {
      updateCache(cache, mutationResult, screen);
      addToOrder(mutationResult);
    },
  });

  const handleClick = async () => {
    try {
      await addSlide();
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <Container
      onClick={handleClick}
      disabled={loading}
    >
      <FontAwesomeIcon icon="plus"/>
    </Container>
  );
};

export default AddSlideCard;
