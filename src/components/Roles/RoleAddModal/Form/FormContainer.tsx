import React from 'react';
import { Formik, FormikProps } from 'formik';
import { NewRoleInput, Organization, PermissionType } from 'types';

import View from './FormView';
import { AddRoleSchema } from './FormUtils';

interface Props {
  formikRef: React.Ref<FormikProps<NewRoleInput> | undefined>
  onSubmit(values: NewRoleInput): Promise<void>;
  organization: Organization;
}

const RoleAddForm: React.FC<Props> = (props: Props) => {
  const {
    onSubmit,
    formikRef,
    organization,
  } = props;

  const initialValues: NewRoleInput = {
    permissionType: PermissionType.Editor,
    organizationId: parseInt(organization.id, 10),
    userId: 0,
  };

  return (
    <Formik<NewRoleInput>
      initialValues={initialValues}
      validationSchema={AddRoleSchema}
      onSubmit={onSubmit}
      children={View}
      enableReinitialize

      // @ts-ignore due to invalid Formik typings
      innerRef={formikRef}
    />
  );
};

export default RoleAddForm;
