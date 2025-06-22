import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("already web inputs page", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("https://practice.expandtesting.com/inputs", {
    headers: { "Cache-Control": "no-cache" },
  });

  // Block iklan
  cy.intercept("GET", "**/adsbygoogle.js", { statusCode: 204, body: "" });
  cy.intercept("GET", "**/pagead/*", { statusCode: 204, body: "" });
});

Then("title name web inputs should be displayed", () => {
  cy.contains("Web inputs page for Automation Testing Practice").should(
    "be.visible"
  );
});

Then("information web inputs should be displayed", () => {
  cy.contains(
    "Web inputs refer to the data or information provided by users through various input mechanisms on a website."
  ).should("be.visible");
  cy.contains(
    " Web inputs allow users to interact with web pages, submit forms, and provide data for processing."
  ).should("be.visible");
});

Then("display input button should be visible", () => {
  cy.contains("button", "Display Inputs").should("be.visible");
});

Then("clear input button should be visible", () => {
  cy.contains("button", "Clear Inputs").should("be.visible");
});

When("click {string} button", () => {
  cy.get("#btn-display-inputs").click();
});

When("fill number {string}", (valueNumber) => {
  cy.get("input[type='number']").type(valueNumber);
});

Then("input number field should {string}", (resultNumber) => {
  cy.get("input[type='number']").should("have.value", resultNumber);
});

When("fill text {string}", (valueText) => {
  cy.get("input[type='text']").type(valueText);
});

Then("input text field should {string}", (resultText) => {
  cy.get("input[type='text']").should("have.value", resultText);
});

When("fill password {string}", (valuePassword) => {
  cy.get("input[type='password']").type(valuePassword);
});

Then("input password field should {string}", (resultPassword) => {
  cy.get("input[type='password']").should("have.value", resultPassword);
});

When("fill date {string}", (valueDate) => {
  cy.get("input[type='date']").type(valueDate);
});

Then("input date field should {string}", (resultDate) => {
  cy.get("input[type='date']").should("have.value", resultDate);
});

When("fill {string} number field", function (numberValue) {
  cy.get("input[type='number']").type(numberValue);
  this.inputNumber = numberValue;
});

When("fill {string} text field", function (textValue) {
  cy.get("input[type='text']").type(textValue);
  this.inputText = textValue;
});

When("fill {string} password field", function (passwordValue) {
  cy.get("input[type='password']").type(passwordValue);
  this.inputPassword = passwordValue;
});

When("fill {string} date field", function (dateValue) {
  cy.get("input[type='date']").type(dateValue);
  this.inputDate = dateValue;
});

Then("output number should be displayed", function () {
  cy.get("#output-number").should(($el) => {
    const value = $el.text().trim();
    if (this.inputNumber) {
      expect(value).to.eq(this.inputNumber);
    } else {
      expect(value).to.eq("");
    }
  });
});

Then("output text should be displayed", function () {
  cy.get("#output-text").should(($el) => {
    const value = $el.text().trim();
    if (this.inputText) {
      expect(value).to.eq(this.inputText);
    } else {
      expect(value).to.eq("");
    }
  });
});

Then("output password should be displayed", function () {
  cy.get("#output-password").should(($el) => {
    const value = $el.text().trim();
    if (this.inputPassword) {
      expect(value).to.eq(this.inputPassword);
    } else {
      expect(value).to.eq("");
    }
  });
});

Then("output date should be displayed", function () {
  cy.get("#output-date").should(($el) => {
    const value = $el.text().trim();
    if (this.inputDate) {
      expect(value).to.eq(this.inputDate);
    } else {
      expect(value).to.eq("");
    }
  });
});

Then("outputs should all be displayed", function () {
  // Output Number
  cy.get("#output-number").should(($el) => {
    const value = $el.text().trim();
    if (this.inputNumber) {
      expect(value).to.eq(this.inputNumber);
    } else {
      expect(value).to.eq("");
    }
  });
  // Output Text
  cy.get("#output-text").should(($el) => {
    const value = $el.text().trim();
    if (this.inputText) {
      expect(value).to.eq(this.inputText);
    } else {
      expect(value).to.eq("");
    }
  });
  // Output Password
  cy.get("#output-password").should(($el) => {
    const value = $el.text().trim();
    if (this.inputPassword) {
      expect(value).to.eq(this.inputPassword);
    } else {
      expect(value).to.eq("");
    }
  });
  // Output Date
  cy.get("#output-date").should(($el) => {
    const value = $el.text().trim();
    if (this.inputDate) {
      expect(value).to.eq(this.inputDate);
    } else {
      expect(value).to.eq("");
    }
  });
});
