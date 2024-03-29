import * as yup from "yup";

export default yup.object().shape({
  allergyMedications: yup.string().when("hasAllergy", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  benefits: yup
    .array()
    .of(
      yup.object({
        course: yup.object().required("Campo Obrigatório").nullable(),
        shift: yup.object().required("Campo Obrigatório").nullable(),
        hour: yup.object().required("Campo Obrigatório").nullable(),
      })
    )
    .min(1, "Insira ao menos um curso")
    .required("Campo Obrigatório"),
  birthDate: yup.string().required("Campo obrigatório"),
  birthplace: yup.string().required("Campo obrigatório"),
  controlledMedication: yup.string().when("hasControlledMedication", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  cellPhone: yup.string().required("Campo obrigatório"),
  cpf: yup
    .string()
    .required("Campo obrigatório")
    .min(14, "Preencha corretamente o CPF"),
  complement: yup.string(),
  city: yup.string(),
  district: yup.string(),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  emergencyContactSecondaryPhone: yup.string(),
  emergencyContactPrimaryPhone: yup
    .string()
    .min(14, "Preencha corretamente o telefone")
    .required("Campo obrigatório"),
  emergencyNameContact: yup.string().required("Campo obrigatório"),
  expenseEducation: yup.string().required("Campo obrigatório"),
  expenseGrossIncome: yup.string().required("Campo obrigatório"),
  expenseHealth: yup.string().required("Campo obrigatório"),
  expenseHome: yup.string().required("Campo obrigatório"),
  expenseMandatoryDiscounts: yup.string().required("Campo obrigatório"),
  expenseNetIncome: yup.string().required("Campo obrigatório"),
  expenseNote: yup.string().required("Campo obrigatório"),
  expenseNumberPeopleHouse: yup.string().required("Campo obrigatório"),
  expenseRPC: yup.string().required("Campo obrigatório"),
  familyChemicalDependency: yup.string().when("hasFamilyChemicalDependency", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  familyComposition: yup.array().min(1, "Deve conter ao menos um vínculo"),
  familyCompositionName: yup.string().required("Campo obrigatório"),
  familyCompositionAge: yup.string().required("Campo obrigatório"),
  familyCompositionFinance: yup.string().required("Campo obrigatório"),
  familyCompositionOccupation: yup.string().required("Campo obrigatório"),
  familyCompositionMaritalStatus: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),
  familyCompositionRelationship: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),
  familyCompositionScholarity: yup
    .object({
      value: yup.number(),
      label: yup.string(),
    })
    .required("Campo obrigatório")
    .nullable(),
  familyDeficiency: yup.string().when("hasFamilyDeficiency", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  familyMedicaltreatment: yup.string().when("hasFamilyMedicaltreatment", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  familyMedicineUse: yup.string().when("hasFamilyMedicineUse", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  familySocialAccompaniment: yup.string().when("hasFamilySocialAccompaniment", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  familySocialBenefit: yup.string().when("hasFamilySocialBenefit", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  fatherCpf: yup.string(),
  fatherName: yup.string(),
  hasAgreed: yup
    .bool()
    .oneOf(
      [true],
      "Você precisa aceitar os termos antes de cadastrar um cadidato."
    )
    .required("Você precisa aceitar os termos antes de cadastrar um cadidato."),
  hasAllergy: yup.string().required("Selecione uma opção"),
  hasControlledMedication: yup.string().required("Selecione uma opção"),
  hasFamilyChemicalDependency: yup.string().required("Selecione uma opção"),
  hasFamilyDeficiency: yup.string().required("Selecione uma opção"),
  hasFamilyMedicaltreatment: yup.string().required("Selecione uma opção"),
  hasFamilyMedicineUse: yup.string().required("Selecione uma opção"),
  hasFamilySocialAccompaniment: yup.string().required("Selecione uma opção"),
  hasFamilySocialBenefit: yup.string().required("Selecione uma opção"),
  homePhone: yup.string(),
  houseNumber: yup.string(),
  laborSituation: yup.string(),
  isStudent: yup.bool(),
  maritalStatus: yup.object().nullable(),
  messagePhone: yup.string(),
  motherCpf: yup.string(),
  motherName: yup.string(),
  name: yup.string().required("Campo obrigatório"),
  parentsMaritalStatus: yup.object().nullable(),
  responsible: yup.string(),
  schoolStreet: yup.string().when("isStudent", {
    is: (val) => val === true,
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  schoolDistrict: yup.string().when("isStudent", {
    is: (val) => val === true,
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  schoolName: yup.string().when("isStudent", {
    is: (val) => val === true,
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  schoolType: yup
    .object()
    .when("isStudent", {
      is: (val) => val === true,
      then: yup
        .object({
          value: yup.number(),
          label: yup.string(),
        })
        .required("Campo obrigatório")
        .nullable(),
      otherwise: yup.object().nullable(),
    })
    .nullable(),
  skinColor: yup.object().nullable(),
  specialMedicalCondition: yup.string().when("hasSpecialMedicalCondition", {
    is: (val) => val === "s",
    then: yup.string().required("Campo obrigatório"),
    otherwise: yup.string(),
  }),
  street: yup.string(),
  rg: yup.string().required("Campo obrigatório"),
  outherCourses: yup.string().notRequired(),
  uf: yup.string(),
  zipCode: yup.string(),
});
