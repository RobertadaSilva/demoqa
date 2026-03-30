import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import widgetsPage from "../pages/widgets_page";

Given("eu esteja na página Progress Bar", () => {
  widgetsPage.visit()
});

When("eu inicio e paro antes dos 25%", () => {
  widgetsPage.assertProgressBarTitle()
  widgetsPage.clickStartStop()
  widgetsPage.stopBefore(25)
});

Then("o valor deve ser menor ou igual a 25%", () => {
  widgetsPage.assertValueLessOrEqual(25)
});

When("eu inicio e aguardo chegar a 100%", () => {
  widgetsPage.clickStartStop();
  widgetsPage.waitUntilComplete();
});

Then("eu reseto a progress bar", () => {
  widgetsPage.clickReset()
  widgetsPage.assertReset()
});
