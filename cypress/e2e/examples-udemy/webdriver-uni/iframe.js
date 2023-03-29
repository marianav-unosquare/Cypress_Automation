
/// <reference types="Cypress" />

describe("Handling Iframe & Modals", () =>{

    it("Handling webdriver Iframe & Modals", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true}) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.get('#frame').then($iframe =>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe') //Wrap allows us to use cypress commands
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should(($expectedText)=>{
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...');
        })
        cy.get('@modal').contains('Close').click()
    });

})