/// <reference types="Cypress" />


describe("Same origin policy Cypress web security", () =>{

    it.skip("Validate visiting two different domains", ()=>{
        //we cant define two super domains using cypress
        cy.visit('https://webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/'); //It fails- super domains are differents and it is one of cypress limitations
      
    });

    it.skip("Validate via actions: redirect to a different superdomain url", ()=>{

        cy.visit('https://webdriveruniversity.com/');
        //cy.get('automation-test-store').click(); //Cross origin error
        cy.get('automation-test-store').invoke('removeAttr', 'target').click()
    });

    //Access two different urls using this approach -> origin command
    it.skip("Origin command", () => {
        cy.origin('webdriveruniversity.com', () =>{
            cy.visit("/");
        }),
        cy.origin('automationteststore.com', () =>{
            cy.visit("/");
        })
        
        // cy.visit('https://www.webdriveruniversity.com');
        // cy.visit('https://selectors.webdriveruniversity.com')

    })

})