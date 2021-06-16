import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Senhas devem ser iguais'),
})