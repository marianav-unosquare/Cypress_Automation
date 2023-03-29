/// <reference types="Cypress" />


describe("Validate WebdriverUni homepage links", () =>{

    it("Confirm links redirect to the correct pages", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.url().should('include', 'contactus')
        cy.go('back') //.go() -> allows us perform browser actions such as back 
        cy.reload()
        cy.url().should('include', 'https://www.webdriveruniversity.com/')
        //cy.reload(true)// reload without using cache
        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.go('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.back()

    });

})