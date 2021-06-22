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
  "fatherCpf",
  "fatherName",
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
  "parentsMaritalStatus",
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
  "complement",
  "cellPhone",
  "city",
  "cpf",
  "district",
  "email",
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
  "parentsMaritalStatus",
  "responsible",
  "rg",
  "skinColor",
  "street",
  "uf",
  "zipCode"
];


export const educationFields = ["isStudent", "schooling", "schoolClass", "schoolDistrict", "schoolName", "schoolShift", "schoolStreet", "schoolType", "outherCourses"]

export const benefitsFields = ["benefits"]
//NAO DEIXAR ASSIM
const test = [...candidateFields, ...educationFields, ...benefitsFields]

export const makeDefaultValues = (data = {}) => {
  const defaultValues = generateValues(test, data)
  return defaultValues;
};
