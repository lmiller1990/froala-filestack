Cypress.Commands.add('getFroala', () => {
  return cy.get(".fr-element")
})
describe("rich text editor", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");

    // Clear any existing text and write some text
    cy.getFroala().clear();
    cy.getFroala().type("Hello, world!", { force: true });

    // Upload an image
    cy.intercept("/image").as("image");
    cy.get('[data-cmd="insertImage"]')
      .click()
      .get('input[type="file"]')
      .selectFile("cypress/fixtures/froala.png", { force: true });

    // Wait for image upload
    cy.wait("@image", { timeout: 10000 });

    // Validate post was automatically saved
    cy.get('[role="alert"]', { timeout: 50000 }).contains("Post saved");

    // Reload and verify data was persisted server side
    cy.reload();

    cy.getFroala().contains("Hello, world!")
    cy.getFroala().within(() => {
      cy.get('img')
    })
  });
});
