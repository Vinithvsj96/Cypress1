
const fs = require('fs');
const logindetails = require('../fixtures/login.json')
const { dirname } = require('path');
describe('Running multiple login credentials in the login page ', () => {
    let multipleLogin;
    before(  () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.fixture('login').then((loginTest)=>{
            // console.log({loginTest});
            
            multipleLogin=loginTest;
            
        })
     })
    
     it('Create file',()=>{
         let content =  Object.keys(logindetails[0]).join()+'\n'
         logindetails.forEach(login=>{
            content=content+Object.values(login).join()+'\n';
         });
         
        // check cypress.config.js we've created custom task for handeling fs
        // error due to login.csv file is existing login1.csv will work fine for you
        cy.task('writeFile',{path:__dirname+"/login.csv",content:content})
     })
     


    it('perform login with valid credentials',()=>{
    logindetails.forEach((data) => {
        cy.get('#username').type(data.username);
        cy.get('#password').eq(0).type(data.password);
        cy.get('#submit').should('be.visible').click()
        
    })

    })
})

