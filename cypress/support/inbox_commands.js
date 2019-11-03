Cypress.Commands.add('emptyMessageDatatable', () => {
  cy.server();
  cy.route({
    url: 'https://localhost:5001/api/message',
    method: 'GET',
    response: [],
  }).as('noMessages');
  cy.visit('/inbox');
  cy.wait('@noMessages');
});
