describe('Grafikart', function () {

    it('Should display comments', function () {

        cy.server()

        cy.fixture('comment.json').then(comment => {
            cy.route({
                method: 'GET',
                url: /comments\?content\=87\.json/,
                response: [comment]
            }).as('getComments')
        })
        //cy.intercept('GET', /comments\?content\=87\.json/, 'fixture:comment:json').as('getComments')
        //cy.viewport('iphone-3')
        cy.visit('https://grafikart.fr/tutoriels/carrousel-javascript-87')
        cy.get('.comment-area').scrollIntoView().as('comments')
        //cy.wait('@getComments')
        cy.get('@comments').contains('34 commentaires')

    })

})