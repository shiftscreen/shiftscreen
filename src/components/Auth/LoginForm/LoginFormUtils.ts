import * as Yup from 'yup';
import gql from 'graphql-tag';
import { LoginInput } from 'types';

export const initialValues: LoginInput = {
  email: '',
  password: ''
};

export const LoginSchema = Yup.object<LoginInput>().shape({
  email: Yup.string()
    .email('W polu powinien znajdować się email')
    .required('Pole jest wymagane'),
  password: Yup.string()
    .required('Pole jest wymagane'),
});

export const LOGIN = gql`
    mutation Login($data: LoginInput!) {
        login(loginData: $data) {
            tokenType
            accessToken
            expiresIn
        }
    }
`;
