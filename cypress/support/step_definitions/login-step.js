import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps"

let stub;

Before(()=>{
    cy.log("Executing before step");
    //Initializa my stub variable
    stub = cy.stub();
})

Given('I access the WebdriverUniversity Login Portal Page', () =>{
    cy.visit("https://webdriveruniversity.com/Login-Portal/index.html");
});

When("I enter a username {word}", (username)=>{
    cy.get("#text").type(username);
});

And("I enter a password {word}", (password)=>{
    cy.get("#password").type(password);
});

And("I click on the login button",()=>{
    cy.get("#login-button").click();
    cy.on('window:alert', stub); //To catch the alert
});

Then("I should be presented with the following message {word} {word}",(message, message2)=>{
//My code
    const expectedMessage = message + " " + message2;
    cy.log(expectedMessage);
    cy.log(stub.getCall(0));
    //expect(stub.getCall(0).to.be.calledWith(expectedMessage));
});