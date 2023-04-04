/// <reference types="Cypress" />

describe("Test mouse actions", () =>{

    it("Scroll into an element into view", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
    });

    it("I should be able to drag and drop a draggable item", ()=>{
        //Cypress code goes here
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        //Identify item draggable, to trigger the mousedown action hold down the tiny sqare
        cy.get('#draggable').trigger('mousedown', {which:1});
        //Identify the item where we want to drag our item to. Then move it using mousemove. mouseup -> release, force to ttrue to make sure it releases it
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it("I should be able to perform a double click", ()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#double-click').dblclick()
    });

    it.only("I should be able to hold down the left mouse click button on an item", ()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($el)=>{
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')
        })
        
    });

})