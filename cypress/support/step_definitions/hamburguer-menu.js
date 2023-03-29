import { Before, Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"
import hamburguerMenu_PO from "../pageObjects/unosquare-test/hamburguerMenu_PO";
import landingPage_PO from "../pageObjects/unosquare-test/landingPage_PO";

//Page Object Variables
const lp_PO = new landingPage_PO();
const hm_PO = new hamburguerMenu_PO();

Before(() => {
    cy.log("My test started executing");
})

Given('I access Amazon landing page', () => {
    lp_PO.navigateToAmazon();
});

When('I click on the left Menu', () => {
    lp_PO.clickHamburguerMenu();
})

Then(/^I verify that the elements on buscar por deparamento ([^"]*) and Programa y funcionalidades ([^"]*) are visible on the menu section$/, (dep, prog) => {
    //Iterate over the list until Buscar por Departamento
    hm_PO.verifyHamburguerMenuTitle();

    cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title ').as('menuHeaders');
    cy.get('@menuHeaders').each(($el, index, $list) => {
        cy.log('My elements index: ' + index + " and its text" + $el.text())
        cy.wrap($el)

    })
});


Then(/^I verify the element ([^"]*) is NOT visible in buscar por departamento on the menu section$/, (neg) => {
    //Iteration code
});

