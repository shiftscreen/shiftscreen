import React from 'react';
import * as R from 'ramda';
import { Modal } from 'antd';
import { ModalProps } from 'antd/es/modal';
import { FormikProps } from 'formik';

interface Props<T> {
  visible: boolean;
  modalProps: ModalProps;
  formikRef: React.MutableRefObject<FormikProps<T>>;
  onClose: () => void;
}

const ModalFormik: React.FC<Props<any>> = <T extends Object>(props: Props<T>) => {
  const [confirmLoading, setConfirmLoading] = React.useState<boolean>(false);
  const {
    visible,
    modalProps,
    onClose,
    formikRef,
  } = props;

  const {
    resetForm,
    validateForm,
    submitForm,
    isSubmitting,
  } = formikRef.current;

  const handleCancel = () => {
    if (formikRef && formikRef.current) {
      resetForm();
      onClose();
    }
  };

  const handleOk = async () => {
    const errors = await validateForm();

    if (R.isEmpty(errors)) {
      await submitForm();
      resetForm();
    }
  };

  React.useEffect(() => {
    setConfirmLoading(isSubmitting);
  }, [isSubmitting]);

  const extendedModalProps: ModalProps = {
    visible,
    confirmLoading,
    onOk: handleOk,
    onCancel: handleCancel,
    ...modalProps,
  };

  return <Modal {...extendedModalProps} />;
};

export default ModalFormik;
