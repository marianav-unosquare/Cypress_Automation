

class hamburguerMenu_PO {

    verifyHamburguerMenuTitle() {
        cy.xpath('//div[normalize-space()="digital content & devices"]').should('have.text', 'digital content & devices')
    };

    verifyHeadersPresent() {
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

    verifyElementsShopByDpt(dept, dep) {
        cy.xpath("//div[@id='hmenu-content']//child::div[contains(text(), 'shop by department')]//parent::li//following-sibling::li//a[@class='hmenu-item' and @data-menu-id<'9']").each(($text) => {
            // cy.log($text.text());
            var i;
            const elArr = [];
            elArr.push($text.text());
            for (i = 0; i < elArr.length; i++) {
                cy.log("My array element : " + elArr);
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

                    default:
                    cy.log("This element is not found under Shop by Department.");
                    

                }

            }

        })
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

                    default: 
                    cy.log("This element is not found under Programs & Features.");

                }

            }

        });
    };

}

export default hamburguerMenu_PO;