describe('Link', () => {
  it('renders a basic link', () => {
    cy.loadStory('link-basic');
    cy.get('a').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('link-basic');
    cy.get('a').focus();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('link-styled');
    cy.findByText('Go to DataCamp website').should('exist');
  });

  it('render when size is inherited', () => {
    cy.loadStory('link-inherit-size');
    cy.get('main').find('a').should('have.length', 6);
  });

  it('render all sizes when set explicitly', () => {
    cy.loadStory('link-explicit-size');
    cy.get('main').find('a').should('have.length', 3);
  });

  it('render regular and inverted with various icons', () => {
    cy.loadStory('link-with-icons');
    cy.get('a').should('have.length', 13);
  });
});
