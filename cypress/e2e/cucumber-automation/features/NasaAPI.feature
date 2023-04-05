Feature: Create 2 scripts for NASA Apis

Scenario: Create a script for NASA API testing using GET requests on APOD img API
Given I access to the APOD endpoint on the NASA website using my access token
Then I validate status code 200 and I validate status body

Scenario: Create a script for NASA API testing using a GET request on Asteroids - NeoWs
Given I access to the Asteroids - NeoWs endpoint
Then I validate status code 200 and I validate status body Asteroids
