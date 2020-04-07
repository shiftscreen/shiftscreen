import React from 'react';
import { ModalProps } from 'antd/es/modal';
import { PlusOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { NewScreenInput } from 'types';
import { useMutation } from '@apollo/react-hooks';
import { Alert } from 'antd';

import ModalFormik from 'shared/ModalFormik';
import ScreenAddForm from './Form';
import { ADD_SCREEN } from './ScreenAddModalUtils';
import { AddScreenData, AddScreenVars } from './ScreenAddModalTypes';

interface Props {
  visible: boolean;
  onCreate: (values: NewScreenInput) => Promise<void>;
  onClose: () => void;
}

const ScreenAddModal: React.FC<Props> = (props: Props) => {
  const formikRef = React.useRef<FormikProps<NewScreenInput>>();
  const {
    visible,
    onCreate,
    onClose,
  } = props;

  const [addScreen, { error }] = useMutation<AddScreenData, AddScreenVars>(ADD_SCREEN);

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
      <>
        <ScreenAddForm
          formikRef={formikRef}
          onSubmit={handleSubmit}
        />
        {error && (
          <Alert
            message="Wystąpił błąd"
            type="error"
            showIcon
          />
        )}
      </>
    </ModalFormik>
  )
};

export default ScreenAddModal;
