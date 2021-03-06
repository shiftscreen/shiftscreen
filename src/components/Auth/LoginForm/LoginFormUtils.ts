import * as Yup from 'yup';
import { LoginInput } from 'types';

export const initialValues: LoginInput = {
  email: '',
  password: '',
  recaptcha: '',
};

export const LoginSchema = Yup.object<LoginInput>().shape({
  email: Yup.string()
    .email('W polu powinien znajdować się email')
    .required('Pole jest wymagane'),
  password: Yup.string()
    .required('Pole jest wymagane'),
  recaptcha: Yup.string()
    .required('Werfyikacja jest wymagana'),
});
