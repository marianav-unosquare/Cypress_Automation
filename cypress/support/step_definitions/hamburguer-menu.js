import { Before, Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"
import hamburguerMenu_PO from "../pageObjects/unosquare-test/hamburguerMenu_PO";
import landingPage_PO from "../pageObjects/unosquare-test/landingPage_PO";
const dep = require('../dataJson/hamburguerMenu/BuscarPorDepartamento.json');

//Page Object Variables
const lp_PO = new landingPage_PO();
const hm_PO = new hamburguerMenu_PO();

Before(() => {
    cy.log("My test started executing");
})

Given('I access Amazon landing page', () => {
    lp_PO.navigateToAmazon();
});

When('I click on the left Menu', () => {
    lp_PO.clickHamburguerMenu();
})

Then(/^I verify that the elements on buscar por deparamento ([^"]*) and Programa y funcionalidades ([^"]*) are visible on the menu section$/, (dept, progm) => {
    //Iterate over the list until Buscar por Departamento
    hm_PO.verifyHamburguerMenuTitle();
    hm_PO.verifyHeadersPresent();

    cy.get('#hmenu-content').as('menuContentsAll'); //imprime todos los elementos como un solo index y todo amontoado
    cy.get('@menuContentsAll').each(($el, index, $list) => {
        //cy.log('My headers elements index: ' + index + " and its text" + $el.text()); //Todos los elementos estan en index 0. Intentar otro approach
        
        cy.xpath("//div[@id='hmenu-content']//child::div[contains(text(), 'shop by department')]//parent::li//following-sibling::li//a[@class='hmenu-item' and @data-menu-id<'9']").each(($text) => {
            // cy.log($text.text());
            var i;  
            const elArr = [];
            elArr.push($text.text());
            for(i=0; i <elArr.length; i++){
            cy.log("My array element : " + elArr);
            switch(elArr[i]){
                case 'Electronics':
                cy.expect(elArr[i]).to.equal(dep.electronics);
                break;

                case 'Computers':
                cy.expect(elArr[i]).to.equal(dep.computers);
                break;

                case 'Smart Home':
                cy.expect(elArr[i]).to.equal(dep.smartHome);
                break;

                case 'Arts & Crafts':
                cy.expect(elArr[i]).to.equal(dep.artsCrafts);
                break;

                default: "This element is not found under Shop by Department.";
                
            }
            
            }
        
        });
    })
});


Then(/^I verify the element ([^"]*) is NOT visible in buscar por departamento on the menu section$/, (neg) => {
    //Iteration code
});

