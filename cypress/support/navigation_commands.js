Cypress.Commands.add('closeSidebar', () => {
  cy.get("[data-cy='sidebar_button']").click();
});

Cypress.Commands.add('goToInbox', () => {
  cy.visit('/');
  cy.get("[data-cy='viewInbox']").click();
});
