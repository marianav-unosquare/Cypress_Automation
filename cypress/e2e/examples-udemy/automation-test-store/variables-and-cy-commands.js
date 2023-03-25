/// <reference types="cypress" />


//Command to open CypressApp: node_modules/.bin/cypress open

describe('Verify variables, cypress commands and jquery commands', () => {
    it('Navigating to specific product pages', () => {
        cy.visit('https://automationteststore.com')
        //These commented lines do not work
        // const makeupLink = cy.xpath('//a[normalize-space()="Makeup"]');
        // const skincareLink = cy.get('a[href*="product/category&path="]').contains("Skincare");
        // makeupLink.click();
        // skincareLink.click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        cy.get('a[href*="product/category&path="]').contains("Skincare").click()
        });

        it('Navigating to specific product pages: Skincare', () => {
            cy.visit('https://automationteststore.com')
            //Dynamic selector will let us allow select multiple links depending on the String
            //we use. Example: We go through the links and select the one that contains the word "Skincare"
            //and click on that specific link.
            cy.get("a[href*='product/category&path=']").contains("Skincare").click()
            
            cy.get('h1 .maintext').then($header =>{
                const headerText = $header.text();
                cy.log("found header text: " + headerText)
                expect(headerText).is.eq('Skincare')
            })
            });

            it.only('Validate properties of the contact us page', () => {
                cy.visit('https://automationteststore.com/index.php?rt=content/contact')
               // Uses cypress commands and chaining
                cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
               //Jquery approach
               cy.contains('#ContactUsFrm', 'Contact Us Form').then(text =>{
                const firstNameText = text.find("#field_11").text()
                expect(firstNameText).to.contain("First name")
                //Embeded commands (closure)
                cy.get('#field_11').then(fnText =>{

                    cy.log(fnText.text()) //Prints the text
                    cy.log(fnText) //prints the selector
                })
               });
               
                });

    });
  