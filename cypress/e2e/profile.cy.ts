describe('Profile page', () => {
  before(() => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type('existedTestEmail@test.test');
    cy.get('[data-cy=password]').type('pass123!');
    cy.get('[data-cy=loginButton]').click();
  });

  beforeEach(() => {
    cy.visit('/profile');
  });

  it('should render user tweets', () => {
    cy.get('[data-cy=tweet]').should('have.length', 0);
  });

  it('should create new tweet', () => {
    cy.get('[data-cy=newTweetButton]').should('be.disabled');

    cy.get('[data-cy=newTweetTextArea]').type('Some text');
    cy.get('[data-cy=newTweetButton]').click();

    cy.get('[data-cy=tweet]').should('have.length', 1);
  });

  it('should add new tweet on home page', () => {
    cy.visit('/home');
    cy.get('[data-cy=tweetDotsButton]').should('have.length', 1);
  });

  it('should delete tweet', () => {
    cy.get('[data-cy=tweetDotsButton]').click();
    cy.get('[data-cy=tweetDeleteButton]').click();

    cy.get('[data-cy=tweet]').should('have.length', 0);
  });
});
