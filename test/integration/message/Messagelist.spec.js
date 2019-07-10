describe('MessageList component', () => {
  context('no messages in database', () => {
    it('if no messages exist, message is shown', () => {
      cy.emptyMessageDatatable();
      cy.get("[data-cy='noMessages']").should('exist');
    });
  });
  context('messages in database', () => {
    before(() => {
      cy.goToInbox();
    })
    it('if messages exist, list is shown', () => {
      cy.get("[data-cy='messagelist']").should('exist').should(($list) => {
        expect($list).to.have.length.greaterThan(1)
      });
    });
    it('selecting a message gives it the active class', () => {

    });
    /**
     * The tests below will be completed when delete
     * functionality is connected.

    it('there is a delete icon within each message', () {

    });
    it('there is a checkbox option avialable for deleting messages', () => {

    });
     */
  });
});
