import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório').min(6, 'A senha deve conter no mínimo 6 caracteres'),
})