const fields = [
  "name",
  "initialHour",
  "finalHour"
];

export default (data = {}) => {
  let values = {}
  for (const field of fields) {
    values[field] = data[field] ?? ''
  }
  return values
}