/// <reference types="Cypress" />

const { get } = require("cypress/types/lodash");

describe("Test contact us form via webdriverUni", () =>{

    it("Should be able to sumbit a successful submission via contact us form", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us > .thumbnail > .section-title > h1').click()
        cy.get('#udemy-promo-thumbnail').contains("My Courses & Promo Codes")

    });

})
