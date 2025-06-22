import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("already should match page", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("https://practice.expandtesting.com/assertions/should-match", {
    headers: { "Cache-Control": "no-cache" },
  });

  // Block iklan
  cy.intercept("GET", "**/adsbygoogle.js", { statusCode: 204, body: "" });
  cy.intercept("GET", "**/pagead/*", { statusCode: 204, body: "" });
});

Then("display title should match", () => {
  cy.contains("Should Match page for Automation Testing Practice").should(
    "be.visible"
  );
});

Then("display information should match", () => {
  cy.contains("should match").should("be.visible");
  cy.contains(
    " - Asserts that a value matches a particular regular expression."
  ).should("be.visible");
});

Then("display card header of {string}", (expectedText) => {
  cy.get(".card-header").should("have.text", expectedText);
});

Then("display card body of {string} and {string}", (label, value) => {
  cy.contains("h6", label.trim()).should("be.visible");
  cy.contains("div", value.trim()).should("be.visible");
});
