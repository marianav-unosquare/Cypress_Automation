/// <reference types="cypress" />


//Command to open CypressApp: node_modules/.bin/cypress open

describe('Alias and invoke', () => {
    it('Validate a specific haircare product', () => {
        cy.visit('https://automationteststore.com')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text') //extracts the text from that header
            .as('productThumbnail') //rename the extract to productThumbnail
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it('Validate product thumbnail', () => {
        cy.visit('https://automationteststore.com')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });

    it('Calculate of normal and sale products', () => {
        cy.visit('https://automationteststore.com')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            cy.log($el.text());
        })
    });


    it.only('Add specific product to basket', () => {
        cy.visit('https://automationteststore.com')
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //    if($el.text().includes('Curls to straight Shampoo')){
        //     cy.wrap($el).click()
        //    }
        //   });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                itemsPriceTotal += Number(itemPrice[i]) //In each of the iteration is going to add the price to the total
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Full price items total : " + itemsTotal)
        })


        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPriceTotal = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i]);
                saleItemsPriceTotal += Number(saleItemPrice[i]) //In each of the iteration is going to add the price to the total
            }
            itemsTotal += saleItemsPriceTotal;
            cy.log("Sale items price total : " + saleItemsPriceTotal)
        })
        .then(()=>{
            cy.log("All items price total : " + itemsTotal);
            expect(itemsTotal).to.equal(639.49)
        })
    });



});

