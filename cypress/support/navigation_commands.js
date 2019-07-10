Cypress.Commands.add('goToInbox', () => {
  cy.visit('/');
  cy.get("[data-cy='viewInbox']").click();
});
