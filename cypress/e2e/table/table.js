const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("already dynamic table page", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("https://practice.expandtesting.com/dynamic-table", {
    headers: { "Cache-Control": "no-cache" },
  });

  // Block iklan
  cy.intercept("GET", "**/adsbygoogle.js", { statusCode: 204, body: "" });
  cy.intercept("GET", "**/pagead/*", { statusCode: 204, body: "" });
});

Then("display title name the dynamic table", () => {
  cy.contains("Dynamic Table page for Automation Testing Practice").should(
    "be.visible"
  );
});

Then("display information the dynamic table", () => {
  cy.contains(
    "Below you see a table where columns and rows change their position upon page reload."
  ).should("be.visible");
});

Then("display title name scenario", () => {
  cy.contains("Scenario").should("be.visible");
});

Then("display information scenario", () => {
  cy.contains("For Chrome process get value of CPU load.").should("be.visible");
  cy.contains("Compare it with value in the yellow label.").should(
    "be.visible"
  );
});

Then("display title name playground", () => {
  cy.contains("Playground").should("be.visible");
});

Then("display title name task manager", () => {
  cy.contains("Task Manager").should("be.visible");
});

Then("display the dynamic table", () => {
  cy.get(".table").should("be.visible");
});

Then("display header the dynamic table", () => {
  cy.get(".table thead tr").contains("Name").should("be.visible");
  cy.get(".table thead tr").contains("Network").should("be.visible");
  cy.get(".table thead tr").contains("Disk").should("be.visible");
  cy.get(".table thead tr").contains("CPU").should("be.visible");
  cy.get(".table thead tr").contains("Memory").should("be.visible");
});

Then("table should have 5 rows headers", () => {
  cy.get("table.table.table-striped thead tr th").should("have.length", 5);
});

Then("table should have 4 column headers", () => {
  cy.get("table.table.table-striped tbody tr").should("have.length", 4);
});

Then("table should contain a row for {string}", (browser) => {
  cy.get(".table").contains("td", browser).should("exist");
});

Then("validate CPU value from Chrome", () => {
  cy.get("table thead tr th").then(($ths) => {
    const cpuIndex = [...$ths].findIndex((th) => th.innerText.trim() === "CPU");
    expect(cpuIndex).to.be.greaterThan(-1);
    cy.contains("td", "Chrome")
      .parent("tr")
      .find("td")
      .eq(cpuIndex)
      .invoke("text")
      .then((cpuText) => {
        cy.log("validate CPU value from Chrome:", cpuText.trim());
      });
  });
});

When("display Chrome CPU above table", () => {
  cy.get(".bg-warning").should("be.visible");
});

Then("should match the Chrome CPU value in the label", function () {
  cy.get("table thead tr th").then(($ths) => {
    const cpuIndex = [...$ths].findIndex((th) => th.innerText.trim() === "CPU");
    expect(cpuIndex).to.be.greaterThan(-1);
    cy.contains("td", "Chrome")
      .parent("tr")
      .find("td")
      .eq(cpuIndex)
      .invoke("text")
      .then((tableCpu) => {
        const cpuValueFromTable = tableCpu.trim();
        cy.get("#chrome-cpu")
          .invoke("text")
          .then((labelText) => {
            const labelCpu = labelText.match(/Chrome CPU:\s*([\d.]+%)/)?.[1];
            expect(labelCpu).to.exist;
            const toNum = (val) => parseFloat(val.replace("%", ""));
            const diff = Math.abs(toNum(cpuValueFromTable) - toNum(labelCpu));
            expect(diff).to.be.lessThan(0.5);
          });
      });
  });
});
