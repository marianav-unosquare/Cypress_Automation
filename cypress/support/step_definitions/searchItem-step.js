import { Before, Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"
import landingPage_PO from "../pageObjects/unosquare-test/landingPage_PO";
import resultPage_PO from "../pageObjects/unosquare-test/resultPage_PO";
import itemDescription_PO from "../pageObjects/unosquare-test/itemDescription_PO";

Before(() =>{
    cy.log("My test started executing");
})

After(()=>{
    cy.log("Finish test execution");
})

//Page Object Variables
const lp_PO = new landingPage_PO();
const rp_PO = new resultPage_PO();
const id_PO = new itemDescription_PO();

Given('I access Amazon landing page', () =>{
    lp_PO.navigateToAmazon();
});

When(/^I type an item ([^"]*) to search for$/, (item) => {
    lp_PO.typeItemOnSearchBar(item);
});


And('I click on the search button',()=>{
    lp_PO.clickSearchButton();
});

And("I click on the first item of the list",()=>{
   rp_PO.clickOnItemFromResultList();
});

Then("I verify that the price is valid",()=>{
    id_PO.verifyPriceIsValid();
});

