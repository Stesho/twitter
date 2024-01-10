describe('Home page', () => {
  before(() => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type('existedTestEmail@test.test');
    cy.get('[data-cy=password]').type('pass123!');
    cy.get('[data-cy=loginButton]').click();
  });

  beforeEach(() => {
    cy.visit('/home');
  });

  it('should render tweets', () => {
    cy.get('[data-cy=tweet]').should('exist');
  });

  it('should create new tweet', () => {
    cy.get('[data-cy=tweetDotsButton]').should('not.exist');

    cy.get('[data-cy=newTweetTextArea]').type('Some text');
    cy.get('[data-cy=newTweetButton]').click();

    cy.get('[data-cy=tweetDotsButton]').should('exist');
  });

  it('should delete tweet', () => {
    cy.get('[data-cy=tweetDotsButton]').click();
    cy.get('[data-cy=tweetDeleteButton]').click();
    cy.get('[data-cy=tweetDotsButton]').should('exist');
  });
});
