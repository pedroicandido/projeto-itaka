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
  "fatherCpf",
  "fatherName",
  "hasAllergy",
  "hasControlledMedication",
  "houseNumber",
  "homePhone",
  "isStudent",
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
  "zipCode",

];

export const useCandidate = (data = {}) => {
  let values = {}
  for (const field of fields) {
    values[field] =  data[field] ?? ''
  }
  return values
}

