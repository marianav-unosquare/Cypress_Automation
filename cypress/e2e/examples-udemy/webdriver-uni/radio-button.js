/// <reference types="Cypress" />

describe("Test radio buttons via webdriverUni", () =>{

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
    });

    it("Check and Validate radio buttons", ()=>{
        //Cypress code goes here
        
        cy.get('#radio-buttons').find('[type="radio"]').first().check() //Locate the elements and the radio buttons itself
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()
    });

    it("Validate state of specific radio button", ()=>{
        //Cypress code goes here
       
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled') //state of radiobutton is disabled

    });
});