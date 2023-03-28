/// <reference types="Cypress" />

// const { get } = require("cypress/types/lodash");

describe("Test contact us form via webdriverUni", () =>{

    it("Should be able to sumbit a successful submission via contact us form", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.get('[name="first_name"]').type("Abc");
        cy.get('[name="last_name"]').type("Def");
        cy.get('[name="email"]').type("myemail@email.com");
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

})
