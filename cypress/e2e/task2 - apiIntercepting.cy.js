import HomePage from "../POM/pages/HomePage";

describe("API requests for cars", () => {
  before(() => {
    cy.intercept("GET", "/api/users/profile", {
      fixture: "fakeUserName.json",
    }).as("setFakeUserName");

    HomePage.visit("/");
    HomePage.signInUser("vva1979@ukr.net", "Vovan1979");
    HomePage.profileLink.click();
  });

  it("Intercepts profile data", () => {
    cy.intercept("GET", "/api/users/profile", {
      fixture: "fakeUserName.json",
    }).as("setFakeUserName");

    cy.wait("@setFakeUserName").then((xhr) => {
      const fakeName =
        xhr.response.body.data.name + " " + xhr.response.body.data.lastName;
      expect(fakeName).to.be.eq("Polar Bear");
      cy.get("p.profile_name").should("contain", "Polar Bear");
    });
  });
});
