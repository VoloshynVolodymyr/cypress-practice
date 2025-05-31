import AddExpenses from "../pages/AddExpenses";

class AddExpenseForm {
  get formSubmitButton() {
    return cy.get("app-add-expense-modal .btn-primary");
  }

  get vehicleSelect() {
    return cy.get("#addExpenseCar");
  }

  get datePickerButton() {
    return cy.get("button.date-picker-toggle");
  }

  get mileageField() {
    return cy.get("input#addExpenseMileage");
  }

  get litersField() {
    return cy.get("input#addExpenseLiters");
  }

  get totalCostField() {
    return cy.get("input#addExpenseTotalCost");
  }

  openForm() {
    AddExpenses.addExpenseButton.click();
    cy.get("app-add-expense-modal").should("be.visible");
  }

  selectVehicleByValue(value) {
    this.vehicleSelect.select(value);
  }

  setReportDateToToday() {
    this.datePickerButton.click();
    cy.get("ngb-datepicker .ngb-dp-day:not(.disabled)")
      .contains(new Date().getDate().toString())
      .click();
  }

  setMileageRandom() {
    this.mileageField.invoke("val").then((currentValue) => {
      const currentMileage = parseInt(currentValue, 10) || 0;
      const additional = Math.floor(Math.random() * 400) + 10;
      const newMileage = currentMileage + additional;
      this.mileageField.clear().type(newMileage.toString());
    });
  }

  setLitersRandom() {
    const liters = Math.floor(Math.random() * 41) + 10;
    this.litersField.clear().type(liters.toString());
  }

  setTotalCostRandom() {
    const cost = Math.floor(Math.random() * 2501) + 500;
    this.totalCostField.clear().type(cost.toString());
  }

  submit() {
    this.formSubmitButton.click();
  }

  fillAndSubmitForAllVehicles() {
    this.openForm();

    this.vehicleSelect.find("option").then(($options) => {
      const values = [...$options].map((opt) => opt.value);

      values.forEach((value, i) => {
        cy.wrap(null).then(() => {
          this.selectVehicleByValue(value);
          this.setReportDateToToday();
          this.setMileageRandom();
          this.setLitersRandom();
          this.setTotalCostRandom();

          this.submit();
          if (i < values.length - 1) {
            this.openForm();
          }
        });
      });
    });
  }
}

export default new AddExpenseForm();
