export default class AddSchool {
  constructor({ name, houseNumber, type, addressId }) {
    this.escola = name;
    this.numero_lograd = houseNumber;
    this.tipo_id = type;
    this.logradouro_id = addressId;
  }
}
