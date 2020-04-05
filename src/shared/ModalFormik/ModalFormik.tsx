import React from 'react';
import * as R from 'ramda';
import { Modal, Typography } from 'antd';
import { ModalProps } from 'antd/es/modal';
import { FormikProps } from 'formik';

const { Text } = Typography;

interface Props<T> {
  visible: boolean;
  modalProps: ModalProps;
  formikRef: React.MutableRefObject<FormikProps<T> | undefined>;
  onClose: () => void;
  children: JSX.Element;
}

const ModalFormik = <T extends Object>(props: Props<T>) => {
  const [confirmLoading, setConfirmLoading] = React.useState<boolean>(false);
  const {
    visible,
    modalProps,
    onClose,
    formikRef,
    children,
  } = props;

  const handleCancel = () => {
    if (formikRef && formikRef.current) {
      formikRef.current.resetForm();
      onClose();
    }
  };

  const handleOk = async () => {
    if (formikRef && formikRef.current) {
      const {
        validateForm,
        submitForm,
        resetForm
      } = formikRef.current;
      const errors = await validateForm();

      if (R.isEmpty(errors)) {
        setConfirmLoading(true);
        await submitForm();
        setConfirmLoading(false);
        resetForm();
      }
    }
  };

  const extendedModalProps: ModalProps = {
    visible,
    confirmLoading,
    onOk: handleOk,
    onCancel: handleCancel,
    ...modalProps,
  };

  return (
    <Modal {...extendedModalProps}>
      {children}
    </Modal>
  );
};

export default ModalFormik;
