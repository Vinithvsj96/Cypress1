describe('Add to cart perform', () => {
 it( 'to buy', () => {
    cy.visit('https://www.amazon.in/')
    cy.get('#twotabsearchtextbox').type('mobiles')
    cy.get('#nav-search-submit-button').click()
    cy.get('[data-asin="B0D83ZN7TR"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium')
  })
})