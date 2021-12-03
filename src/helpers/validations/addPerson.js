import * as yup from "yup";

export default yup.object().shape({
  
  birthDate: yup
    .string()
    .required("Campo obrigatório")
    .min(10, "Preencha corretamente a data")
    .max(10, "Preencha corretamente a data"),
  civilStatus: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),

  document: yup
    .string()
    .required("Campo obrigatório")
    .min(11, "Preencha corretamente o CPF")
    .max(11, "Preencha corretamente o CPF"),
  gender: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),
  skinColor: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),
  name: yup.string().required("Campo obrigatório"),
  rg: yup.string().required("Campo obrigatório"),
});
