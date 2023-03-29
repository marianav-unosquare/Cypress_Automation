# const dep = require('../support/dataJson/**/BuscarPorDepartamento.json');
# const prog = require('../support/dataJson/**/ProgramayFuncionalidades.json');

@Hamburguer
Feature: Verify Amazon's Hamburguer Left Menu

Scenario Outline: Verify Hamburguer Left Menu
Given I access Amazon landing page
When I click on the left Menu
Then I verify that the elements on buscar por deparamento <dep> and Programa y funcionalidades <prog> are visible on the menu section

# Scenario Outline: Verify Hamburguer Left Menu - Negative Scenario
# Given I access Amazon landing page
# When I click on the left Menu
# Then I verify the element <neg> is NOT visible in buscar por departamento on the menu section

Examples:
|dep                 |prog              | neg        |
|Electrónicos        |Tarjetas de Regalo|testElement |
# |dep.el1             |prog.tarjetasReg  | dep.el5 |
# |dep.el2             |prog.shopBy       |         |
# |dep.el3             |prog.amazonLive   |         |
# |dep.el4             |prog.tiendaInt    |         |
#Tendria que ser leido de mi json file