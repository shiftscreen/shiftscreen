import React from 'react';
import * as R from 'ramda';
import { Checkbox, Form, Input, SubmitButton } from 'formik-antd';
import { FormikProps } from 'formik';
import { Col, Row } from 'antd';

import { NewUserInput } from 'types';
import { ReCaptchaInput } from 'shared';

type Props = FormikProps<NewUserInput>;

const SignUpForm: React.FC<Props> = (props: Props) => {
  const { isSubmitting, isValid, dirty } = props;
  const disableButton = R.not(R.and(isValid, dirty));

  return (
    <Form name="sign-in-form" size="large">
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.Item name="firstName">
            <Input name="firstName" type="text" placeholder="Imię"/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="lastName">
            <Input name="lastName" type="text" placeholder="Nazwisko"/>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="email">
        <Input name="email" type="email" placeholder="E-mail"/>
      </Form.Item>
      <Form.Item name="password">
        <Input.Password name="password" type="password" placeholder="Hasło"/>
      </Form.Item>
      <Form.Item name="confirmPassword">
        <Input.Password name="confirmPassword" type="password" placeholder="Powtórz hasło"/>
      </Form.Item>
      <Form.Item name="recaptcha">
        <ReCaptchaInput
          name="recaptcha"
        />
      </Form.Item>
      <Row>
        <Col span={14}>
          <Form.Item name="rulesAccepted" valuePropName="checked">
            <Checkbox name="rulesAccepted">Akceptuję regulamin</Checkbox>
          </Form.Item>
        </Col>
        <Col span={10}>
          <SubmitButton
            type="primary"
            loading={isSubmitting}
            disabled={disableButton}
          >
            Zarejestruj się
          </SubmitButton>
        </Col>
      </Row>
    </Form>
  );
};

export default SignUpForm;
