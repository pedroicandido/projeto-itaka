import * as yup from "yup";

export default yup.object().shape({
  birthDate: yup
    .string()
    .required("Campo obrigatório")
    .min(10, "Preencha corretamente a data")
    .max(10, "Preencha corretamente a data"),
  cep: yup
    .string()
    .required("Campo obrigatório")
    .min(9, "Preencha corretamente o CEP")
    .max(9, "Preencha corretamente o CEP"),
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
  emissary: yup.string().required("Campo obrigatório"),
  gender: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),
  houseNumber: yup.string().required("Campo obrigatório"),
  skinColor: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),
  name: yup.string().required("Campo obrigatório"),
  rg: yup.string().required("Campo obrigatório"),
  workSituation: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),
});
