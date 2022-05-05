describe('Duckduckgo', function (){

    it('Grafikart doit arriver en premier', function(){
        cy.viewport('iphone-3')
        cy.visit('https://duckduckgo.com/')
        cy.get('#search_form_input_homepage').type('grafikart{enter}', {force: true})
        //cy.get('#search_button_homepage').click()
        cy.get('#web_content_wrapper').contains('Grafikart' | 'Grafikart.fr')

    })
})