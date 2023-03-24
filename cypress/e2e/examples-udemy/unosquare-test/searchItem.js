/// <reference types="Cypress" />

describe("Test search an item on Amazon webpage", () =>{

    it("Should be able to search for an item on Amazon Webpage", ()=>{
        //Cypress code goes here
        cy.visit('https://www.amazon.com/')
        cy.log("Mytest starts here")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8') //Attribute charset is active and has value of UFT-8
        cy.title().should('include','Amazon.com. Spend less. Smile more.')
        cy.url().should('include', 'amazon.com')
        cy.get('#twotabsearchtextbox').type("Iphone 14 pro max phone")
        cy.get('#twotabsearchtextbox').should('have.attr', 'name', 'field-keywords')
        cy.get('#nav-search-submit-button').click()
        cy.get('[data-asin="B0BGYG5GSJ"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-top-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()
        cy.get(':nth-child(2) > .a-span12 > .a-price > [aria-hidden="true"]').then($prices => {
            var price =$prices.text();
            cy.log(price);
            cy.log("iphone 14 pro max price : " + price);
            price== '$779.00'
          });
        cy.log("Finish my test here")

    });

})
