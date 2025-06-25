describe('saucedemo', () => {
    
  it('verfify-add to cart feature', () => {  
  cy.visit('https://www.saucedemo.com')
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('.submit-button').click();
  
  [0, 2, 4].forEach(index => {
  cy.get('.inventory_item').eq(index).contains('Add to cart').click();
  });
});
});