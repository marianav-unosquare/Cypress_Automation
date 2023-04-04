Feature: Create 2 scripts for NASA Apis

Scenario: Create a script for NASA API testing using GET requests on APOD img API
Given I enter to the APOD endpoint on the NASA website using my access token
When I send a GET request
Then I validate status code 200
And I validate status body

