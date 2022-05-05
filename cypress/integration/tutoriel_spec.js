describe('Tutoriel', function () {

    context('Carousel', function () {
        beforeEach(function () {
            cy.visit('https://grafikart.fr/demo/JS/Carousel/index.html')
            cy.viewport(1280, 800)
        })

        it('Slide to the next itel', function () {
            cy.get('#carousel0 .carousel__next').as('next')
            cy.get('#carousel0 .carousel__item:contains("Mon titre 1")').as('Slide 1')
            cy.get('#carousel0 .carousel__item:contains("Mon titre 5")').as('Slide 5')
            cy.get('@Slide 1').should(slide => {
                expect(slide[0].getBoundingClientRect().left).to.be.greaterThan(0)
                expect(slide[0].getBoundingClientRect().left).to.be.lessThan(1280)
            })
            cy.get('@Slide 5').should(slide => {
                expect(slide[0].getBoundingClientRect().left).to.be.greaterThan(0)
            })
            cy.get('@next').click()
            cy.get('@Slide 1').should(slide => {
                expect(slide[0].getBoundingClientRect().left).to.be.lessThan(0)
            })
            cy.get('@Slide 5').should(slide => {
                expect(slide[0].getBoundingClientRect().left).to.be.greaterThan(0)
                expect(slide[0].getBoundingClientRect().left).to.be.lessThan(1280)
            })
        })
    })
})