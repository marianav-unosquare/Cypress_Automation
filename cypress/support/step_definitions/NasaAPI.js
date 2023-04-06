import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps"
const asteroidNeo = require('../../fixtures/Asteroids-NeoWs.json')

var myUrl;
var result;
var request;

Before(() => {
    //Initialize my fixture file for APOD
    cy.fixture('nasa-APOD').as('apod');
    cy.get('@apod').then((apod) => {
    myUrl = apod.baseUrl + apod.endpoint + apod.accessToken;
    });
});

Given('I send a Get request to the APOD endpoint on the NASA website using my access token', () => {
    result = cy.request(myUrl);
    result.its("status").should("equal", 200);
});

Then(/^I validate status code 200 and I validate status body has correct ([^"]*), ([^"]*) and ([^"]*)$/, (property, description, date) => {
    result = cy.request(myUrl);
    result.its("status").should("equal", 200);
    request = cy.request({
        method: "GET",
        url: myUrl,
        headers:
            { accept: "application/json" }
    }).then(response => {
    var body = JSON.parse(JSON.stringify(response.body))//Convertir mi response body a un JSON
    cy.log("My body : " + body);
    expect(body).has.property(property, description)
    expect(body.date).to.include(date)
    });
});


Given('I send a Get request to the Asteroids - NeoWs endpoint', ()=>{
    myUrl=asteroidNeo.baseUrl+asteroidNeo.endpoint+asteroidNeo.accessToken;
    result=cy.request(myUrl);
    cy.log(result);
});

Then(/^I validate status code 200 and I validate status body Asteroids has id ([^"]*)$/, (id)=>{
    cy.request({
        method: "GET",
        url: myUrl,
        headers:
            { accept: "application/json" }
    }).then(response => {
    var body = JSON.parse(JSON.stringify(response.body))
    cy.log("My body : " + body);
    expect(body).has.property("page")
    expect(body.near_earth_objects[0].id).to.include(id)
    });
});