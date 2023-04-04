import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps"

let stub;
var apiToken= '5ZpzNnl9vn4lC5f5xAXmvXWE2fzXETV4SdRfrpp6';
var myUrl;

Before(()=>{
    cy.log("Executing before step");
    //Initializa my stub variable
    stub = cy.stub();
    //Initialize my fixture file
    cy.fixture('nasa-APOD').as('apod');

});

Given('I enter to the APOD endpoint on the NASA website using my access token', ()=>{
    cy.get('@apod').then((apod)=>{
    myUrl=(apod.baseUrl + apod.endpoint + apod.accessToken);
    cy.log(myUrl);
    cy.request(myUrl);
    });
});

When('I send a GET request', ()=>{

});

Then('I validate status code 200', ()=>{

});

And('I validate status body',()=>{

});
