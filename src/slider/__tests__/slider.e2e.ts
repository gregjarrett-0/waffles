describe('Slider', () => {
  it('renders with all labels by default', () => {
    cy.loadStory('slider-basic');
    cy.get('main').findByRole('slider').should('exist');
  });

  it('renders proper focus state of handle', () => {
    cy.loadStory('slider-basic');
    cy.get('main').findByRole('slider').focus();
    cy.get('main').findByRole('slider').should('exist');
  });

  it('by default value of the slider is decreased by 1 when using left arrow key', () => {
    cy.loadStory('slider-basic');
    cy.get('main').findByRole('slider').focus();
    cy.get('body').type('{leftarrow}');
    cy.get('main').findByText('49');
  });

  it('by default value of the slider is increased by 1 when using right arrow key', () => {
    cy.loadStory('slider-basic');
    cy.get('main').findByRole('slider').focus();
    cy.get('body').type('{rightarrow}');
    cy.get('main').findByText('51');
  });

  it('width of the inputs is adjusted automatically', () => {
    cy.loadStory('slider-long-inputs');
    cy.get('main').findAllByTestId('slider-track').should('have.length', 2);
  });

  describe('with input enabled', () => {
    it('change the value via input field', () => {
      cy.loadStory('slider-input');
      cy.get('main').find('input').clear().type('85');
      cy.get('main')
        .findByRole('slider')
        .should('have.attr', 'aria-valuetext')
        .and('eq', '85');
    });

    it('show input error if provided value is less than min', () => {
      cy.loadStory('slider-input');
      cy.get('main').find('input').clear().type('-10');
      cy.get('main')
        .find('input')
        .should('have.attr', 'aria-invalid')
        .and('eq', 'true');
    });

    it('show input error if provided value is greater than max', () => {
      cy.loadStory('slider-input');
      cy.get('main').find('input').clear().type('200');
      cy.get('main')
        .find('input')
        .should('have.attr', 'aria-invalid')
        .and('eq', 'true');
    });
  });

  describe('with custom labels, range, and step', () => {
    it('renders properly formatted labels', () => {
      cy.loadStory('slider-custom');
      cy.get('main')
        .findByRole('slider')
        .should('have.attr', 'aria-valuetext')
        .and('eq', '$20.00');
      cy.get('main').findByText('$10.00').should('exist');
      cy.get('main').findByText('$30.00').should('exist');
    });

    it('value should be properly increased by custom step amount', () => {
      cy.loadStory('slider-custom');
      cy.get('main').findByRole('slider').focus();
      cy.get('body').type('{rightarrow}');
      cy.get('main').findByText('$20.25');
    });
  });

  describe('with one or two handles, disabled, with inputs, and without any labels', () => {
    it('renders regular', () => {
      cy.loadStory('slider-regular');
      cy.get('main').findAllByRole('slider').should('have.length', 9);
    });

    it('renders inverted', () => {
      cy.loadStory('slider-inverted');
      cy.get('main').findAllByRole('slider').eq(0).focus();
      cy.get('main').findAllByRole('slider').should('have.length', 9);
    });
  });
});
