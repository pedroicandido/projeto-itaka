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

export const useCandidate = (data = {}) => {
  let values = {}
  for (const field of fields) {
    values[field] = data[field] ?? ''
  }
  return values
}

