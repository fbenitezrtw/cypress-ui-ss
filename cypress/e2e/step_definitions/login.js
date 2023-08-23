import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");

Given("A user opens a Saucedemo website", () => {
  cy.visit("/");
});

When("A user enters the username {string}", (username) => {
  loginPage.typeUsername(username);
});

When("A user enters the password {string}", (password) => {
  loginPage.typePassword(password);
});

When("A user clicks on the login button", () => {
  loginPage.clickLogin();
});

Then("the URL will contain the inventory subdirectory", () => {
  cy.url().should("contain", "/inventory.html");
});