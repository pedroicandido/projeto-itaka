import generateValues from "../helpers/makeDefaultValues"

const fields = [
  "cress",
  "email",
  "name",
  "password",
  "passwordConfirmation"
];

export const makeDefaultValues = (data = {}) => {
  const defaultValues = generateValues(fields, data);
  return defaultValues;
};
