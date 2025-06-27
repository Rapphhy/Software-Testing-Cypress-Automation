describe('saucedemo', () => {
  it('Verify-checkout information', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.submit-button').click();

    [0, 2, 4].forEach(index => {
      cy.get('.inventory_item').eq(index).contains('Add to cart').click();
    });

    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('Ayo');
    cy.get('[data-test="lastName"]').type('ola');
    cy.get('[data-test="postalCode"]').type('222');
    cy.get('[data-test="continue"]').click();

  });
});
