class HomePage {
  get signUpButton() {
    return cy.get("button.btn-primary");
  }

  visit() {
    cy.visit("/");
  }

  signUpButtonClick() {
    this.signUpButton.click();
  }
}

export default new HomePage();
