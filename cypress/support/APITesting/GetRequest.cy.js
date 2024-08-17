describe("Sample HTTP Get Request", ()=>{

it ("Get Call", ()=>{

cy.request('GET' ,'https://reqres.in/api/users?page=2')
.its('status')
.should('eq',200);
    
})

})