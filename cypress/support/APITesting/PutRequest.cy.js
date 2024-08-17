describe("Sample HTTP Get Request", ()=>{
    const bodyV={
        name: "morpheus",
        job: "zion resident"
    }

    it ("Get Call", ()=>{
    cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        // body:{
        //     name: "morpheus",
        //     job: "zion resident"
        // }
        body: bodyV

    }).its('status').should('equal',200)
    
        
    })
    
    })