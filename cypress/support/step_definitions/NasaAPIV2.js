import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
let nasaJson = require('../../fixtures/nasa.json');

let myUrl;
let request;

Given('I access Nasa API', ()=>{
    myUrl= nasaJson.baseUrl;
});

When(/^I send a GET request on the endpoint ([^"]*)$/, (endpoint)=>{
    request= cy.request({
        method: "GET",
        url: myUrl + endpoint + nasaJson.accessToken,
        headers:
            { accept: "application/json" }
    })
});

Then(/^I validate status code 200 and I validate that the status body has correct ([^"]*), ([^"]*) and ([^"]*)$/, (property, description, date) => {
    request.then((response) => {
    // let body = JSON.parse(JSON.stringify(response.body))//Convertir mi response body a un JSON
    // cy.log("My body : " + body);
    cy.log(response.body)
    expect(response.body).has.property(property, description)
    expect(response.body.date).to.include(date)
    });
});

Then(/^I validate status code 200 and I validate that the status body Asteroids has id ([^"]*) and property ([^"]*)$/, (id, property)=>{
    request.then((response)=>{
    // let body = JSON.parse(JSON.stringify(response.body))
    cy.log(response.body);
    expect(response.body.near_earth_objects[0]).has.property(property)
    expect(response.body.near_earth_objects[0].id).to.include(id)

    }) 
})