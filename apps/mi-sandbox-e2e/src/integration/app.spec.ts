import { getGreeting } from '../support/app.po';

describe('mi-sandbox', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to mi-sandbox!');
  });
});
