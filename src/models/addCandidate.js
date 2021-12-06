export default class AddCandidateModel {
  //add orgao expedidor para rg
  constructor({
    name,
    doc,
    rg,
    emissary,
    birthDate,
    birthplace,
    skinColor,
    workSituation,
    kinship,
    email,
    houseNumber,
    complement,
    cellPhone,
    homePhone,
    messagePhone
  }) {
    this.nome = name;
    this.doc = doc;
    this.rg = rg;
    this.rg_orgao_expedidor = emissary;
    this.dt_nascimento = birthDate;
    this.naturalidade_id = birthplace;
    this.etnia_id = skinColor;
    this.etnia_id = skinColor;
    this.sit_trabalhista_id = workSituation;
    this.estado_civil_id = kinship;
    this.email = email;
    this.numero_lograd = houseNumber;
    this.complemento_lograd = complement;
    this.tel_celular = cellPhone
    this.tel_residencia = homePhone
    this.tel_recado = messagePhone
  }
}
