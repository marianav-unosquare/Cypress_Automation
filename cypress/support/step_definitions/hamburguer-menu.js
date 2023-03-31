import { Before, Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"
import hamburguerMenu_PO from "../pageObjects/unosquare-test/hamburguerMenu_PO";
import landingPage_PO from "../pageObjects/unosquare-test/landingPage_PO";
const dep = require('../dataJson/hamburguerMenu/BuscarPorDepartamento.json');
const prog = require('../dataJson/hamburguerMenu/ProgramayFuncionalidades.json');

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

Then(/^I verify that the elements on buscar por deparamento and Programa y funcionalidades are visible on the menu section$/, () => {
    //Iterate over the list until Buscar por Departamento
    hm_PO.verifyHamburguerMenuTitle();
    hm_PO.verifyHeadersPresent();
    hm_PO.verifyElementsShopByDpt(dep);
    hm_PO.verifyElementsProgramsFeatures(prog);
});


Then(/^I verify the element ([^"]*) is NOT visible in buscar por departamento on the menu section$/, (neg) => {
    //Iteration code
});

