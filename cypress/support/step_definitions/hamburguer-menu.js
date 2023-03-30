import { Before, Given, When, Then, After } from "cypress-cucumber-preprocessor/steps"
import hamburguerMenu_PO from "../pageObjects/unosquare-test/hamburguerMenu_PO";
import landingPage_PO from "../pageObjects/unosquare-test/landingPage_PO";

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

Then(/^I verify that the elements on buscar por deparamento ([^"]*) and Programa y funcionalidades ([^"]*) are visible on the menu section$/, (dep, prog) => {
    //Iterate over the list until Buscar por Departamento
    hm_PO.verifyHamburguerMenuTitle();
    //ShopByDpt
    cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').eq(1).invoke('text').as('shopByDpt')
    //prog&feat
    cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').eq(2).invoke('text').as('progAndFeat')
    //all Headers from the hamburguer menu
    cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').as('menuHeaders');
    cy.get('#hmenu-content').as('menuContentsAll'); //imprime todos los elementos como un solo index y todo amontoado

    // Xpath de Luis:
    // cy.xpath("div[@id='hmenu-content']//child::div[.= 'search by deparment']//parent::li//following-sibling::li//a[@class = 'hmenu-item' and @data-menu-id < 10]");

    //Esto rompe mi codigo y traba cypress.
    // cy.get('#hmenu-content').then(($items)=>{
    //     var i;
    //     const listedItems = $items.text();

    //     for(i=0; i< listedItems.length; i++){
    //             cy.log(listedItems[i]);
    //             cy.log("ShopByDptIdentified");
    //     }
    // })
    cy.get('@menuContentsAll').each(($el, index, $list) => {
        cy.log('My headers elements index: ' + index + " and its text" + $el.text());
        // cy.get('@shopByDpt').then(($listShopByDpt) => {

        // })
        // if($el.text()==="@shopByDpt"){
        //     cy.log("Elements from shop by Dpt: ")
        //     cy.xpath('//li[contains(text(), "shop by department")]/following-sibling::li/')
        // }

        
        // if ($el == "@shopByDpt"){
        //     cy.log("Should say shop by dpt: " + $el.text())
        // cy.wrap($el)
        // } else if($el == "@progAndFeat"){
        //     cy.wrap("Should say programs and features : " + $el)
        // }
    })
   


    
});


Then(/^I verify the element ([^"]*) is NOT visible in buscar por departamento on the menu section$/, (neg) => {
    //Iteration code
});

