import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  initialHour: yup.string().required('Campo obrigatório'),
  finalHour: yup.string().required('Campo obrigatório'),
})