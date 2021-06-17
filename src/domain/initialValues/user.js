const fields = [
  "email",
  "name",
  "password",
  "passwordConfirmation"
];

export default (data = {}) => {
  let values = {}
  for (const field of fields) {
    values[field] = data[field] ?? ''
  }
  return values
}

