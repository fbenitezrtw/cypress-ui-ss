import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventoryPage from "../../pages/InventoryPage";

When("the user selects the {string} sorting option", (optionText) => {
  inventoryPage.selectSortingOption(optionText);
});

Then("the items on the page should be sorted by Name in ascending order", () => {
  inventoryPage.verifyItemsSortedAscending();
});

Then("the items on the page should be sorted by Name in descending order", () => {
  inventoryPage.verifyItemsSortedDescending();
});