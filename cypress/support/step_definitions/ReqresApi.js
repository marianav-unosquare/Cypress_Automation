import { use } from "chai";
import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps"
const getReqres = require("../../fixtures/reqresGet.json");

let myUrl, result, myPostUrl, myPutUrl, myDeleteUrl, userId;

Before(()=>{
    myUrl= getReqres.baseUrl+getReqres.get.request;
    myPostUrl= getReqres.baseUrl+getReqres.post.request;
    myPutUrl=getReqres.baseUrl + getReqres.put.request;
    myDeleteUrl= getReqres.baseUrl + getReqres.delete.request;
    cy.log(myUrl);
});

Given('I send a GET request to Reqres API', () =>{
    result = cy.request(myUrl);
    cy.log(result)
    result.its("status").should("equal", 200);
});

Then('I validate the request was successful with {int} status code', (statusCode) =>{
    cy.request({
        method: getReqres.get.method,
        url: myUrl,
        headers:
        { accept: "application/json" }
    })
        .then((response)=>{
        let body = JSON.parse(JSON.stringify(response.body))//Convertir mi response body a un JSON
        cy.log("My body : " + body.data.first_name);
        expect(body.data.first_name).to.include("Janet");
        expect(response.status).to.eq(statusCode)
    });
});

Given('I send a POST request to Reqres API', () =>{
    result = cy.request(myPostUrl)
});

Then('I validate the POST request was successful with {int} status code', (statusCode)=>{
    cy.request({
        method: getReqres.post.method,
        url: myPostUrl,
        body: getReqres.post.body
    })
    .then((response)=>{
        userId= response.body.id;
        cy.log(userId);
        expect(response.status).to.eql(statusCode);        
    });
});

Given('I send a Put request to Reqres API', () =>{
   result= cy.request(myPutUrl);
});

Then('I validate the put request was successful with {int} status code', (statusCode)=>{
    cy.request({
        method: getReqres.put.method,
        url: myPutUrl,
        body: getReqres.put.body
    })
    .then((response)=>{
        expect(response.status).to.eql(statusCode);
    });
});

Given('I send a Delete request to Reqres API', ()=>{
    result= cy.request(myDeleteUrl);
});

Then('I validate the Delete request was successful with {int} status code',(statusCode)=>{
    cy.request({
        method: getReqres.delete.method,
        url: myDeleteUrl + userId,
        body: getReqres.put.body
    })
    .then((response)=>{
        //204 No Content
        cy.log(userId);
        cy.log("response status : " + response.status)
        cy.log("status code : " + statusCode)
        expect(response.status).to.eql(statusCode);
    });
//Assert my user does not exist anymore doing a Get HTTP request
    cy.request({
        method: getReqres.get.method,
        url:myUrl+ userId,
        failOnStatusCode: false,
        body:{accept:"application/json"}
    }).then((response)=>{
        let bodyRes = JSON.parse(JSON.stringify(response.body))
        expect(response.status).to.eql(404);
    })
});
