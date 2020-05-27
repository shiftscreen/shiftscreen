import React, { Fragment } from 'react';
import { ModalProps } from 'antd/es/modal';
import { PlusOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { NewScreenInput } from 'types';

import { useAddScreenMutation, ViewerRolesDocument } from 'generated/graphql';
import ModalFormik from 'shared/ModalFormik';
import ScreenAddForm from './Form';
import { ErrorAlert } from 'shared';

interface Props {
  visible: boolean;
  onCreate: (values: NewScreenInput) => Promise<void>;
  onClose: () => void;
}

const ScreenAddModal: React.FC<Props> = (props: Props) => {
  const formikRef = React.useRef<FormikProps<NewScreenInput>>();
  const {
    visible,
    onClose,
  } = props;

  const [addScreen, { error }] = useAddScreenMutation({
    onCompleted: onClose,
    refetchQueries: [{
      query: ViewerRolesDocument,
    }]
  });

  const handleSubmit = async (values: NewScreenInput) => {
    try {
      await addScreen({ variables: { values } })
    } catch (e) {
      console.error(e);
    }
  };

  const modalProps: ModalProps = {
    title: 'Stwórz nowy wyświetlacz',
    okText: 'Stwórz',
    okButtonProps: {
      icon: <PlusOutlined/>,
    }
  };

  return (
    <ModalFormik<NewScreenInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <Fragment>
        <ScreenAddForm
          formikRef={formikRef}
          onSubmit={handleSubmit}
        />
        {error && <ErrorAlert error={error}/>}
      </Fragment>
    </ModalFormik>
  )
};

export default ScreenAddModal;
