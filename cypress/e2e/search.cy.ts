describe('Search', () => {
  beforeEach(() => {
    cy.visit('/profile');
  });

  it('should get users who name contains passed text', () => {
    cy.get('[data-cy=search]').type('Иван');
    cy.get('[data-cy=searchButton]').click();
    cy.contains('Иван Петров').click();
    cy.url().should('contain', 'profile/');
  });

  it('should show "no results" if users not found', () => {
    cy.get('[data-cy=search]').type('Invalid user search');
    cy.get('[data-cy=searchButton]').click();
    cy.get('[data-cy=noResults]').should('exist');
  });
});
