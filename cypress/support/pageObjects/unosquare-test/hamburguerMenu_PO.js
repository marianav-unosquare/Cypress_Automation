class hamburguerMenu_PO {

    verifyHamburguerMenuTitle() {
        cy.xpath('//div[normalize-space()="digital content & devices"]').should('have.text', 'digital content & devices')
    }
}

export default hamburguerMenu_PO;