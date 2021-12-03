export default class AddPersonModel {
  constructor({
    civilStatus,
    birthDate,
    gender,
    document,
    name,
    rg,
    skinColor,
    address,
    houseNumber
  }) {
    this.estado_civil = civilStatus;
    this.dt_nascimento = birthDate;
    this.sexo_id = gender;
    this.doc = document;
    this.nome = name;
    this.rg = rg;
    this.etnia_id = skinColor;
    this.logradouro_id = address;
    this.numero_lograd = houseNumber
  }
}
