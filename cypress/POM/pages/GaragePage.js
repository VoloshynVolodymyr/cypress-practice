class GaragePage {
  get addCarButton() {
    return cy.get("app-panel-layout button");
  }

  get fuelExpensesLink() {
    return cy.get('a[routerlink="expenses"]');
  }

  clickAddCarButton() {
    this.addCarButton.click();
  }

  navigateToFuelExpensesPage() {
    this.fuelExpensesLink.click();
  }
}

export default new GaragePage();
