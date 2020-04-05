import React from 'react';
import { ModalProps } from 'antd/es/modal';
import { UploadOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { NewFileInput } from 'types';

import ModalFormik from 'shared/ModalFormik';
import FileAddForm from './FileAddForm';

interface Props {
  visible: boolean;
  onCreate: (values: NewFileInput) => Promise<void>;
  onClose: () => void;
}

const FileAddModal: React.FC<Props> = (props: Props) => {
  const formikRef = React.useRef<FormikProps<NewFileInput>>();
  const {
    visible,
    onCreate,
    onClose,
  } = props;

  const handleSubmit = async (values: NewFileInput) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    onCreate(values);
    console.log(values)
  };

  const modalProps: ModalProps = {
    title: 'Dodaj nowy plik',
    okText: 'Dodaj',
    okButtonProps: {
      icon: <UploadOutlined/>
    }
  };

  return (
    <ModalFormik<NewFileInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <FileAddForm
        formikRef={formikRef}
        onSubmit={handleSubmit}
      />
    </ModalFormik>
  )
};

export default FileAddModal;
