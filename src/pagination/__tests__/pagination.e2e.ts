describe('Pagination', () => {
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

  it('when first page is active, previous button does nothing', () => {
    cy.loadStory('pagination-basic');
    cy.get('main')
      .findAllByTestId('pagination-page')
      .first()
      .should('have.attr', 'aria-current');
    // Force click because it's a disabled element
    cy.get('main').findByLabelText('Previous page').click({ force: true });
    cy.get('main')
      .findAllByTestId('pagination-page')
      .first()
      .should('have.attr', 'aria-current');
  });

  it('when last page is active, next button does nothing', () => {
    cy.loadStory('pagination-basic');
    cy.get('main').findAllByTestId('pagination-page').last().click();
    cy.get('main')
      .findAllByTestId('pagination-page')
      .last()
      .should('have.attr', 'aria-current');
    // Force click because it's a disabled element
    cy.get('main').findByLabelText('Next page').click({ force: true });
    cy.get('main')
      .findAllByTestId('pagination-page')
      .last()
      .should('have.attr', 'aria-current');
  });

  it('when middle page is active, next button increments active page', () => {
    cy.loadStory('pagination-basic');
    cy.get('main').findAllByTestId('pagination-page').eq(3).click();
    cy.get('main')
      .findAllByTestId('pagination-page')
      .eq(3)
      .should('have.attr', 'aria-current');
    cy.get('main').findByLabelText('Next page').click();
    cy.get('main')
      .findAllByTestId('pagination-page')
      .eq(4)
      .should('have.attr', 'aria-current');
  });

  it('when middle page is active, previous button decrements active page', () => {
    cy.loadStory('pagination-basic');
    cy.get('main').findAllByTestId('pagination-page').eq(3).click();
    cy.get('main')
      .findAllByTestId('pagination-page')
      .eq(3)
      .should('have.attr', 'aria-current');
    cy.get('main').findByLabelText('Previous page').click();
    cy.get('main')
      .findAllByTestId('pagination-page')
      .eq(2)
      .should('have.attr', 'aria-current');
  });

  it('when active page changes, focus is updated', () => {
    cy.loadStory('pagination-truncation');
    cy.wait(1000);
    cy.get('main')
      .findByTestId('pagination-truncation-both')
      .findAllByTestId('pagination-page')
      .eq(3)
      .focus();
    cy.get('main')
      .findByTestId('pagination-truncation-both')
      .findAllByTestId('pagination-page')
      .eq(4)
      .focus()
      .click();
    cy.wait(1000);

    // Confirm focus has shifted back to middle value after pages shift
    cy.get('main')
      .findByTestId('pagination-truncation-both')
      .findAllByTestId('pagination-page')
      .eq(3)
      .should('have.focus')
      .should('have.attr', 'aria-current');
  });
});

export {};
