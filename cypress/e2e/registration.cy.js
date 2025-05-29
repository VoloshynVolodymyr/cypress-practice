/// <reference types="cypress" />

describe("Registration form validation", () => {
  const selectors = {
    name: "input#signupName",
    lastName: "input#signupLastName",
    email: "input#signupEmail",
    password: "input#signupPassword",
    repeatPassword: "input#signupRepeatPassword",
    registerButton: "button.btn-primary",
    modalButton: "button.hero-descriptor_btn"
  };

  beforeEach(() => {
    cy.visit("/");
    cy.get(selectors.modalButton).click();
  });

  describe("Name field verification", () => {
    it("Check name field with empty input", () => {
      cy.get(selectors.name).focus().blur()
        .should("have.css", "border-color", "rgb(220, 53, 69)");
      cy.get(`${selectors.name}~div>p`).should("contain", "Name required");
    });

  it("Check name field with wrong data input", () => {
    cy.get(selectors.name)
      .type("23")
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.name}~div>p`).should("contain", "Name is invalid");
  });

  it("Check name field with wrong length", () => {
    cy.get(selectors.name)
      .type("A")
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.name}~div>p`).should(
      "contain",
      "Name has to be from 2 to 20 characters long"
    );
  });

  it("Check name field with spaces in the end/beginning", () => {
    cy.get(selectors.name)
      .type("  John  ")
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.name}~div>p`).should("contain", "Name is invalid");
  });
});

describe("Last name field verification with wrong credentials", () => {

  it("Check last name field with empty input", () => {
    cy.get(selectors.lastName)
      .focus()
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.lastName}~div>p`).should(
      "contain",
      "Last name required"
    );
  });

  it("Check last name field with wrong data input", () => {
    cy.get(selectors.lastName)
      .type("23")
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.lastName}~div>p`).should(
      "contain",
      "Last name is invalid"
    );
  });

  it("Check last name field with wrong length", () => {
    cy.get(selectors.lastName)
      .type("A")
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.lastName}~div>p`).should(
      "contain",
      "Last name has to be from 2 to 20 characters long"
    );
  });
});

describe("Email field verification with wrong credentials", () => {

  it("Check email field with empty input", () => {
    cy.get(selectors.email)
      .focus()
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.email}~div>p`).should("contain", "Email required");
  });

  it("Check email field with wrong data input", () => {
    cy.get(selectors.email)
      .type("test@mail")
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.email}~div>p`).should("contain", "Email is incorrect");
  });
});

describe("Password field verification with wrong credentials", () => {

  it("Check password field with empty input", () => {
    cy.get(selectors.password)
      .focus()
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.password}~div>p`).should("contain", "Password required");
  });

  it("Check password field with wrong data input", () => {
    cy.get(selectors.password)
      .type("short")
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.password}~div>p`).should(
      "contain",
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    );
  });
});

describe("Re-enter password field verification with wrong credentials", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("button.hero-descriptor_btn").click();
  });

  it("Check password field with empty input", () => {
    cy.get(selectors.password).type("Correct!1");
    cy.get(selectors.repeatPassword)
      .focus()
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.repeatPassword}~div>p`).should(
      "contain",
      "Re-enter password required"
    );
  });

  it("Check password field with not match input", () => {
    cy.get(selectors.repeatPassword)
      .type("nonCorrect!1")
      .blur()
      .should("have.css", "border-color", "rgb(220, 53, 69)");
    cy.get(`${selectors.repeatPassword}~div>p`).should(
      "contain",
      "Passwords do not match"
    );
  });
});

describe("Register button state depending on form data", () => {

  it("Register button should be disabled with invalid inputs in all fields", () => {
    cy.get(selectors.name).type("1");
    cy.get(selectors.lastName).focus().blur();
    cy.get(selectors.email).type("invalidemail");
    cy.get(selectors.password).type("123");
    cy.get(selectors.repeatPassword).type("321");

    cy.get(selectors.registerButton).contains('Register').should("be.disabled");
  });

  it("Register button should be enabled with all valid inputs", () => {
    cy.get(selectors.name).type("John");
    cy.get(selectors.lastName).type("Snow");
    cy.get(selectors.email).type("winterfell@orth.gov");
    cy.get(selectors.password).type("Password123#");
    cy.get(selectors.repeatPassword).type("Password123#");

    cy.get(selectors.registerButton).contains('Register').should("not.be.disabled");
  });
});

describe("Successful registration", () => {

  it("Registers a new user with valid data", () => {
    const email = `vva1979+${Date.now()}@ukr.net`;

    cy.get(selectors.name).type("Volodymyr");
    cy.get(selectors.lastName).type("Voloshyn");
    cy.get(selectors.email).type(email);
    cy.get(selectors.password).type("Password!1");
    cy.get(selectors.repeatPassword).type("Password!1");

    cy.get(selectors.registerButton).contains('Register').click();

    cy.url().should("eq", "https://qauto.forstudy.space/panel/garage");
  });
});
});
