@Hamburguer
Feature: Verify Amazon's Hamburguer Left Menu

Scenario Outline: Verify Hamburguer Left Menu
Given I access Amazon landing page
When I click on the left Menu
Then I verify that the elements on buscar por deparamento <dept> and Programa y funcionalidades <progm> are visible on the menu section
Examples:
|dept                 |progm                  |
|Electronics          |Gift Cards             |
|Computers            |Shop by Interest       |
|Smart Home           |Amazon Live            |
|Arts & Crafts        |International Shopping |

Scenario Outline: Verify Hamburguer Left Menu - Negative Scenario
Given I access Amazon landing page
When I click on the left Menu
Then I verify that the elements on buscar por deparamento <dept> and Programa y funcionalidades <progm> are visible on the menu section

Examples:
|dept                 |progm                  |
|testElement          |testElement            |