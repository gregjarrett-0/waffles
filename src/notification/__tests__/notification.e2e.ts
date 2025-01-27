const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('Notification', () => {
  it('render a notification', () => {
    cy.loadStory('notification-basic');
    cy.findByText('Basic notification title').should('exist');
    cy.findByText('Basic notification description.').should('exist');
    cy.findByLabelText('Close notification').should('exist');
  });

  it('render a banner notification', () => {
    cy.loadStory('notification-banner');
    cy.findByText('Banner notification title').should('exist');
    cy.findByText('Banner notification description.').should('exist');
    cy.findByLabelText('Close notification').should('exist');
  });

  it('notification could be hidden by clicking a close button', () => {
    cy.loadStory('notification-basic');
    cy.findByLabelText('Close notification').click();
    cy.wait(1000);
    cy.findByText('Basic notification title').should('not.exist');
  });

  describe('render inline and banner mode', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`in all variants, on ${size} screen device `, () => {
        cy.viewport(width, height);
        cy.loadStory('notification-variants');
        cy.get('section').should('have.length', 20);
      });

      it(`in all configurations, on ${size} screen device `, () => {
        cy.viewport(width, height);
        cy.loadStory('notification-configuration');
        cy.get('section').should('have.length', 8);
      });
    });
  });
});

export {};
