/// <reference types="./" />

Cypress.Commands.add(`startsApp`, () => {
  cy.visit(`/`);
});
