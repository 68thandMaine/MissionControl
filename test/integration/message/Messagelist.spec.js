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
      cy.get("[data-cy='message']").should('exist').should(($list) => {
        expect($list).to.have.length.greaterThan(1);
      });
    });
    it('selecting a message gives it the active class', () => {
      cy.get("[data-cy='message']").eq(1).click()
        .should('have.class', 'currentMessage');
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
