describe('saucedemo', () => {
    
    it('verify-filter dropdown option', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.submit-button').click();
    cy.get('.product_sort_container').select('az');
    cy.get('.product_sort_container').should('have.value', 'az');
    cy.get('.product_sort_container').select('lohi');
    cy.get('.product_sort_container').should('have.value', 'lohi');
  });
 });