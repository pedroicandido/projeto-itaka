export default class CardModel {
  constructor({
    cardNumber,
    cardDate,
    cardStatus,
    familySocioEconomicSituation,
    note,
    responsableId,
    otherExpenses,
  }) {
    this.data = cardDate;
    this.numero = cardNumber;
    this.outros_gastos = otherExpenses;
    this.situacao_id = cardStatus;
    this.situacao_socieconomica_familiar = familySocioEconomicSituation;
    this.obs_nescessarias = note;
    this.responsavel_id = responsableId;
    this.resp_parentesco_id = 1
  }
}
