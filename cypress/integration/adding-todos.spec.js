/// <reference types = "cypress"/>

describe ('add todo item to the todo list', () => {

    it('should add a new item to the list',  () =>{
 
        cy.visit('https://todomvc.com/examples/angularjs/#/')

        cy.get('.new-todo').type('Feed the cats{enter}')

        cy.contains('.todo-list li','Feed the cats').should('be.visible')

    })
})

    describe('filter the todo list', function(){
        it('should filter the todo list', function(){
            cy.visit('https://todomvc.com/examples/angularjs/#/')

            cy.get('.new-todo').type('Feed the cats{enter}').type('walk the dog{enter}')
    
            cy.get('.todo-list label').should('have.length',2)

            cy.contains('li', 'feed the cats').find('.toggle').click()
    

        })

    
})


