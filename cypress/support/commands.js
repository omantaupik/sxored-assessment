Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Assignment to constant variable")) {
    return false;
  } // for upload file setup
  if (err.message.includes("adsbygoogle.push")) {
    return false;
  } // for block ads setup
});
