// describe('login page', function() {
//     it('visit login', function() {
//       cy.visit('https://my.ikyu.com/login/') // change URL to match your dev URL
//     })
// })

describe('success login', function() {
    it('login', function() {
      cy.visit('https://my.ikyu.com/login/') // change URL to match your dev URL
      cy.get('#text_member_id').type('username')
      cy.get('#password_member_password').type('password')
      cy.get('#button_auth_member').click()

      // ログイン成功なら、トップページに遷移する
      cy.url().should('eq', 'https://www.ikyu.com/')
    })
})