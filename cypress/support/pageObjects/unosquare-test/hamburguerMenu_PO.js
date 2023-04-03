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

    verifyElementsShopByDpt(dept, dep) {
        var elArr = [];

        cy.xpath("//div[@id='hmenu-content']//child::div[contains(text(), 'shop by department')]//parent::li//following-sibling::li//a[@class='hmenu-item' and @data-menu-id<'9']").each(($text) => {
            // cy.log($text.text());
            var i;
            
            cy.log(elArr)
            elArr.push($text.text());//QUEREMOS RETORNAR EL ARREGLO?
         
            for (i = 0; i < elArr.length; i++) {
                cy.log("My array element : " + elArr);
                cy.expect(elArr[i]).to.contain(dept);
                // expect(elArr).to.(dept);
                switch (dept) {
                    case (dept ==='Electronics'):
                        cy.expect(elArr[i]).to.equal(dep.electronics);
                        break;

                    case (dept==='Computers'):
                        cy.expect(elArr[i]).to.equal(dep.computers);
                        break;

                    case (dept ==='Smart Home'):
                        cy.expect(elArr[i]).to.equal(dep.smartHome);
                        break;

                    case (dept==='Arts & Crafts'):
                        cy.expect(elArr[i]).to.equal(dep.artsCrafts);
                        break;
                };
               
                cy.get(elArr[i]).should('have.text',dept);
            }
            return elArr;
           
        }) 
        cy.expect(elArr).to.contain(dept).then(($arr)=>{
            return elArr;
        });
        
    };


    verifyElementsProgramsFeatures(progm, prog) {
        
        cy.xpath("//div[@id='hmenu-content']//child::div[contains(text(), 'programs & features')]//parent::li//following-sibling::li//a[@class='hmenu-item' and @data-menu-id<'30']").each(($text) => {
            // cy.log($text.text());
            var i;
            const elArr = [];
            elArr.push($text.text());
            for (i = 0; i < elArr.length; i++) {
                cy.log("My array element : " + elArr);
                switch (progm) {
                    case (progm==='Gift Cards'):
                        cy.expect(elArr[i]).to.equal(prog.giftC);
                        break;

                    case (progm==='Shop By Interest'):
                        cy.expect(elArr[i]).to.equal(prog.shopBy);
                        break;

                    case (progm ==='Amazon Live'):
                        cy.expect(elArr[i]).to.equal(prog.amazonLive);
                        break;

                    case (progm === 'International Shopping'):
                        cy.expect(elArr[i]).to.equal(prog.intShop);
                        break;

                }

            }

        });
    };
}

export default hamburguerMenu_PO;