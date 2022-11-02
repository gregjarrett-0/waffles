describe('Skill Tag', () => {
  it('render all levels in both level and in inverted and regular', () => {
    cy.loadStory('skill-tag-variants-and-levels');
    cy.get('main').findAllByTestId('skill-tag').should('have.length', 12);
  });
});
