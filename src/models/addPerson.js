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
    houseNumber,
    workSituation,
    emissary,
    income
  }) {
    this.estado_civil = civilStatus;
    this.dt_nascimento = birthDate;
    this.sexo_id = gender;
    this.doc = document;
    this.nome = name;
    this.rg = rg;
    this.rg_orgao_expedidor = emissary;
    this.etnia_id = skinColor;
    this.logradouro_id = address;
    this.numero_lograd = houseNumber
    this.sit_trabalhista_id = workSituation;
    this.renda = income
  }
}
