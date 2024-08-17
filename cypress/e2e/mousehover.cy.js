describe('Test', () => {
    it( 'Task', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input.radioButton').eq(0).click()
        cy.get('#dropdown-class-example').select('option1')
        cy.get('#checkBoxOption2').click()
        cy.get('#openwindow').click()
        cy.get('#name').type('vinith')


})
})