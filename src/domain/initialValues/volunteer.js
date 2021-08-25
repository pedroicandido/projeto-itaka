import generateValues from "../helpers/makeDefaultValues";

const fields = [
  "birthDate",
  "birthplace",
  "city",
  "complement",
  "cpf",
  "district",
  "email",
  "houseNumber",
  "maritalStatus",
  "name",
  "nationality",
  "occupation",
  "phone",
  "rg",
  "scholarity",
  "street",
  "uf",
  "zipCode",
];

export const makeDefaultValues = (data = {}) => {
  const defaultValues = generateValues(fields, data);
  return defaultValues;
};
