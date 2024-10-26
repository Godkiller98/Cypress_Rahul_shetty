describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product-name:visible').should('have.length', 4);
    cy.get('.products').find('.product').should('have.length', 4);
    cy.get('.product').should('have.length', 5);
    cy.get('.products').find('.product').each(($e1, index, $list) => {
      const textVeg = $e1.find('h4.product-name').text();
      if (textVeg.includes('Carrot')) {
        $e1.find('button').click();
      }
    });
    cy.get('.products').find('.product').each(($e1, index, $list) => {
      const text2 = $e1.find('h4.product-name').text();
      console.log(text2);
     
    })
    cy.get('.brand').should('have.text','GREENKART')
cy.get(".brand").then((logoElement)=>{
  
 console.log(logoElement.text)
 cy.log(logoElement.text)
})

cy.get("img[alt='Cart']").click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()
  });
  
});