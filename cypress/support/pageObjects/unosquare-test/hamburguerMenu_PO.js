class hamburguerMenu_PO {

    verifyHamburguerMenuTitle() {
        cy.xpath('//div[normalize-space()="digital content & devices"]').should('have.text', 'digital content & devices');
    };

    verifyHeadersPresent() {
        //ShopByDpt
        cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').eq(1).invoke('text').as('shopByDpt');
        cy.get('@shopByDpt').should('contain', 'shop by department');
        //prog&feat
        cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').eq(2).invoke('text').as('progAndFeat');
        cy.get('@progAndFeat').should('contain', 'programs & features');
        //all Headers from the hamburguer menu
        cy.get('#hmenu-content .hmenu.hmenu-visible .hmenu-item.hmenu-title').as('menuHeaders');
        cy.get('@menuHeaders').should('be.visible');
    };

    verifyElementsShopByDpt(dep) {
        var myList=[];
        cy.xpath("//div[@id='hmenu-content']//child::div[contains(text(), 'shop by department')]//parent::li//following-sibling::li//a[@class='hmenu-item' and @data-menu-id<'9']")
        .each(($text) => {
        myList.push($text.text());
        }).then(()=> {
            myList.forEach((el)=>{
                expect(dep.departments).to.include(el)
            })
        })  
    };


    verifyElementsProgramsFeatures(prog) {
        var myListProg = [];
        cy.xpath("//div[@id='hmenu-content']//child::div[contains(text(), 'programs & features')]//parent::li//following-sibling::li//a[@class='hmenu-item' and @data-menu-id<'30']")
        .each(($text) => {
        myListProg.push($text.text());
        }).then(()=>{
            myListProg.forEach((el)=>{
                expect(prog.programs).to.include(el)
            })
        })
    };

    verifyElementsNotPresent(dep){
        var myListNotPresent=[];
        cy.xpath("//div[@id='hmenu-content']//child::div[contains(text(), 'shop by department')]//parent::li//following-sibling::li//a[@class='hmenu-item' and @data-menu-id<'9']")
        .each(($text)=>{
            myListNotPresent.push($text.text());
        }).then(()=>{
            myListNotPresent.forEach((el)=>{
                expect(dep.negativeScenario).to.include(el);
            })
        })

    }
}

export default hamburguerMenu_PO;