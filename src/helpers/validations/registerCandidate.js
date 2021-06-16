import * as yup from "yup";

export default yup.object().shape({
  birthDate: yup.string().required('Campo obrigatório'),
  birthplace: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório').min(14, 'Preencha corretamente o CPF'),
  controlledMedication: yup.string().when('hasControlledMedication', {
    is: val => val === 's',
    then: yup.string().required('Campo obrigatório'),
    otherwise:  yup.string(),
  }),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  hasControlledMedication: yup.string().required('Selecione uma opção'),
  rg: yup.string().required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),

})