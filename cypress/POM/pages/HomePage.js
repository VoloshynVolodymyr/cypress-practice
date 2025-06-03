class HomePage {
  get signUpButton() {
    return cy.get("button.btn-primary");
  }

  get signInButton() {
    return cy.contains("Sign In");
  }

  get emailField() {
    return cy.get("#signinEmail");
  }

  get passwordField() {
    return cy.get("#signinPassword");
  }

  get loginButton() {
    return cy.contains("Login");
  }

  get profileLink() {
    return cy.get('a[href="/panel/profile"]').last();
  }

  visit() {
    cy.visit("/");
  }

  signUpButtonClick() {
    this.signUpButton.click();
  }

  signInUser(email, password) {
    this.signInButton.click();
    this.emailField.type(email);
    this.passwordField.type(password);
    this.loginButton.click();
  }
}

export default new HomePage();
