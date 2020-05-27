import React from 'react';
import { Form, Select } from 'formik-antd';
import { FormikBag, FormikProps } from 'formik';
import { NewRoleInput, PermissionType, useUserByEmailQueryLazyQuery } from 'generated/graphql';
import { Input, Form as DefaultForm, Typography, Alert, Row } from 'antd';
import * as R from 'ramda';

const { Option } = Select;
const { Search } = Input;
const { Text } = Typography;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

type Props = FormikBag<FormikProps<NewRoleInput>, NewRoleInput>;

const RoleAddForm: React.FC<Props> = ({ setFieldValue }) => (
  <Form name="role-add-form" {...layout}>
    <Form.Item name="permissionType" label="Uprawnienia" rules={[{ required: true }]}>
      <Select
        placeholder="Uprawnienia"
        name="permissionType"
        defaultValue={PermissionType.Editor}
      >
        <Option value={PermissionType.Admin}>Administrator</Option>
        <Option value={PermissionType.Editor}>Redaktor</Option>
      </Select>
    </Form.Item>
    <FindUser setFieldValue={setFieldValue}/>
  </Form>
);

interface FindUserProps {
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
}

const FindUser: React.FC<FindUserProps> = ({ setFieldValue }) => {
  const [getUser, { data, error, loading }] = useUserByEmailQueryLazyQuery();
  const user = data?.userByEmail;
  const userFullName = user && R.join(' ', [user.firstName, user.lastName]);

  React.useEffect(() => {
    if (user) {
      setFieldValue('userId', parseInt(user.id, 10));
    }
}, [user]);

  const handleSearch = (email: string) => (
      getUser({
        variables: { email }
      })
  );

  const selectedUserInfo = (
    <Text>
      Wybrany użytkownik:&nbsp;
      <Text strong>{userFullName}</Text>
    </Text>
  );

  const errorInfo = (
    <Alert
      message="Taki użytkownik nie istnieje"
      type="error"
      showIcon
    />
  );

  return (
    <>
      <DefaultForm.Item label="E-mail:">
        <Search
          placeholder="Podaj email użytkownika"
          type="email"
          enterButton
          onSearch={handleSearch}
          loading={loading}
        />
      </DefaultForm.Item>
      <Row align="middle" justify="center">
        {user && selectedUserInfo}
        {error && errorInfo}
      </Row>
    </>
  )
};

export default RoleAddForm;
