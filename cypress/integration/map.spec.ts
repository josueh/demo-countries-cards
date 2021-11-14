describe('Map', () => {
  it('User should be able to see some countries', () => {
    cy.startsApp();
    cy.get('svg').find('path').should(`have.length.greaterThan`, 10);
  });

  it('User should be able to select a country by mouse click', () => {
    const country = 'Brazil';
    cy.startsApp();
    cy.get(`svg [data-testid="${country}"]`).should(`exist`).click();
    cy.contains(country);
  });
});
