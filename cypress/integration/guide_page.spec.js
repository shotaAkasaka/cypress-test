

describe('Guide page', function() {
    it('guide page', function() {
      cy.visit('/00001290/') // change URL to match your dev URL
    })
})

describe('Plan Modal', function(){
    it('plan modal', function(){
      cy.get('#plan-modal-10664896-10054717').click()
    })
})