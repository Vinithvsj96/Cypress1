describe("Sample HTTP Get Request", ()=>{

    it ("Get Call", ()=>{
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body:{
            name: "morpheus",
            job: "leader"
        }
    })
    .then((response) => {
        expect(response.status).to.equal(201)
    
      })
    })
    
    })