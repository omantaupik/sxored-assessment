import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("already should contain page", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("https://practice.expandtesting.com/assertions/should-contain", {
    headers: { "Cache-Control": "no-cache" },
  });

  // Block iklan
  cy.intercept("GET", "**/adsbygoogle.js", { statusCode: 204, body: "" });
  cy.intercept("GET", "**/pagead/*", { statusCode: 204, body: "" });
});

Then("display title should contain", () => {
  cy.contains("Should Contain page for Automation Testing Practice").should(
    "be.visible"
  );
});

Then("display information should contain", () => {
  cy.contains("should contain").should("be.visible");
  cy.contains(
    " - Asserts that a string includes a particular substring."
  ).should("be.visible");
});

Then("display card header of {string}", (expectedText) => {
  cy.get(".card-header").should("have.text", expectedText);
});

Then("display card body of {string} and {string}", (label, value) => {
  cy.contains("h6", label.trim()).should("be.visible");
  cy.contains("div", value.trim()).should("be.visible");
});
