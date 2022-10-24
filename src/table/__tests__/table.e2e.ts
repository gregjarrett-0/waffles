const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('Table', () => {
  describe('when it is longer than device width', () => {
    beforeEach(() => {
      cy.viewport(screenSizes.medium[0], screenSizes.medium[1]);
    });

    it('is focusable', () => {
      cy.loadStory('table-regular');
      cy.get('main').findByLabelText('Regular table').focus();
      cy.get('table').should('exist');
    });

    it('show shadow scroll hint to the right, when not scrolled yet', () => {
      cy.loadStory('table-regular');
      cy.get('main').findByLabelText('Regular table').should('exist');
    });

    it('show shadow scroll hint on both sides, when scrolled to the middle', () => {
      cy.loadStory('table-regular');
      cy.get('main').findByLabelText('Regular table').focus().scrollTo(50, 0);
      cy.get('table').should('exist');
    });

    it('show shadow scroll hint to the left, when scrolled to the end', () => {
      cy.loadStory('table-regular');
      cy.get('main').findByLabelText('Regular table').focus().scrollTo('right');
      cy.get('table').should('exist');
    });
  });

  describe('render regular table with all cell types', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('table-regular');
        cy.findByText('Hard').click(); // Open menu
        cy.get('table').should('exist');
      });
    });
  });

  describe('render inverted table with all cell types', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('table-inverted');
        cy.findByText('Hard').click(); // Open menu
        cy.get('table').should('exist');
      });
    });
  });
});

export {};
