export default (fields, data = {}) => {
  let values = {};
  for (const field of fields) {
    values[field] = data[field] ?? "";
  }
  return values;
};
