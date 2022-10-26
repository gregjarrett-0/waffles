describe('Checkbox', () => {
  it('renders a basic checkbox', () => {
    cy.loadStory('checkbox-basic');
    cy.get('main').find('input[type=checkbox]').should('have.length', 1);
  });

  it('renders an indeterminate checkbox', () => {
    cy.loadStory('checkbox-indeterminate');
    cy.get('main')
      .find('input[type=checkbox]')
      .should('have.length', 1)
      .and('have.attr', 'aria-checked')
      .and('eq', 'mixed');
  });

  it('renders proper focus state', () => {
    cy.loadStory('checkbox-basic');
    cy.get('main').find('input[type=checkbox]').focus();
  });

  it('renders with error', () => {
    cy.loadStory('checkbox-error');
    cy.get('main').find('input[type=checkbox]').should('have.length', 2);
  });

  it('render inverted and disabled', () => {
    cy.loadStory('checkbox-inverted-disabled');
    cy.get('main').find('input[type=checkbox]').should('have.length', 12);
  });

  it('allows custom content in label', () => {
    cy.loadStory('checkbox-custom-label');
    cy.get('main')
      .findByText(/terms of use/i)
      .should('exist');
    cy.get('main')
      .findByText(/privacy policy/i)
      .should('exist');
  });

  it('changes to checked when label is clicked', () => {
    cy.loadStory('checkbox-basic');
    cy.get('main').findByText('Basic checkbox').click();
  });

  it('changes to unchecked, when checked checkbox label is clicked', () => {
    cy.loadStory('checkbox-basic');
    cy.get('main').findByText('Basic checkbox').click();
    cy.get('main').findByText('Basic checkbox').click();
  });

  it("if indeterminate, when label is clicked doesn't change to checked", () => {
    cy.loadStory('checkbox-indeterminate');
    cy.get('main').findByText('Indeterminate checkbox').click();
  });
});
