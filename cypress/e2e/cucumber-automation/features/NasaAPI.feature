Feature: Create 2 scripts for NASA Apis

Scenario: Create a script for NASA API testing using GET requests on APOD img API
Given I access NASA landing page
When I use my access token from an external file and my endpoint
And 
Then I validate status code 200
And I validate status body
