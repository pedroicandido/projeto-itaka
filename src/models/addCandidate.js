export default class AddCandidateModel {
  //add orgao expedidor para rg
  constructor({
    addressId,
    allergyMedications,
    birthDate,
    birhPlaceId,
    civilStatus,
    complement,
    controlledMedication,
    document,
    emissary,
    email,
    emergencyNameContact,
    familyComposition,
    gender,
    grade,
    homePhone,
    houseNumber,
    income,
    messagePhone,
    name,
    rg,
    schoolClass,
    schoolId,
    schooling,
    specialMedicalCondition,
    skinColor,
    workSituation,
  }) {
    this.alergia = allergyMedications;
    this.complemento_lograd = complement;
    // this.data = dayjs(new Date()).format("DD/MM/YYYY");
    this.doc = document;
    this.dt_nascimento = birthDate;
    this.email = email;
    this.escola_id = schoolId;
    this.escolaridade_id = schooling;
    this.estado_civil_id = civilStatus;
    this.etnia_id = skinColor;
    this.logradouro_id = addressId;
    this.naturalidade_id = birhPlaceId;
    this.renda = income;
    this.medicacao_controlada = controlledMedication;
    this.nome = name;
    this.nome_contato_emerg = emergencyNameContact;
    this.numero_lograd = houseNumber;
    this.rg = rg;
    this.rg_orgao_expedidor = emissary;
    this.serie = grade;
    this.sexo_id = gender;
    this.sit_medica_especial = specialMedicalCondition;
    this.sit_trabalhista_id = workSituation;
    this.tel_residencia = homePhone
    this.tel_recado = messagePhone
    this.turma = schoolClass
    this.grupo_familiar = familyComposition
  }
}
