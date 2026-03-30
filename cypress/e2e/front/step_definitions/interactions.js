import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import interactionsPage from "../pages/interactions_page";

Given("eu esteja na página Sortable", () => {
  interactionsPage.visit()
});

When("eu ordeno os elementos em ordem crescente", () => {
  interactionsPage.sortAscending()
});

Then("os elementos devem estar em ordem crescente", () => {
  interactionsPage.assertAscendingOrder()
});
