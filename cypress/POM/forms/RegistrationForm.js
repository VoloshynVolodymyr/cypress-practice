class RegistrationForm {
  get userNameField() {
    return cy.get("input#signupName").should("be.visible");
  }

  get userLastNameField() {
    return cy.get("input#signupLastName").should("be.visible");
  }

  get emailField() {
    return cy.get("input#signupEmail").should("be.visible");
  }

  get passwordField() {
    return cy.get("input#signupPassword").should("be.visible");
  }

  get repeatPasswordField() {
    return cy.get("input#signupRepeatPassword").should("be.visible");
  }

  get registerButton() {
    return cy.get("app-signup-modal button.btn-primary").should("be.visible");
  }

  submitFormWithCredentials(name, lastName, email, password, rePassword) {
    this.userNameField.type(name);
    this.userLastNameField.type(lastName);
    this.emailField.type(email);
    this.passwordField.type(password);
    this.repeatPasswordField.type(rePassword);
    this.registerButton.click();
    cy.url().should("contain", "garage");
  }
}

export default new RegistrationForm();
