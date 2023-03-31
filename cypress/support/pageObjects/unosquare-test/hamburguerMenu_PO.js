class hamburguerMenu_PO {

    verifyHamburguerMenuTitle() {
        cy.xpath('//div[normalize-space()="digital content & devices"]').should('have.text', 'digital content & devices')
    };

    verifyHeadersPresent(){
    //ShopByDpt
    cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').eq(1).invoke('text').as('shopByDpt');
    //prog&feat
    cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').eq(2).invoke('text').as('progAndFeat');
    //all Headers from the hamburguer menu
    cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').as('menuHeaders');
    cy.get('@menuHeaders').should('be.visible');
    cy.get('@shopByDpt').should('contain', 'shop by department');
    cy.get('@progAndFeat').should('contain', 'programs & features');
    };


}

export default hamburguerMenu_PO;