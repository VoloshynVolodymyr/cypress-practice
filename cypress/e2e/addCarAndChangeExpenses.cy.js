import GaragePage from "../POM/pages/GaragePage";
import AddCarForm from "../POM/forms/AddCarForm";
import AddExpenseForm from "../POM/forms/AddExpenseForm";
import AddExpenses from "../POM/pages/AddExpenses";

describe("Fuel Expenses", () => {
  beforeEach(() => {
    cy.signUpUser();
    addTestCars();
    GaragePage.navigateToFuelExpensesPage();
  });

  it("should allow adding fuel expenses for all vehicles", () => {
    AddExpenseForm.fillAndSubmitForAllVehicles();
    AddExpenses.checkIfExpensesAdded();
  });
});

function addTestCars() {
  GaragePage.clickAddCarButton();
  AddCarForm.addCar("Porsche", "Panamera", 50000);

  GaragePage.clickAddCarButton();
  AddCarForm.addCar("Audi", "TT", 25000);
}
