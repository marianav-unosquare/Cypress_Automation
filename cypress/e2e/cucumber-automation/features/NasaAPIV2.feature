Feature: Nasa API testing

Scenario Outline: I want to test APOD Get Request
Given I access Nasa API
When I send a GET request on the endpoint <endpoint>
Then I validate status code 200 and I validate that the status body has correct <property>, <description> and <date>
Examples:
|property| description           |date   | endpoint                       |
|title   |IC 2944: The Running Chicken Nebula             |2023-04|planetary/apod?api_key=         |

Scenario Outline: I want to test Asteroids Get Request
Given I access Nasa API
When I send a GET request on the endpoint <endpoint>
Then I validate status code 200 and I validate that the status body Asteroids has id <id> and property <property>
Examples:
|id     |property |endpoint               |
|2000433|id       |neo/rest/v1/neo/browse?api_key=|