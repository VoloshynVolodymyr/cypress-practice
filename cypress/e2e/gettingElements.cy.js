/// <reference types="cypress" />

describe("getting elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should display correct header links', () => {
    const navButtons = ["Home", "About", "Contacts"];
    cy.get("nav")
      .find(".header-link")
      .each(($el, index) => {
        expect($el.text()).eq(navButtons[index]);
      });
  });

  it('should display correct footer contact info', () => {
    cy.get(".socials_icon").should("have.length", 5);
    cy.get(".contacts_link").first().should("have.text", "ithillel.ua");
    cy.get(".contacts_link").last().should("have.text", "support@ithillel.ua");
  });

  it("practicing with invoke", () => {
    cy.get(".about-picture_img")
      .first()
      .invoke("attr", "src")
      .should("contain", "/assets/images/homepage/info_1.jpg");
  });

  it("practicing with contains", () => {
    cy.contains("manuals").should("have.class", "h2");
  });

  it("practicing with prev", () => {
    cy.get(".hero-descriptor_btn")
      .prev("p")
      .should("contain", "With the help of the Hillel auto project");
  });
});
