const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("already checkboxes page", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("https://practice.expandtesting.com/checkboxes", {
    headers: { "Cache-Control": "no-cache" },
  });

  // Block iklan
  cy.intercept("GET", "**/adsbygoogle.js", { statusCode: 204, body: "" });
  cy.intercept("GET", "**/pagead/*", { statusCode: 204, body: "" });
});

Then("should see title name checkboxes", () => {
  cy.contains("Sample Checkboxes page for practice test automation").should(
    "be.visible"
  );
});

Then("should see information <p> checkboxes", () => {
  cy.contains(
    "This page provides sample checkboxes for practice test automation."
  ).should("be.visible");
});

Then("should see information <br> checkboxes", () => {
  cy.contains(
    "Checkboxes are commonly used in both web and mobile applications to allow users to enable or disable various options and features."
  ).should("be.visible");
});

Then("should see how to use checkboxes", () => {
  cy.contains(
    "You can use this checkboxes page for practicing test automation with Selenium or other tools like Playwright, Cypress, etc."
  ).should("be.visible");
});

Then("should see 2 checkboxes", () => {
  cy.get("input[type='checkbox']").should("have.length", 2);
});

When("user click the first checkbox", () => {
  cy.get("input[type='checkbox']").first().check({ force: true });
});

Then("first checkbox should be checked", () => {
  cy.get("input[type='checkbox']").first().should("be.checked");
});

When("user uncheck the first checkbox", () => {
  cy.get("input[type='checkbox']").first().uncheck({ force: true });
});

Then("first checkbox should not be checked", () => {
  cy.get("input[type='checkbox']").first().should("not.be.checked");
});

Then("second checkbox should be checked", () => {
  cy.get("input[type='checkbox']").eq(1).should("be.checked");
});

When("user click the second checkbox", () => {
  cy.get("input[type='checkbox']").eq(1).should("be.checked");
});

When("user uncheck the second checkbox", () => {
  cy.get("input[type='checkbox']").eq(1).uncheck({ force: true });
});

Then("second checkbox should not be checked", () => {
  cy.get("input[type='checkbox']").eq(1).should("not.be.checked");
});
