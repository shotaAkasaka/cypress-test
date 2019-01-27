
export default class Guide {
  visit() {
    cy.visit('/00001290/') ;
  }
  planmodal() {
    cy.get('#plan-modal-10649805-10054717').click()
  }
}
  