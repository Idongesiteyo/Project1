/// <reference types = "cypress" />

describe('Sample test', function() {

    it('google test', function(){
   
        cy.visit('https://google.com')
        cy.get('.gLFyf').type('automation step by step {enter}')
        //cy.get('.gLFyf',{timeout: 6000}).type('automation step by step {enter}')
        //cy.wait(4000)
        //cy.get(':nth-child(2) > .cIkxbf > .usJj9c > h3 > .l').click()
        cy.contains('Videos').click()
    
    
    })
    

    it.only('eCommence', function(){
        cy.visit('http://www.tutorialsninja.com/demo')
        cy.get('.list-inline > .dropdown').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').contains('Login').click()
        cy.get('#input-email')
          .type('eyo22@gmx.com')
          .should('have.value', 'eyo22@gmx.com')
        cy.get('#input-password')
          .type('Password1')
        cy.get('form > .btn').click()
        cy.get('.list-group > [href="http://tutorialsninja.com/demo/index.php?route=account/logout"]').click()
        cy.contains('Account Logout').should('be.visible')
        cy.title().should('eq', 'Your Store')



    })


})
