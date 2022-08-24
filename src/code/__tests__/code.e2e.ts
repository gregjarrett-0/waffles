describe('Code', () => {
  it('render when size is inherited', () => {
    cy.loadStory('code-inherit-size');
    cy.get('main').find('code').should('have.length', 9);
  });

  it('render all sizes when set explicitly', () => {
    cy.loadStory('code-explicit-size');
    cy.get('main').find('code').should('have.length', 3);
  });
});
