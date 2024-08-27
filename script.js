() => {
  cy.visit(baseUrl + "/main.html");
  cy.window().then((win) => {
    const Cat = win.Cat;

    // Stub the console.log method
    cy.stub(win.console, "log").as("consoleLog");

    // Create a new Cat instance and test methods
    const species = "Siamese";
    const myCat = new Cat(species);

    // Test makeSound method
    myCat.makeSound();
    cy.get("@consoleLog").should("be.calledWith", `The ${species} makes a sound`);

    // Test purr method
    myCat.purr();
    cy.get("@consoleLog").should("be.calledWith", `purr`);
  });
}