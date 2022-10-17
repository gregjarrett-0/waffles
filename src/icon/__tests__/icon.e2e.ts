describe('Icon', () => {
  it('render all available icons in different sizes', () => {
    cy.loadStory('icon-sizes');
    cy.findAllByTestId('icon-row').should('have.length', 220);
  });
});
