import * as yup from "yup";

export default yup.object().shape({
  birthDate: yup.string().required('Campo obrigatório'),
  birthplace: yup.string().required('Campo obrigatório'),
  cpf: yup.string().required('Campo obrigatório').min(14, 'Preencha corretamente o CPF'),
  controlledMedication: yup.string().when('hasControlledMedication', {
    is: val => val === 's',
    then: yup.string().required('Campo obrigatório'),
    otherwise: yup.string(),
  }),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  familyChemicalDependency: yup.string().when('hasFamilyChemicalDependency', {
    is: val => val === 's',
    then: yup.string().required('Campo obrigatório'),
    otherwise: yup.string(),
  }),
  familyDeficiency: yup.string().when('hasFamilyDeficiency', {
    is: val => val === 's',
    then: yup.string().required('Campo obrigatório'),
    otherwise: yup.string(),
  }),
  familyMedicaltreatment: yup.string().when('hasFamilyMedicaltreatment', {
    is: val => val === 's',
    then: yup.string().required('Campo obrigatório'),
    otherwise: yup.string(),
  }),
  familyMedicineUse: yup.string().when('hasFamilyMedicineUse', {
    is: val => val === 's',
    then: yup.string().required('Campo obrigatório'),
    otherwise: yup.string(),
  }),
  familySocialAccompaniment: yup.string().when('hasFamilySocialAccompaniment', {
    is: val => val === 's',
    then: yup.string().required('Campo obrigatório'),
    otherwise: yup.string(),
  }),
  familySocialBenefit: yup.string().when('hasFamilySocialBenefit', {
    is: val => val === 's',
    then: yup.string().required('Campo obrigatório'),
    otherwise: yup.string(),
  }),
  hasFamilyChemicalDependency: yup.string().required('Selecione uma opção'),
  hasFamilyDeficiency: yup.string().required('Selecione uma opção'),
  hasFamilyMedicaltreatment: yup.string().required('Selecione uma opção'),
  hasFamilyMedicineUse: yup.string().required('Selecione uma opção'),
  hasFamilySocialAccompaniment: yup.string().required('Selecione uma opção'),
  hasFamilySocialBenefit: yup.string().required('Selecione uma opção'),
  hasControlledMedication: yup.string().required('Selecione uma opção'),
  rg: yup.string().required('Campo obrigatório'),
  name: yup.string().required('Campo obrigatório'),

})