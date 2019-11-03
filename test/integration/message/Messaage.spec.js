describe('Message component view', () => {
  before(() => {
    cy.goToInbox();
  })
  context('Message behavior', () => {
    it('if no message is selected the No message message is shown', () => {
      cy.get("[data-cy='message_wrapper']").children()
        .should('have.attr', 'data-cy')
        .and('eq', 'no_message_selected');
    });
    it.only('if a message is selected, the message will be displayed in the window', () => {
      cy.get("[data-cy='messages']").eq(0)
        .click();
      cy.get("[data-cy='message_wrapper']").children()
        .should('have.attr', 'data-cy')
        .and('eq', 'message');
    });
  });
  context('delete and reply button functionality', () => {
    it('delete removes message from inbox', () => {

    });
    it('reply opens email window', () => {

    });
  });
});
