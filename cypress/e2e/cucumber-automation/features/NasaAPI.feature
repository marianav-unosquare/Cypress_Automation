Feature: Create 2 scripts for NASA Apis

Scenario Outline: Create a script for NASA API testing using GET requests on APOD img API
Given I send a Get request to the APOD endpoint on the NASA website using my access token
Then I validate status code 200 and I validate status body has correct <property>, <description> and <date>
Examples:
|property| description           |date   |
|title   |Terran 1 Burns Methalox|2023-04|

Scenario Outline: Create a script for NASA API testing using a GET request on Asteroids - NeoWs
Given I send a Get request to the Asteroids - NeoWs endpoint
Then I validate status code 200 and I validate status body Asteroids has id <id>
Examples:
|id|
|2000433|