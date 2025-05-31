// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import RegistrationForm from "../POM/forms/RegistrationForm";
import HomePage from "../POM/pages/HomePage";

Cypress.Commands.add("signUpUser", () => {
  const userName = Cypress.env("userName");
  const userLastName = Cypress.env("userLastName");
  const email = `vva1979+${Date.now()}@ukr.net`;
  const userPassword = Cypress.env("userPassword");
  const userRePassword = Cypress.env("userRePassword");

  HomePage.visit();
  HomePage.signUpButtonClick();

  RegistrationForm.submitFormWithCredentials(
    userName,
    userLastName,
    email,
    userPassword,
    userRePassword
  );
});
