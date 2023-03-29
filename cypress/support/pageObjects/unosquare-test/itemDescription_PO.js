class itemDescription_PO {
    verifyPriceIsValid(){
        //The price must be greater than 0 and not be null
    // Using Alias
    // cy.get('#apex_desktop_renewedTier2AccordionRow > #corePrice_desktop > .a-section > .a-lineitem > tbody > tr > .a-span12 > .a-price > [aria-hidden="true"]').invoke('text').as('price')
    // cy.get('@price').its('value').should('be.gt', 0)
    // cy.get('.celwidget .offersConsistencyEnabled .celwidget .a-price.a-text-price.a-size-medium.apexPriceToPay .a-offscreen').each(($el, index, $list) => {
    //     cy.log("Index : " + index + " : " + $el.text()) //Locate all product headers and iterate. Iterate and show the index and the text of the item from that iteration
    //     if(index ==0){
    //     var myPrice = cy.wrap($el)
    //     const priceArr= myPrice.text().split("$");
    //     let pricesInt = parseInt(priceArr[1]);
    //     assert.isNotNull(pricesInt)
    //     assert.isAbove(pricesInt, 0, "Price should be greater than $0")

    //     }
    cy.get('#apex_desktop_renewedTier2AccordionRow > #corePrice_desktop > .a-section > .a-lineitem > tbody > tr > .a-span12 > .a-price > [aria-hidden="true"]').then($prices => {
        const priceArr = $prices.text().split("$");
        let pricesInt = parseInt(priceArr[1]);
        assert.isNotNull(pricesInt)
        assert.isAbove(pricesInt, 0, "Price should be greater than $0")
    });
    }
}
export default itemDescription_PO