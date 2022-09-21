const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('Tabs', () => {
  it('render tabs with one of them disabled', () => {
    cy.loadStory('tabs-basic');
    cy.get('main').findAllByRole('tab').should('have.length', 3);
  });

  describe('renders correctly', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('tabs-long');
        cy.get('main').findAllByRole('tab').should('have.length', 4);
      });
    });
  });

  it('render inverted tabs with one of them disabled', () => {
    cy.loadStory('tabs-inverted');
    cy.get('main').findAllByRole('tab').should('have.length', 3);
  });

  it('render tabs as links', () => {
    cy.loadStory('tabs-as-links');
    cy.get('main').find('a').should('have.length', 3);
  });

  it('render icons next to tab labels', () => {
    cy.loadStory('tabs-with-icons');
    cy.get('main').findAllByRole('tab').should('have.length', 3);
  });

  it('after tab is clicked, appropriate panel is displayed', () => {
    cy.loadStory('tabs-basic');
    cy.get('main').findByTestId('second-tab').click();
    cy.get('main').findByText('Second Tab Content').should('exist');
  });

  it('render proper focus state of a single tab', () => {
    cy.loadStory('tabs-basic');
    cy.get('main').findByTestId('first-tab').focus();
    cy.get('body').type('{rightarrow}');
    cy.get('main').findByText('Second Tab Content').should('not.exist');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('tabs-styled');
    cy.get('main').findAllByRole('tab').should('have.length', 3);
  });

  it('when autoActivate is enabled, after tab is focused with arrow key appropriate panel is shown', () => {
    cy.loadStory('tabs-auto-activate');
    cy.get('main').findByTestId('first-tab').focus();
    cy.get('body').type('{rightarrow}');
    cy.get('main').findByText('Second Tab Content').should('exist');
  });

  it('when first tab is selected, after pressing left arrow key the last tab got activated', () => {
    cy.loadStory('tabs-auto-activate');
    cy.get('main').findByTestId('first-tab').focus();
    cy.get('body').type('{leftarrow}');
    cy.get('main').findByText('Fourth Tab Content').should('exist');
  });

  it('when last tab is selected, after pressing right arrow key the first tab got activated', () => {
    cy.loadStory('tabs-auto-activate');
    cy.get('main').findByTestId('fourth-tab').focus();
    cy.get('body').type('{rightarrow}');
    cy.get('main').findByText('First Tab Content').should('exist');
  });

  it('when navigating between tabs with arrow keys, disabled tabs are skipped', () => {
    cy.loadStory('tabs-auto-activate');
    cy.get('main').findByTestId('first-tab').focus();
    cy.get('body').type('{rightarrow}{rightarrow}');
    cy.get('main').findByText('Fourth Tab Content').should('exist');
  });
});

export {};
