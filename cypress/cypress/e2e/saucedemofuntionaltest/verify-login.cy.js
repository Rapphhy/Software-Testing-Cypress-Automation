describe('saucedemo', () => {

  it('Verify-login', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.submit-button').click();
  });
 });