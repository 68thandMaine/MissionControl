describe('MessageList component', () => {
  context('No messages in database', () => {
    it('if no messages exist, message is shown', () => {
      cy.emptyMessageDatatable();
      cy.get("[data-cy='noMessages']").should('exist');
    });
  });
  context('If messages in database', () => {
    before(() => {
      cy.goToInbox();
    })
    it('if messages exist, list is shown', () => {
      cy.get("[data-cy='messages']").should('exist').should(($list) => {
        expect($list).to.have.length.greaterThan(1);
      });
    });
    it('selecting a message gives it the active class', () => {
      cy.get("[data-cy='messages']").eq(1).click()
        .should('have.class', 'currentMessage');
    });
    it('selecting a message changes shows content in the message component', () => {
      cy.get("[data-cy='no_message_selected']").should('exist').and('be.visible');
      cy.get("[data-cy='messages']").children().eq(0).click();
      cy.get("[data-cy='no_message_selected']").should('not.exist').and('not.be.visible');

      // Adjust test to see if you can see content rather than a div not existing
    });

    /**
     * The tests below will be completed when delete
     * functionality is connected.

    it('there is a delete icon within each message', () {

    });
    it('delete icon opens modal with delete question', () => {

    });
     */

  });
});
