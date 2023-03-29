@SearchItem
Feature: Verify Amazon's Hamburguer Left Menu

Scenario Outline: Verify Hamburguer Left Menu
Given I access Amazon landing page
When I click on the left Menu
Then I verify that the elements on buscar por deparamento <dep> and Programa y funcionalidades <prog> are visible on the menu section

Scenario Outline: Verify Hamburguer Left Menu - Negative Scenario
Given I access Amazon landing page
When I click on the left Menu
And I verify the element <element> is NOT visible in buscar por departamento on the menu section

Examples:
|dep                 | prog                | element       |
|Electronicos        |Tarjetas de regalo   |TestingElement |
|Computadoras        |Shop by Interest     |
|Smart Home          |Amazon Live          |
|Arte y Artesanias   |Tienda internacional |
#Tendria que ser leido de mi json file