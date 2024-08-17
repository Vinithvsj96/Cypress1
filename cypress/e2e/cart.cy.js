describe('Add to cart perform', () => {
    it( 'to buy', () => {
       cy.visit('https://rahulshettyacademy.com/angularpractice/')
       cy.get('[name="name"]').eq(0).type('vinith')
       cy.get('[name="email"]').type('vinithsaravanan96@gmail.com')
       cy.get('#exampleInputPassword1').type(123456789)
       cy.get('#exampleCheck1').click()
      cy.get('#exampleFormControlSelect1').type('male')
      cy.get('#inlineRadio1').click()
       cy.get('[name="bday"]').type('1996-11-25')
       cy.get('[type="submit"]').click()
       cy.get('a.nav-link').eq(1).click()
       cy.get('.btn.btn-info').eq(0).click()
       cy.get('.btn.btn-info').eq(2).click()
    // cy.get('app-card-list app-card').each(($phones)=>{

      
    //   if($phones.text().includes('Nokia')){
    //     cy.wrap($phones).find('button').click()
    //   }
    //   if($phones.text().includes('black').click()){
    //     cy.wrap($phones.find('button').click())
    //   }
    // })
      //  cy.get('a.nav-link.btn.btn-primary').click()
      //  cy.get('button.btn.btn-success').click()
      //  cy.get('#country').type('in')
      //  cy.get()


     })
   })