/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriver uni", () =>{

    it("Select specific values via dropdown list", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        //Based on attributes
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-3').select('JQuery').should('contain', 'JQuery')  //Based in text value
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').should('contain', 'TestNG')

    });

});