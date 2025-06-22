const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("already broken images page", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("https://practice.expandtesting.com/broken-images", {
    headers: { "Cache-Control": "no-cache" },
  });

  // Block iklan
  cy.intercept("GET", "**/adsbygoogle.js", { statusCode: 204, body: "" });
  cy.intercept("GET", "**/pagead/*", { statusCode: 204, body: "" });
});

Then("should title name broken images", () => {
  cy.contains("Broken Images page for Automation Testing Practice").should(
    "be.visible"
  );
});

Then("should display 3 images", () => {
  cy.get(".page-layout img").should("have.length", 3);
});

Then("first image should be broken", () => {
  cy.get(".page-layout img")
    .eq(0)
    .then(($img) => {
      expect($img[0].naturalWidth).to.eq(0);
    });
});

Then("second image should be broken", () => {
  cy.get(".page-layout img")
    .eq(1)
    .then(($img) => {
      expect($img[0].naturalWidth).to.eq(0);
    });
});

Then("third image should load successfully", () => {
  cy.get(".page-layout img")
    .eq(2)
    .then(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    });
});

Then("all images should load in the DOM", () => {
  cy.get(".page-layout img").each(($img) => {
    cy.wrap($img).should("exist");
  });
});
