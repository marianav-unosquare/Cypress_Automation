/// <reference types="Cypress" />


describe("Test contact us form via webdriverUni", () =>{

    before(function(){
        cy.fixture('userDetails').as('user'); //Initialize external file and use an alias
    })
    
    it("Should be able to sumbit a successful submission via contact us form", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.get("@user").then((user) =>{
            cy.get('[name="first_name"]').type(user.first_name);//Use the alias in our test
            cy.get('[name="last_name"]').type(user.last_name);
            cy.get('[name="email"]').type(user.email);
        })
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

});
