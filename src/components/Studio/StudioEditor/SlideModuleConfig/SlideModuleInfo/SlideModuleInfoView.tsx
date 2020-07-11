import React from 'react';
import * as R from 'ramda';

import modules from 'modules';
import {
  BasicAppInstancePartsFragment,
  BasicSlidePartsFragment,
  Module,
  useUpdateAppInstanceMutation,
  useUpdateSlideMutation
} from 'types';
import SlideModuleSelect from './SlideModuleSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Inner, InstanceTitle, ModuleTitle, UnlinkButton } from './SlideModuleInfoStyle';


interface Props {
  slide: BasicSlidePartsFragment;
}

const SlideModuleInfo: React.FC<Props> = ({ slide }: Props) => {
  const { appInstance } = slide;
  const module = R.find<Module>(
    R.propEq('id', appInstance?.appId)
  )(modules);

  if (!appInstance || !module) return (
    <SlideModuleSelect slide={slide}/>
  );

  return (
    <Container>
      <Inner>
        <ModuleTitle style={{ background: module.color }}>
          <FontAwesomeIcon icon={module.icon}/>
          {module.title}
        </ModuleTitle>
        <SlideModuleInstanceTitle instance={appInstance}/>
      </Inner>
      <SlideModuleInstanceUnlink slide={slide}/>
    </Container>
  );
};

interface ActionProps {
  instance: BasicAppInstancePartsFragment;
}

const SlideModuleInstanceTitle: React.FC<ActionProps> = ({ instance }: ActionProps) => {
  const [updateAppInstance] = useUpdateAppInstanceMutation();

  const handleEdit = async (title: string) => {
    try {
      await updateAppInstance({
        variables: {
          id: parseInt(instance.id, 10),
          values: { title },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateAppInstance: {
            ...instance,
            title,
            __typename: 'AppInstance',
          }
        }
      })
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <InstanceTitle editable={{ onChange: handleEdit }}>
      {instance.title}
    </InstanceTitle>
  )
};

const SlideModuleInstanceUnlink: React.FC<Props> = ({ slide }: Props) => {
  const [updateSlide, { loading }] = useUpdateSlideMutation();

  const handleClick = async () => {
    try {
      await updateSlide({
        variables: {
          id: parseInt(slide.id, 10),
          values: {
            appInstanceId: null,
          }
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateSlide: {
            ...slide,
            appInstance: null,
            __typename: 'Slide',
          }
        }
      })
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <UnlinkButton
      onClick={handleClick}
      loading={loading}
      disabled={loading}
    >
      <FontAwesomeIcon icon="unlink"/>
    </UnlinkButton>
  )
};

export default SlideModuleInfo;
