describe('Inbox view behavior', () => {
  before(() => {
    cy.visit('./');
  });
  context('navigating to correct view', () => {
    before(() => {
      cy.goToInbox();
    });
    it('sidebar menu is open by default', () => {
      cy.get("[data-cy='sidebar']").should('be.visible');
    });
    it('the message list component should be visible', () => {
      cy.get("[data-cy='messageList']").should('be.visible');
    });
    it('the message component should be visible', () => {
      cy.get("[data-cy='message']").should('be.visible');
    });
  });
});
