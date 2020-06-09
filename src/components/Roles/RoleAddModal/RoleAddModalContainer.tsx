import React, { Fragment } from 'react';
import { ModalProps } from 'antd/es/modal';
import { PlusOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { Typography } from 'antd';
import {
  NewRoleInput,
  Organization, OrganizationRolesDocument,
  OrganizationRolesQuery,
  Role,
  useAddRoleMutation,
  ViewerFilesDocument,
  ViewerFilesQuery
} from 'types';

import ModalFormik from 'shared/ModalFormik';
import RoleAddForm from './Form';
import { ErrorAlert } from 'shared';

const { Text } = Typography;

interface Props {
  visible: boolean;
  onCreate: (values: Role) => Promise<void>;
  onClose: () => void;
  organization: Organization;
}

const RoleAddModal: React.FC<Props> = (props: Props) => {
  const {
    visible,
    onCreate,
    onClose,
    organization,
  } = props;
  const formikRef = React.useRef<FormikProps<NewRoleInput>>();

  const [addRole, { error }] = useAddRoleMutation({
    update: (store, { data }) => {
      const current = store.readQuery<OrganizationRolesQuery>({
        query: OrganizationRolesDocument,
        variables: {
          organizationId: parseInt(organization.id, 10)
        }
      });

      if (current?.organization?.roles && data?.addRole) {
        store.writeQuery<OrganizationRolesQuery>({
          query: OrganizationRolesDocument,
          data: {
            organization: {
              ...current.organization,
              roles: [...current.organization.roles, data.addRole],
            },
          }
        });
      }
    }
  });

  const handleSubmit = async (values: NewRoleInput) => {
    try {
      await addRole({ variables: { values } });
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  const modalProps: ModalProps = {
    title: (
      <>
        Dodaj nową rolę do organizacji:&nbsp;
        <Text strong>{organization.title}</Text>
      </>
    ),
    okText: 'Dodaj',
    okButtonProps: {
      icon: <PlusOutlined/>
    }
  };

  return (
    <ModalFormik<NewRoleInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <Fragment>
        <RoleAddForm
          formikRef={formikRef}
          onSubmit={handleSubmit}
          organization={organization}
        />
        {error && <ErrorAlert error={error}/>}
      </Fragment>
    </ModalFormik>
  );
};

export default RoleAddModal;
