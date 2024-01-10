describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should correctly log in system', () => {
    cy.get('[data-cy=email]').type('existedTestEmail@test.test');
    cy.get('[data-cy=password]').type('pass123!');
    cy.get('[data-cy=loginButton]').click();
    cy.url().should('include', '/profile');
  });

  it('should show errors on invalid values', () => {
    cy.get('[data-cy=emailError]').should('not.exist');
    cy.get('[data-cy=passwordError]').should('not.exist');

    cy.get('[data-cy=loginButton]').click();

    cy.get('[data-cy=emailError]').should('exist');
    cy.get('[data-cy=passwordError]').should('exist');

    cy.url().should('include', '/login');
  });

  it('should show error message if user does not exists', () => {
    cy.get('[data-cy=invalidCredentialError]').should('not.exist');
    cy.get('[data-cy=email]').type('invalidEmail@test.test');
    cy.get('[data-cy=password]').type('pass123!');
    cy.get('[data-cy=loginButton]').click();
    cy.url().should('include', '/login');
    cy.get('[data-cy=invalidCredentialError]').should('exist');
  });
});
