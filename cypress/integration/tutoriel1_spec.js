const width = 1280
const height = 800
const inViewport = function (items) {
    expect(items[0].getBoundingClientRect().left).to.be.greaterThan(0)
    expect(items[0].getBoundingClientRect().left + items[0].getBoundingClientRect().width / 2).to.be.lessThan(Cypress.$(cy.state('window')).width())
}

const outViewport = function (items) {
    expect(items[0].getBoundingClientRect().left + items[0].getBoundingClientRect().width / 2).to.be.greaterThan(Cypress.$(cy.state('window')).width())
}

describe('Tutoriel', function () {

    context('Carousel', function () {
        beforeEach(function () {
            cy.visit('https://grafikart.fr/demo/JS/Carousel/index.html')
            cy.viewport(width, height)
            cy.get('#carousel0 .carousel__next').as('next')
            cy.get('#carousel0 .carousel__item:contains("Mon titre 1")').as('Slide 1')
            cy.get('#carousel0 .carousel__item:contains("Mon titre 2")').as('Slide 2')
            cy.get('#carousel0 .carousel__item:contains("Mon titre 5")').as('Slide 5')
        })

        it('Slide to the next itel', function () {
            cy.get('@Slide 1').should(inViewport)
            cy.get('@Slide 5').should(outViewport)
            cy.get('@next').click()
            cy.get('@Slide 1').should(slide => {
                expect(slide[0].getBoundingClientRect().left).to.be.lessThan(0)
            })
            cy.get('@Slide 5').should(inViewport)

        })

        it('Slide to the next item iphone', function () {
            cy.viewport('iphone-3')
            cy.get('@Slide 1').should(inViewport)
            cy.get('@Slide 2').should(outViewport)
            cy.get('@next').click()
            cy.get('@Slide 1').should(slide => {
                expect(slide[0].getBoundingClientRect().left).to.be.lessThan(0)
            })
            cy.get('@Slide 2').should(inViewport)

        })
    })
})

//ctrl + shift + L - modify all