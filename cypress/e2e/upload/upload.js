const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("already upload page", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("https://practice.expandtesting.com/upload", {
    headers: { "Cache-Control": "no-cache" },
  });

  // Block iklan
  cy.intercept("GET", "**/adsbygoogle.js", { statusCode: 204, body: "" });
  cy.intercept("GET", "**/pagead/*", { statusCode: 204, body: "" });
});

Then("title name upload should be displayed", () => {
  cy.contains("File Uploader page for Automation Testing Practice").should(
    "be.visible"
  );
});

Then("text warning upload should be displayed", () => {
  cy.contains("Only a file less than 500KB will be accepted.").should(
    "be.visible"
  );
});

Then("information upload should be displayed", () => {
  cy.contains(
    "A file upload feature that can be used by QA, SDET, and developers to practice uploading test automation scenarios"
  ).should("be.visible");
  cy.contains(
    "Choose a file on your system and then click upload. Or, drag and drop a file into the area below."
  ).should("be.visible");
});

Then("form upload should be visible", () => {
  cy.get("[data-testid='file-input']").should("be.visible");
});

Then("upload button should be visible", () => {
  cy.get("[data-testid='file-submit']").should("be.visible");
});

When("select {string} file", (FileName) => {
  cy.get('[data-testid="file-input"]').selectFile(
    `cypress/fixtures/${FileName}`
  );
});

Then("file should be displayed", () => {
  cy.get('[data-testid="file-input"]').should("have.attr", "required");
});

When("click the upload button", () => {
  cy.get("[data-testid='file-submit']").click();
});

Then("uploaded file successfully", () => {
  cy.contains("h1", "File Uploaded!").should("be.visible");
  cy.get("#uploaded-files")
    .invoke("text")
    .then((UploadedFileName) => {
      cy.log("uploaded file name: " + UploadedFileName.trim());
    });
});

Then("file error uploaded", () => {
  cy.get("#flashMessage")
    .should("be.visible")
    .within(() => {
      cy.get("b").should(
        "contain",
        "File too large, please select a file less than 500KB"
      );
      cy.get("button").should("have.class", "btn-close");
      cy.root()
        .invoke("text")
        .then((ErrorMessage) => {
          cy.log("displayed error message: " + ErrorMessage.trim());
        });
    });
});

Then("display error file validation", () => {
  cy.get("[data-testid='file-submit']").click();
  cy.get('[data-testid="file-input"]').should("have.attr", "required");
});

When("drag and drop {string} file", (FileName) => {
  cy.get('[data-testid="file-input"]').selectFile(
    `cypress/fixtures/${FileName}`,
    { action: "drag-drop" }
  );
});
