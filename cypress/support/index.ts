import 'cypress-axe';
import 'cypress-plugin-tab';
import './commands';

afterEach(() => {
  cy.a11yCheck();
});

Cypress.on('uncaught:exception', (error) => {
  return !error.message.includes('ResizeObserver');
});
