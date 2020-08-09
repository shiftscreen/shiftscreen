import React from 'react';
import { FormikProps } from 'formik';
import { message } from 'antd';
import { ModalProps } from 'antd/es/modal';
import { SaveOutlined } from '@ant-design/icons';

import { ModalFormik } from 'shared';
import { BasicUserPartsFragment, UpdateUserInput } from 'types';
import { useUpdateUserMutation } from 'generated/graphql';
import UserEditForm from './Form';

interface Props {
  user: BasicUserPartsFragment;
  visible: boolean;
  onClose(): void;
  onCreate(values: UpdateUserInput): Promise<void>;
}

const UserEditModal: React.FC<Props> = (props) => {
  const formikRef = React.useRef<FormikProps<UpdateUserInput>>();
  const {
    visible,
    onCreate,
    onClose,
    user,
  } = props;

  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (values: UpdateUserInput) => {
    try {
      await updateUser({
        variables: {
          id: parseInt(user.id, 10),
          values
        }
      });
      onClose();
    } catch (e) {
      console.error(e);
      message.error('Wystąpił błąd przy aktualizowaniu profilu');
    }
  };

  const modalProps: ModalProps = {
    title: 'Ustawienia profilu',
    okText: 'Zapisz',
    okButtonProps: {
      icon: <SaveOutlined/>
    }
  };

  return (
    <ModalFormik<UpdateUserInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <UserEditForm
        formikRef={formikRef}
        onSubmit={handleSubmit}
        user={user}
      />
    </ModalFormik>
  );
};

export default UserEditModal;
