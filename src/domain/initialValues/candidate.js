import generateValues from "../helpers/makeDefaultValues";

const fields = [
  "allergyMedications",
  "benefits",
  "birthDate",
  "birthplace",
  "complement",
  "cellPhone",
  "city",
  "cpf",
  "controlledMedication",
  "district",
  "email",
  "emergencyContact",
  "emergencyContactPrimaryPhone",
  "emergencyContactSecondaryPhone",
  "familyChemicalDependency",
  "familyComposition",
  "familyCompositionAge",
  "familyCompositionFinance",
  "familyCompositionMaritalStatus",
  "familyCompositionName",
  "familyCompositionOccupation",
  "familyCompositionRelationship",
  "familyCompositionScholarity",
  "familyDeficiency",
  "familyMedicaltreatment",
  "familyMedicineUse",
  "familySocialAccompaniment",
  "familySocialBenefit",
  "familySocioEconomicSituation",
  "familyCompositionTotalFinance",
  "fatherCpf",
  "fatherName",
  "gender",
  "hasAgreed",
  "hasAllergy",
  "hasControlledMedication",
  "hasFamilyChemicalDependency",
  "hasFamilyDeficiency",
  "hasFamilyMedicaltreatment",
  "hasFamilyMedicineUse",
  "hasFamilySocialAccompaniment",
  "hasFamilySocialBenefit",
  "houseNumber",
  "homePhone",
  "isStudent",
  "laborSituation",
  "maritalStatus",
  "messagePhone",
  "motherCpf",
  "motherName",
  "name",
  "note",
  "otherExpenses",
  "responsible",
  "rg",
  "skinColor",
  "specialMedicalCondition",
  "street",
  "uf",
  "zipCode",
];

export const candidateFields = [
  "birthDate",
  "birthplace",
  "cardNumber",
  "cardDate",
  "cardStatus",
  "complement",
  "cellPhone",
  "city",
  "cpf",
  "district",
  "email",
  "emissary",
  "fatherCpf",
  "fatherName",
  "homePhone",
  "houseNumber",
  "laborSituation",
  "maritalStatus",
  "messagePhone",
  "motherCpf",
  "motherName",
  "name",
  "responsible",
  "rg",
  "skinColor",
  "street",
  "uf",
  "zipCode",
];

export const educationFields = [
  "isStudent",
  "grade",
  "schooling",
  "schoolClass",
  "schoolDistrict",
  "schoolName",
  "schoolShift",
  "schoolStreet",
  "schoolType",
  "outherCourses",
];

export const benefitsFields = ["benefits"];

export const healthFields = [
  "allergyMedications",
  "controlledMedication",
  "emergencyNameContact",
  "emergencyContactPrimaryPhone",
  "emergencyContactSecondaryPhone",
  "hasAllergy",
  "hasControlledMedication",
  "hasSpecialMedicalCondition",
  "specialMedicalCondition",
];

export const socialFamilyConditionFields = [
  "hasFamilyChemicalDependency",
  "hasFamilyDeficiency",
  "hasFamilyMedicaltreatment",
  "hasFamilyMedicineUse",
  "hasFamilySocialAccompaniment",
  "hasFamilySocialBenefit",
  "familyChemicalDependency",
  "familyDeficiency",
  "familyMedicineUse",
  "familyMedicaltreatment",
  "familySocialAccompaniment",
  "familySocialBenefit"
];

export const familyCompositionFields = [
  "familyCompositionData",
  "familyCompositionAge",
  "familyCompositionFinance",
  "familyCompositionMaritalStatus",
  "familyCompositionName",
  "familyCompositionOccupation",
  "familyCompositionRelationship",
  "familyCompositionScholarity"
]

export const expenseFields = [
  "expenseEducation",
  "expenseGrossIncome",
  "expenseHealth",
  "expenseHome",
  "expenseMandatoryDiscounts",
  "expenseNetIncome",
  "expenseNote",
  "expenseNumberPeopleHouse",
  "expenseRPC",
]

const combineInitialValues = [
  ...candidateFields,
  ...educationFields,
  ...benefitsFields,
  ...healthFields,
  ...socialFamilyConditionFields,
  ...familyCompositionFields,
  "familyComposition",
  "familyCompositionTotalFinance",
  ...expenseFields
];

export const makeDefaultValues = (data = {}) => {
  const defaultValues = generateValues(combineInitialValues, data);
  return defaultValues;
};
