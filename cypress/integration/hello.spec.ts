describe('Demo - Countries Cards', () => {
  it('User should be able to see a "Hello" message', () => {
    cy.startsApp();
    cy.contains(/Hello/i);
  });
});
