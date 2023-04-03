/// <reference types="Cypress" />

describe('Verify Autocomplete dropdown list via webdriver uni', () => {
    it('Select specific product via autocomplete list', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true }) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        // cy.get('#checkboxes > :nth-child(1) > input').check();
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Asparagus'

            if (prod == productToSelect) {
                //$el.click();
                $el.trigger('click')
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect);
            }
        }).then(() => {
            cy.get('#myInput').type('g');
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes'

                if (prod == productToSelect) {
                    //$el.click();
                    $el.trigger('click')

                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect);
                }

            })

        })
    });
});