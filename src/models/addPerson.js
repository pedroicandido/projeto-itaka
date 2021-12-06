import dayjs from "dayjs";

export default class AddPersonModel {
  constructor({
    addressId,
    birthDate,
    birhPlaceId,
    civilStatus,
    document,
    emissary,
    gender,
    houseNumber,
    income,
    name,
    rg,
    schooling,
    skinColor,
    workSituation,
  }) {
    this.estado_civil_id = civilStatus;
    this.dt_nascimento = birthDate;
    this.sexo_id = gender;
    this.doc = document;
    this.nome = name;
    this.rg = rg;
    this.escolaridade = schooling;
    this.rg_orgao_expedidor = emissary;
    this.etnia_id = skinColor;
    this.logradouro_id = addressId;
    this.numero_lograd = houseNumber;
    this.sit_trabalhista_id = workSituation;
    this.renda = income;
    this.data = dayjs(new Date()).format("DD/MM/YYYY");
    this.naturalidade_id = birhPlaceId
  }
}
