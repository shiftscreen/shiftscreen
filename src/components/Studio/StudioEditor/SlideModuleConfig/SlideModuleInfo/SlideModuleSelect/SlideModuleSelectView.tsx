import React from 'react';
import { BasicAppInstancePartsFragment, BasicSlidePartsFragment, useUpdateSlideMutation } from 'generated/graphql';
import { Button } from './SlideModuleSelectStyle';
import { SelectModal as ModuleSelectModal } from 'components/Modules';
import { handleError } from '../../../../../../utils';

interface Props {
  slide: BasicSlidePartsFragment;
}

const SlideModuleSelect: React.FC<Props> = ({ slide }: Props) => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [updateSlide] = useUpdateSlideMutation();

  const handleUpdate = async (instance: BasicAppInstancePartsFragment) => {
    try {
      await updateSlide({
        variables: {
          id: parseInt(slide.id, 10),
          values: {
            appInstanceId: parseInt(instance.id, 10),
          }
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateSlide: {
            ...slide,
            appInstance: instance,
            __typename: 'Slide',
          }
        }
      })
    } catch (e) {
      handleError(e);
    }
  };

  const handleClose = async (instance: BasicAppInstancePartsFragment | undefined) => {
    setModalVisible(false);

    if (!instance) {
      return;
    }

    await handleUpdate(instance);
  };

  const handleClick = () => (
    setModalVisible(true)
  );

  return (
    <>
      <Button
        size="large"
        onClick={handleClick}
      >
        Wybierz moduł
      </Button>
      <ModuleSelectModal
        visible={modalVisible}
        onClose={handleClose}
      />
    </>
  );
};

export default SlideModuleSelect;
