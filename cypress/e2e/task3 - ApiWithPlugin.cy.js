/// <reference types="cypress" />

import { loginAndGetToken } from "../support/commands";
import "cypress-plugin-api";

describe("API requests for cars", () => {
  let token, carID;
  before(() => {
    loginAndGetToken().then((t) => {
      token = t;
    });
  });

  it("POST - create car", () => {
    const carBody = { carBrandId: 2, carModelId: 8, mileage: 25000 };
    cy.api({
      method: "POST",
      url: "api/cars",
      body: carBody,
      headers: {
        Cookie: token,
      },
    }).then((response) => {
      carID = response.body.data.id;
      expect(response.body.data.carBrandId).to.be.eq(carBody.carBrandId);
      expect(response.body.status).to.be.eq("ok");
    });
  });

  it("GET - get car brands", () => {
    cy.api("GET", "/api/cars/brands").then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body.data).to.have.length(5);
    });
  });

  it("GET - ger cars models", () => {
    cy.api("GET", "/api/cars/models").then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body.data).to.be.an("array").and.have.length(23);
    });
  });

  it("PUT - change existing car", () => {
    cy.api({
      method: "PUT",
      url: `api/cars/${carID}`,
      body: { mileage: 50000 },
      headers: {
        Cookie: token,
      },
    }).then((response) => {
      let responseBody = response.body;
      expect(responseBody.status).to.be.eq("ok");
      expect(responseBody.data.mileage).to.be.eq(50000);
    });
  });

  it("DELETE - remove car", () => {
    cy.api({
      method: "DELETE",
      url: `api/cars/${carID}`,
      headers: {
        Cookie: token,
      },
    }).then((response) => {
      const carID = response.body.data.carId;
      expect(response.body.status).to.be.eq("ok");
      expect(carID).to.be.eq(carID);
    });
  });
});
