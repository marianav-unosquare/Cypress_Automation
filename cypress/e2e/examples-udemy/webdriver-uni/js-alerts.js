/// <reference types="Cypress" />


describe("Handle JS alerts", () => {


    it("Confirm JS alert contains the correct text", () => {
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true }) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.get('#button1').click()
        //Manually handle the alert on my own, the result of the alert gets into the parameter str, we handle the callback and we do an assertion to make sure we get the alert we want
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!');
        })

    });

    it("Validate js confirm alert works correctly when clicking ok", () => {
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true }) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            return true; //True clicks ok, false clicks cancel
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })

    it("Validate js confirm alert works correctly when clicking cancel", () => {
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true }) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false; //True clicks ok, false clicks cancel Use window:confirm so it gives us the option to click cancel on alerts
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel')
    })

    it("Validate js confirm alert works box using stub", () => {
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true }) //Remove a given attribute and its value from the html and that way it will open in the same tab the next tab
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!') //Makes sure that our js alert is called with the correct msg - only 1 event was fired thatw why we use index 0
        }).then(()=>{
            return true; //Clicks ok
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
       
    })

});