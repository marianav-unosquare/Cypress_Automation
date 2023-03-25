/// <reference types="cypress" />


//Command to open CypressApp: node_modules/.bin/cypress open

describe('Inspect automation test store items using chain of commands', () => {
    it('Click on the first item using item text', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selected the following item : "+ itemHeaderText.text())
        })
    });
    it.only('Click on the first item using item text', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
        
    });
});