import React from 'react';
import { Form, Input } from 'formik-antd';
import { Button } from 'antd';
import { FormikProps } from 'formik';
import * as R from 'ramda';

import { LoginInput } from 'types';
import { ReCaptchaInput } from 'shared';

type Props = FormikProps<LoginInput>;

const LoginForm: React.FC<Props> = (props: Props) => {
  const { isSubmitting, isValid, dirty } = props;
  const disableButton = R.not(R.and(isValid, dirty));

  return (
    <Form name="login-form" size="large">
      <Form.Item name="email">
        <Input name="email" type="email" placeholder="E-mail"/>
      </Form.Item>
      <Form.Item name="password">
        <Input.Password name="password" type="password" placeholder="Hasło"/>
      </Form.Item>
      <Form.Item name="recaptcha">
        <ReCaptchaInput
          name="recaptcha"
        />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        loading={isSubmitting}
        disabled={disableButton}
      >
        Zaloguj się
      </Button>
    </Form>
  );
};

export default LoginForm;
