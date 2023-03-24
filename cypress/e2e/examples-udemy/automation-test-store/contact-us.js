/// <reference types="cypress" />


//Command to open CypressApp: node_modules/.bin/cypress open

describe('Test Contact Us form via Automation Test Store', () => {
    it('Should be able to sumbit a successful contact us form.', () => {
        cy.visit('https://automationteststore.com/')
        cy.get(".info_links_footer > :nth-child(5) > a").click()
        cy.get("#ContactUsFrm_first_name").type("Mariana")
        cy.get("#ContactUsFrm_email").type('myemail@email.co')
        cy.get("#ContactUsFrm_email").should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('A message')
        cy.get('button[title=Submit]').click()
        cy.xpath('//section[@class="mb40"]').should('contain', 'Your enquiry has been successfully sent to the store owner!');
    });
});