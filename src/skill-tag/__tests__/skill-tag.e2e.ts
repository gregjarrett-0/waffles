describe('Skill Tag', () => {
  it('render all variants and levels', () => {
    cy.loadStory('skill-tag-regular');
    cy.get('main').findAllByTestId('skill-tag').should('have.length', 6);
  });

  it('render all variants and levels as inverted', () => {
    cy.loadStory('skill-tag-inverted');
    cy.get('main').findAllByTestId('skill-tag').should('have.length', 6);
  });
});
