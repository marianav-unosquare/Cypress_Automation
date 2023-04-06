Feature: Test NasaAPI

Scenario Outline: I want to test APOD Get Request
Given I access Nasa API
When I send a GET request on the endpoint <endpoint>
Then I validate status code 200 and I validate status body has correct <property>, <description> and <date>
Examples:
|property| description           |date   | endpoint |
|title   |Terran 1 Burns Methalox|2023-04| neo/rest/v1/neo/browse?api_key=|

Scenario Outline: I want to test Asteroids Get Request
Given I access Nasa API
When I send a GET request on the endpoint <endpoint>
Then I validate status code 200 and I validate status body Asteroids has id <id> and property <property>
Examples:
|id     |property |endpoint               |
|2000433|page     |planetary/apod?api_key=|

