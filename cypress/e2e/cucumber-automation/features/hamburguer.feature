@Hamburguer
Feature: Verify Amazon's Hamburguer Left Menu

Scenario: Verify Hamburguer Left Menu
Given I access Amazon landing page
When I click on the left Menu
Then I verify that the elements on buscar por deparamento and Programa y funcionalidades are visible on the menu section

Scenario: Verify Hamburguer Left Menu - Negative Scenario
Given I access Amazon landing page
When I click on the left Menu
Then I verify that the elements do not contain an item