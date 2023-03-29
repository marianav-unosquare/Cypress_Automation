class landingPage_PO {
    
    navigateToAmazon(){
        cy.visit("https://www.amazon.com/");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8'); //Attribute charset is active and has value of UFT-8
        cy.title().should('include','Amazon.com. Spend less. Smile more.');
        cy.url().should('include', 'amazon.com');
    }

    typeItemOnSearchBar(item){
        cy.get("#twotabsearchtextbox").type(item)
    }

    clickSearchButton(){
        cy.get('#nav-search-submit-button').click();
    }
};

export default landingPage_PO;