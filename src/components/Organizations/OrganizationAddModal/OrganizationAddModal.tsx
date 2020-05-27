import React, { Fragment } from 'react';
import { ModalProps } from 'antd/es/modal';
import { PlusOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { NewOrganizationInput } from 'types';

import { useAddOrganizationMutation, ViewerRolesDocument } from 'generated/graphql';
import ModalFormik from 'shared/ModalFormik';
import OrganizationAddForm from './Form';
import { ErrorAlert } from 'shared';
import { message } from 'antd';

interface Props {
  visible: boolean;
  onCreate: (values: NewOrganizationInput) => Promise<void>;
  onClose: () => void;
}

const OrganizationAddModal: React.FC<Props> = (props: Props) => {
  const formikRef = React.useRef<FormikProps<NewOrganizationInput>>();
  const {
    visible,
    onClose,
  } = props;

  const [addOrganization, { error }] = useAddOrganizationMutation({
    onCompleted: onClose,
    refetchQueries: [{
      query: ViewerRolesDocument,
    }]
  });

  const handleSubmit = async (values: NewOrganizationInput) => {
    try {
      await addOrganization({ variables: { values } })
    } catch (e) {
      message.error('Wystąpił błąd przy dodawaniu organizacji');
      console.error(e);
    }
  };

  const modalProps: ModalProps = {
    title: 'Stwórz nową organizację',
    okText: 'Stwórz',
    okButtonProps: {
      icon: <PlusOutlined/>,
    }
  };

  return (
    <ModalFormik<NewOrganizationInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <Fragment>
        <OrganizationAddForm
          formikRef={formikRef}
          onSubmit={handleSubmit}
        />
        {error && <ErrorAlert error={error}/>}
      </Fragment>
    </ModalFormik>
  )
};

export default OrganizationAddModal;
