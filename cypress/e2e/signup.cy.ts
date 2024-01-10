const fillForm = ({
  name = 'Test',
  phone = '+12345678',
  email = 'test@test.test',
  month = 'January',
  day = '10',
  year = '1998',
}) => {
  cy.get('[data-cy=name]').type(name);
  cy.get('[data-cy=phone]').type(phone);
  cy.get('[data-cy=email]').type(email);
  cy.get('[data-cy=month]').select(month);
  cy.get('[data-cy=day]').select(day);
  cy.get('[data-cy=year]').select(year);
};

describe('Profile page', () => {
  beforeEach(() => {
    cy.visit('/signup-email');
  });

  it('should render only user form', () => {
    cy.get('[data-cy=password]').should('not.exist');
    fillForm({});
    cy.get('[data-cy=next]').click();
    cy.get('[data-cy=password]').should('exist');
  });

  it('should show errors on invalid values', () => {
    cy.get('[data-cy=nameError]').should('not.exist');
    cy.get('[data-cy=phoneError]').should('not.exist');
    cy.get('[data-cy=emailError]').should('not.exist');
    cy.get('[data-cy=monthError]').should('not.exist');
    cy.get('[data-cy=dayError]').should('not.exist');
    cy.get('[data-cy=yearError]').should('not.exist');

    cy.get('[data-cy=next]').click();

    cy.get('[data-cy=nameError]').should('exist');
    cy.get('[data-cy=phoneError]').should('exist');
    cy.get('[data-cy=emailError]').should('exist');
    cy.get('[data-cy=monthError]').should('exist');
    cy.get('[data-cy=dayError]').should('exist');
    cy.get('[data-cy=yearError]').should('exist');
  });

  it('should show error if user already exist', () => {
    cy.get('[data-cy=existedUserError]').should('not.exist');
    fillForm({
      email: 'existedTestEmail@test.test',
    });
    cy.get('[data-cy=next]').click();
    cy.get('[data-cy=existedUserError]').should('exist');
  });
});
