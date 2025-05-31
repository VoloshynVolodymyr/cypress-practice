class AddCarForm {
  get brandField() {
    return cy.get("#addCarBrand");
  }

  get modelField() {
    return cy.get("#addCarModel");
  }

  get mileageField() {
    return cy.get("#addCarMileage");
  }

  get addButton() {
    return cy.get("app-add-car-modal button.btn-primary");
  }

  addCar(brand, model, mileage) {
    this.brandField.select(brand);
    this.modelField.select(model);
    this.mileageField.type(mileage);
    this.addButton.click();
  }
}

export default new AddCarForm();
