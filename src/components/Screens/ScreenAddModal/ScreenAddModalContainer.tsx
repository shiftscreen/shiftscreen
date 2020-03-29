import React from 'react';
import * as R from 'ramda';
import { FormikProps } from 'formik';
import { NewFileInput } from 'types';

import FilesAddModalView from "./FilesAddModalView";

interface Props {
  visible: boolean;
  onCreate: (values: NewFileInput) => Promise<void>;
  onClose: () => void;
}

const FilesAddModal: React.FC<Props> = (props: Props) => {
  const [confirmLoading, setConfirmLoading] = React.useState<boolean>(false);
  const formikRef = React.useRef<FormikProps<NewFileInput>>();
  const {
    visible,
    onCreate,
    onClose,
  } = props;

  const handleCancel = () => {
    if (formikRef && formikRef.current) {
      formikRef.current.resetForm();
      onClose();
    }
  };

  const handleOk = async () => {
    if (formikRef && formikRef.current) {
      const { validateForm } = formikRef.current;
      const errors = await validateForm();

      if (R.isEmpty(errors)) {
        await formikRef.current.submitForm();
        formikRef.current.resetForm();
      }
    }
  };

  const handleSubmit = async (values: NewFileInput) => {
    setConfirmLoading(true);
    onCreate(values);
    setTimeout(() => setConfirmLoading(false), 500);
    console.log(values)
  };

  return (
    <FilesAddModalView
      visible={visible}
      confirmLoading={confirmLoading}
      onOk={handleOk}
      onCancel={handleCancel}
      onSubmit={handleSubmit}
      formikRef={formikRef}
    />
  )
};

export default FilesAddModal;
