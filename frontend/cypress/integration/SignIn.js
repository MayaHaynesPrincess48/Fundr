describe('Sign In', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/signin')
      cy.get('.MuiToolbar-root > .MuiTypography-root').should('be.visible')
    })
  
    it('successfully logs in', () => {
     
      cy.get('#email')
      .should('be.visible')
      .type('alice123@gmail.com')
  
        cy.get('#password')
        .should('be.visible')
        .type("alicegar123")
  
        cy.get('.PrivateSwitchBase-input').check()
  
        cy.contains('Sign In')
          .should('be.visible')
          .click()
        cy.visit(Cypress.config("baseUrl") + "/businessidea");
  
        cy.get('.MuiAvatar-root').click()
        cy.contains('Login')
        .should('be.visible')
        cy.visit(Cypress.config("baseUrl"));
  
      })
  })