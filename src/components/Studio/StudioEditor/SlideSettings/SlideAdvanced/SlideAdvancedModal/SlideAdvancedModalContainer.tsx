import React, { Fragment } from 'react';
import { ModalProps } from 'antd/es/modal';
import { SaveOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { BasicSlidePartsFragment } from 'types';
import { useUpdateSlideMutation } from 'generated/graphql';

import ModalFormik from 'shared/ModalFormik';
import { ErrorAlert } from 'shared';
import { SlideAdvancedInput } from './SlideAdvancedModalTypes';
import SlideAdvancedForm from './Form';

interface Props {
  visible: boolean;
  onCreate: (values: SlideAdvancedInput) => Promise<void>;
  onClose: () => void;
  slide: BasicSlidePartsFragment;
}

const RoleAddModal: React.FC<Props> = (props: Props) => {
  const {
    visible,
    onCreate,
    onClose,
    slide,
  } = props;
  const formikRef = React.useRef<FormikProps<SlideAdvancedInput>>();

  const [updateSlide, { error }] = useUpdateSlideMutation();

  const handleSubmit = async (values: SlideAdvancedInput) => {
    try {
      await updateSlide({
        variables: {
          id: parseInt(slide.id, 10),
          values,
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateSlide: {
            ...slide,
            ...values,
            __typename: 'Slide',
          }
        }
      });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  const modalProps: ModalProps = {
    title: 'Ustawienia zaawansowane slajdu',
    okText: 'Zapisz',
    okButtonProps: {
      icon: <SaveOutlined />,
    }
  };

  return (
    <ModalFormik<SlideAdvancedInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <Fragment>
        <SlideAdvancedForm
          formikRef={formikRef}
          onSubmit={handleSubmit}
          slide={slide}
        />
        {error && <ErrorAlert error={error}/>}
      </Fragment>
    </ModalFormik>
  );
};

export default RoleAddModal;
