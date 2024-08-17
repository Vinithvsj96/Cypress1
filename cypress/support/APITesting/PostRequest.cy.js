describe("Sample HTTP Get Request", ()=>{

    it ("Get Call", ()=>{
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body:{
            name: "morpheus",
            job: "leader"
        }
    }).its('status').should('equal',201)
    
        
    })
    
    })