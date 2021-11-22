/// <reference types="cypress" />

describe("Login", () => {
  it("should login successfully", () => {
    cy.visit("http://localhost:3000/sign-in");

    cy.get("input[placeholder=Email]").type("carlos1@email.com");
    cy.get("input[type=password").type("123456");
    cy.get("button").click();

    cy.url().should("equal", "http://localhost:3000/plans");
  });
});
