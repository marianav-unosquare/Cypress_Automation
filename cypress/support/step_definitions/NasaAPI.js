import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps"

let stub;
var apiToken= '5ZpzNnl9vn4lC5f5xAXmvXWE2fzXETV4SdRfrpp6';

Before(()=>{
    cy.log("Executing before step");
    //Initializa my stub variable
    stub = cy.stub();
})

Given('I access NASA landing page', ()=>{
    cy.visit('')
})
