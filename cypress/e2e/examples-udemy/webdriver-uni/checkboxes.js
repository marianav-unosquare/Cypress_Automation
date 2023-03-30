/// <reference types="Cypress" />

describe("Test checkbox via webdriverUni", () =>{

    it("Check and Validate checkbox", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        // cy.get('#checkboxes > :nth-child(1) > input').check();
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('not.be.checked');
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        // cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked');
    });

    it("Uncheck and Validate checkbox", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.get(':nth-child(5)>input').uncheck().should('not.be.checked');
    });

    it("check Multiple and Validate checkbox", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.get('input[type="checkbox"]').check("option-1", "option-2", "option-3", "option-4").should('be.checked');
    });

})
