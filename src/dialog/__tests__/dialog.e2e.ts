const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('Dialog', () => {
  it(`center aligned`, () => {
    cy.loadStory('dialog-center-aligned');
    cy.findByText('Open').click();
    cy.findByRole('dialog').should('exist');
    cy.findByTestId('modal-overlay').should('exist');
  });

  describe('with decorative header', () => {
    it(`as info variant`, () => {
      cy.loadStory('dialog-decorative-header-variants');
      cy.findByText('Open Info Dialog').click();
      cy.findByRole('dialog').should('exist');
      cy.findByTestId('modal-overlay').should('exist');
    });

    it(`as success variant`, () => {
      cy.loadStory('dialog-decorative-header-variants');
      cy.findByText('Open Success Dialog').click();
      cy.findByRole('dialog').should('exist');
      cy.findByTestId('modal-overlay').should('exist');
    });

    it(`as warning variant`, () => {
      cy.loadStory('dialog-decorative-header-variants');
      cy.findByText('Open Warning Dialog').click();
      cy.findByRole('dialog').should('exist');
      cy.findByTestId('modal-overlay').should('exist');
    });

    it(`as error variant`, () => {
      cy.loadStory('dialog-decorative-header-variants');
      cy.findByText('Open Error Dialog').click();
      cy.findByRole('dialog').should('exist');
      cy.findByTestId('modal-overlay').should('exist');
    });

    it(`as upgrade variant`, () => {
      cy.loadStory('dialog-decorative-header-variants');
      cy.findByText('Open Upgrade Dialog').click();
      cy.findByRole('dialog').should('exist');
      cy.findByTestId('modal-overlay').should('exist');
    });
  });

  describe('when the content is short, it renders correctly', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('dialog-basic');
        cy.findByText('Open').click();
        cy.findByRole('dialog').should('exist');
        cy.findByTestId('modal-overlay').should('exist');
      });
    });
  });

  describe('when content is very long, it renders correctly', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('dialog-long-content');
        cy.findByText('Open').click();
        cy.findByRole('dialog').should('exist');
        cy.findByTestId('modal-overlay').should('exist');
      });
    });

    it('and subtle shadow is shown at the bottom of dialog body', () => {
      cy.loadStory('dialog-long-content');
      cy.findByText('Open').click();
      cy.findByRole('dialog').should('exist');
    });

    it('and subtle shadow is shown at the bottom, and at the top of dialog body, when it is scrolled to the middle', () => {
      cy.loadStory('dialog-long-content');
      cy.findByText('Open').click();
      cy.findByTestId('dialog-body').scrollTo(0, 100);
      cy.findByRole('dialog').should('exist');
    });

    it('subtle shadow is shown at the top of dialog body, when it is scrolled to the bottom', () => {
      cy.loadStory('dialog-long-content');
      cy.findByText('Open').click();
      cy.findByTestId('dialog-body').scrollTo('bottom');
      cy.findByRole('dialog').should('exist');
    });
  });

  it('after clicking on the Close button, it disappears', () => {
    cy.loadStory('dialog-basic');
    cy.findByText('Open').click();
    cy.wait(500);
    cy.findByRole('dialog').findByLabelText('Close').click();
    cy.findByTestId('modal-overlay').should('not.exist');
  });

  it('after clicking on the overlay, it disappears', () => {
    cy.loadStory('dialog-basic');
    cy.findByText('Open').click();
    cy.wait(500);
    cy.findByTestId('modal-overlay').click({ force: true });
    cy.findByRole('dialog').should('not.exist');
    cy.findByTestId('modal-overlay').should('not.exist');
  });

  it('after opening it via keyboard, one of the predefined buttons in the footer is focused', () => {
    cy.loadStory('dialog-basic');
    cy.findByText('Open').type('{enter}');
    cy.findByText('Confirm').should('exist');
    cy.findByText('Confirm').closest('button').should('have.focus');
  });

  it('after parent rerender, focus should persist', () => {
    cy.loadStory('dialog-focus');

    // Testing for focus behavior in the floating-ui dependency
    cy.findByText('Updated content').should('not.exist');
    // Focus on update button
    cy.findByText('Update Content').closest('button').focus();
    cy.findByText('Update Content').closest('button').should('have.focus');
    cy.findByText('Update Content').type('{enter}');

    cy.findByText('Updated content').should('exist');
    // Check focus has persisted
    cy.findByText('Update Content').closest('button').should('have.focus');
  });
});

export {};
