import * as yup from "yup";

export default yup.object().shape({
  document: yup
    .string()
    .required("Campo obrigatório")
    .min(11, "Preencha corretamente o CPF")
    .max(11, "Preencha corretamente o CPF"),
});
