Feature: Do 3 HTTP Requests (Get, Put, Delete) on Reqres

Scenario: Do a Get request on Reqres
Given I send a GET request to Reqres API
Then I validate the request was successful with 200 status code

Scenario: Do a Post Request on Reqres
Given I send a POST request to Reqres API
Then I validate the POST request was successful with 201 status code

Scenario: Do a Put Request on Reqres
Given I send a Put request to Reqres API
Then I validate the put request was successful with 200 status code

Scenario: Do a Delete Request on Reqres
Given I send a Delete request to Reqres API
Then I validate the Delete request was successful with 204 status code