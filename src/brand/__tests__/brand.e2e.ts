describe('Brand components', () => {
  it('render all available Brand components', () => {
    cy.loadStory('brand-variants');
    cy.findAllByTestId('brand-row').should('have.length', 19);
  });

  it('render all available Brand components as inverted', () => {
    cy.loadStory('brand-inverted');
    cy.findAllByTestId('brand-row').should('have.length', 19);
  });

  it('render all available Brand components as monochrome', () => {
    cy.loadStory('brand-monochrome');
    cy.findAllByTestId('brand-row').should('have.length', 19);
  });

  it('render all available Brand components as monochrome and inverted', () => {
    cy.loadStory('brand-monochrome-inverted');
    cy.findAllByTestId('brand-row').should('have.length', 19);
  });
});
