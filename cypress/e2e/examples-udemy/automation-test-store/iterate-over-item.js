/// <reference types="cypress" />
//Command to open CypressApp: node_modules/.bin/cypress open

describe('Log information of all hair products', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index : " + index + " : " + $el.text())
            //Locate all product headers and iterate. Iterate and show the index and the text of the item from that iteration
          });
        });
    });