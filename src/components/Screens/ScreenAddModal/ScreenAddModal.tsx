import React from 'react';
import { ModalProps } from 'antd/es/modal';
import { PlusOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { NewScreenInput } from 'types';

import ModalFormik from 'shared/ModalFormik';
import ScreenAddForm from './Form';

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

  const handleSubmit = async (values: NewScreenInput) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    onCreate(values);
    console.log(values)
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
      <ScreenAddForm
        formikRef={formikRef}
        onSubmit={handleSubmit}
      />
    </ModalFormik>
  )
};

export default ScreenAddModal;
