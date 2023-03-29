class resultPage_PO{

    clickOnItemFromResultList(){
        //Iterate over a list of products and chose the second one (since the first one can be an add)
       cy.get('.sg-col-inner .a-section.a-spacing-small.a-spacing-top-small .a-section.a-spacing-none.puis-padding-right-small.s-title-instructions-style .a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 .a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').each(($el, index, $list) => {
       cy.log("Index : " + index + " : " + $el.text()) //Locate all product headers and iterate. Iterate and show the index and the text of the item from that iteration
       if(index ==3){
       cy.wrap($el).click();
       }
     });
   }

}
export default resultPage_PO; 