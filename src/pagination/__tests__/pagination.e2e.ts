describe('Tabs', () => {
  it('render pagination', () => {
    cy.loadStory('pagination-basic');
    cy.get('main').findByTestId('pagination').should('exist');
  });

  it(`render pagination in mobile view`, () => {
    cy.viewport(375, 800);
    cy.loadStory('pagination-basic');
    cy.get('main').findByTestId('pagination').should('exist');
  });

  it('render inverted pagination', () => {
    cy.loadStory('pagination-inverted');
    cy.get('main').findByTestId('pagination').should('exist');
  });

  it('render pagination with truncation', () => {
    cy.loadStory('pagination-truncation');
    cy.get('main').findByTestId('pagination-truncation-left').should('exist');
    cy.get('main').findByTestId('pagination-truncation-right').should('exist');
    cy.get('main').findByTestId('pagination-truncation-both').should('exist');
  });
});

export {};
