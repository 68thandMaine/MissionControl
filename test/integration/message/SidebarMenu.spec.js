describe('Sidebar menu behavior', () => {
  before(() => {
    cy.goToInbox();
  });
  context('Dynaimc styling', () => {
    it('selecting a menu option gives it the active class', () => {
      cy.get("[data-cy='inbox_menu'] ul")
        .children().eq(0).click()
        .then(($menu_item) => {
          expect($menu_item[0].className).to.eq('active');
        });
    });
    it('only one menu option can have active class', () => {
      cy.get("[data-cy='inbox_menu'] ul").find('li.active').then(($menu_item) => {
        expect($menu_item).to.have.length(1);
      });
      cy.get("[data-cy='inbox_menu'] ul").find('li').then(($menu_items) => {
        expect($menu_items).to.have.length(3);
      });
    });

    /**  Unsure if this feature is necessary.

     it('selecting a menu option hides the sidebar', () => {
       cy.get("[data-cy='inbox_menu'] ul")
         .children().eq(0).click();
       cy.get("[data-cy='sidebar']")
         .should('not.exist')
         .and('not.be','visible');
     });
*/

    it('correct active class is retained when sidebar is opened', () => {
      cy.get("[data-cy='inbox_menu'] ul").children().eq(1).click();
      cy.get("[data-cy='sidebar_button']").click();
      cy.get("[data-cy='sidebar']")
        .should('not.exist')
        .and('not.be.visible');
      cy.get("[data-cy='sidebar_button']").click();
      cy.get("[data-cy='sidebar']")
        .should('exist')
        .and('be.visible');
      cy.get("[data-cy='inbox_menu'] ul").children().eq(1)
        .should('have.class', 'active');
    });
  });

  context('Content management', () => {
    it('selecting All shows all messages in the state', () => {
      cy.get("[data-cy='inbox_menu'] ul").children().eq(0)
        .should('contain', 'All')
        .click();
      cy.get("[data-cy='messageList']")
        .should('contain', 'all');
    });
    it('selecting Unread shows all unread messages in the database', () => {
      cy.get("[data-cy='inbox_menu'] ul").children().eq(1)
        .should('contain', 'Unread')
        .click();
      cy.get("[data-cy='messageList']")
        .should('contain', 'unread');
    });
    it('selecting replied shows all messages that have been replied to', () => {
      cy.get("[data-cy='inbox_menu'] ul").children().eq(2)
        .should('contain', 'Replied')
        .click();
      cy.get("[data-cy='messageList']")
        .should('contain', 'replied');
    });
  });
});
