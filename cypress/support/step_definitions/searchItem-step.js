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
    //Iterate over a list of products and chose the second one (since the first one can be an add)
    cy.get('.sg-col-inner .a-section.a-spacing-small.a-spacing-top-small .a-section.a-spacing-none.puis-padding-right-small.s-title-instructions-style .a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 .a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').each(($el, index, $list) => {
        cy.log("Index : " + index + " : " + $el.text()) //Locate all product headers and iterate. Iterate and show the index and the text of the item from that iteration
        if(index ==3){
        cy.wrap($el).click();
        }
      });
});

Then("I verify that the price is valid",()=>{
    //The price must be greater than 0 and not be null
    // Using Alias
    // cy.get('#apex_desktop_renewedTier2AccordionRow > #corePrice_desktop > .a-section > .a-lineitem > tbody > tr > .a-span12 > .a-price > [aria-hidden="true"]').invoke('text').as('price')
    // cy.get('@price').its('value').should('be.gt', 0)
    // cy.get('.celwidget .offersConsistencyEnabled .celwidget .a-price.a-text-price.a-size-medium.apexPriceToPay .a-offscreen').each(($el, index, $list) => {
    //     cy.log("Index : " + index + " : " + $el.text()) //Locate all product headers and iterate. Iterate and show the index and the text of the item from that iteration
    //     if(index ==0){
    //     var myPrice = cy.wrap($el)
    //     const priceArr= myPrice.text().split("$");
    //     let pricesInt = parseInt(priceArr[1]);
    //     assert.isNotNull(pricesInt)
    //     assert.isAbove(pricesInt, 0, "Price should be greater than $0")

    //     }
        cy.get('#apex_desktop_renewedTier2AccordionRow > #corePrice_desktop > .a-section > .a-lineitem > tbody > tr > .a-span12 > .a-price > [aria-hidden="true"]').then($prices => {
        const priceArr = $prices.text().split("$");
        let pricesInt = parseInt(priceArr[1]);
        assert.isNotNull(pricesInt)
        assert.isAbove(pricesInt, 0, "Price should be greater than $0")
    });
});

