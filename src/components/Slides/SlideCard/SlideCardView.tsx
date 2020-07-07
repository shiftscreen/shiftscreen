import React from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { DeleteOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import * as R from 'ramda';

import {
  Container,
  ActionsWrapper,
  Action,
  PreviewContainer,
} from './SlideCardStyle';
import {
  BasicScreenPartsFragment,
  BasicSlidePartsFragment,
  useDeleteSlideMutation,
  useUpdateScreenMutation,
  useUpdateSlideMutation
} from 'generated/graphql';
import { Preview as SlidePreview } from 'components/Slides/index';
import { Scaled } from 'shared';
import { updateCache } from './SlideCardUtils';

interface Props {
  onSlideSelect(slide: BasicSlidePartsFragment): void;
  slide: BasicSlidePartsFragment;
  screen: BasicScreenPartsFragment;
  selected: boolean;
  provided: DraggableProvided;
}

const SlideCard: React.FC<Props> = (props: Props) => {
  const {
    slide,
    selected,
    onSlideSelect,
    provided,
    screen
  } = props;
  const { isActive } = slide;

  const handleElementClick = () => (
    onSlideSelect(slide)
  );

  const size = {
    height: 216,
    width: 384,
  };

  return (
    <Container
      bordered={selected}
      ref={provided.innerRef}
      {...size}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <ActionsWrapper>
        <ToggleAction slide={slide}/>
        <DeleteAction slide={slide} screen={screen}/>
      </ActionsWrapper>
      <PreviewContainer
        onClick={handleElementClick}
        isActive={isActive}
      >
        <Scaled {...size}>
          <SlidePreview slide={slide}/>
        </Scaled>
      </PreviewContainer>
    </Container>
  );
};

interface ToggleActionProps {
  slide: BasicSlidePartsFragment;
}

const ToggleAction: React.FC<ToggleActionProps> = ({ slide }: ToggleActionProps) => {
  const { id, isActive } = slide;
  const [updateSlide] = useUpdateSlideMutation({
    variables: {
      id: parseInt(id, 10),
      values: { isActive: !isActive }
    },
    optimisticResponse: {
      __typename: 'Mutation',
      updateSlide: {
        ...slide,
        isActive: !isActive,
        __typename: 'Slide',
      }
    }
  });

  const handleClick = async () => {
    try {
      await updateSlide()
    } catch (e) {
      console.error(e);
    }
  };

  const icon = isActive ? <EyeInvisibleOutlined /> : <EyeOutlined />;

  return (
    <Action onClick={handleClick}>
      {icon}
    </Action>
  )
};

interface DeleteActionProps {
  slide: BasicSlidePartsFragment;
  screen: BasicScreenPartsFragment;
}

const DeleteAction: React.FC<DeleteActionProps> = ({ slide, screen }: DeleteActionProps) => {
  const { id } = slide;

  const [updateScreen] = useUpdateScreenMutation();

  const [deleteSlide, { loading }] = useDeleteSlideMutation({
    variables: {
      id: parseInt(id, 10)
    },
    update: (cache) => (
      updateCache(cache, slide, screen)
    )
  });

  const handleClick = async () => {
    const withoutDeleted = (num: number) => R.not(R.equals(num, parseInt(slide.id, 10)));
    const newOrder = R.filter(withoutDeleted, screen.slidesOrder);

    try {
      await deleteSlide();
      await updateScreen({
        variables: {
          id: parseInt(screen.id, 10),
          values: {
            slidesOrder: newOrder
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
      console.error(e);
    }
  };

  return (
    <Action onClick={handleClick} disabled={loading}>
      <DeleteOutlined/>
    </Action>
  )
};

export default SlideCard;
