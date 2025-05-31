class AddExpenses {
  get addExpenseButton() {
    return cy.get("button.btn-primary").contains("Add an expense");
  }

  get table() {
    return cy.get("table.table");
  }

  checkIfExpensesAdded() {
    this.table.should("be.visible");
  }
}

export default new AddExpenses();
