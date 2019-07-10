describe('Inbox view behavior', () => {
  before(() => {
    cy.visit('./');
  });
  it('selecting Messages in the toolbar reroutes to the correct view', () => {
    cy.get("[data-cy='viewInbox']")
      .should('contain', 'Messages').click();
    cy.url().should('include', '/inbox');
  });
  context('navigating to correct view', () => {
    before(() => {
      cy.goToInbox();
    });
    it('sidebar menu is open by default', () => {
      cy.get("[data-cy='sidebar']").should('be.visible');
    });
    it('the message list component should be visible', () => {
      cy.get("[data-cy='messagelist']").should('be.visible');
    });
    it('the message component should be visible', () => {
      cy.get("[data-cy='message']").should('be.visible');
    });
    context('sidebar menu', () => {
      it('the sidebar shows the inbox menu', () => {
        cy.get("[data-cy='sidebarMenu']").children()
          .should('have.attr', 'data-cy')
          .and('eq', 'inbox_menu');
      });
      it.only('the sidebar menu exists after the sidebar has been opened and closed', () => {
        cy.get("[data-cy='sidebar_button']").click();
        cy.get("[data-cy='sidebar']")
          .should('not.exist')
          .and('not.be.visible');
        cy.get("[data-cy='sidebar_button']").click();
        cy.get("[data-cy='sidebar']")
          .should('exist')
          .and('be.visible');
        cy.get("[data-cy='sidebarMenu']").children()
          .should('have.attr', 'data-cy')
          .and('eq', 'inbox_menu');
      });
    });
  });
});
