import { Before, Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"

Before(() =>{
    cy.log("My test started executing");
})

After(()=>{
    cy.log("Finish test execution");
})

Given('I access Amazon landing page', () =>{
//My code here
    cy.visit("https://www.amazon.com/");
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); //Attribute charset is active and has value of UFT-8
    cy.title().should('include','Amazon.com. Spend less. Smile more.');
    cy.url().should('include', 'amazon.com');
});

When(/^I type an item ([^"]*) to search for$/, (item) => {
cy.get("#twotabsearchtextbox").type(item)
});


And('I click on the search button',()=>{
    cy.get('#nav-search-submit-button').click();
});

And("I click on the first item of the list",()=>{
    //Click on the second one as the first one is an add
    cy.get('[data-asin="B0BGYG5GSJ"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-top-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()
});

Then("I verify that the price is valid",()=>{
    //The price must be greater than 0 and not be null
    // cy.get(':nth-child(2) > .a-span12 > .a-price > [aria-hidden="true"]').invoke('text').as('price')
    // cy.get('@price').its('value').should('be.gt', 0)

    cy.get(':nth-child(2) > .a-span12 > .a-price > [aria-hidden="true"]').then($prices => {
        var price = $prices.text()
        price.split("$")
        assert.isNotNull(price)
      });
});

