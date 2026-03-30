import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import alertsPage from "../pages/alertsFrameWindows_page";

Given("eu esteja na página Browser Windows", () => {
  alertsPage.visit()
  alertsPage.assertTitle()
});

When("aciono o botão New Window", () => {
  alertsPage.clickNewWindow()
});

Then("uma nova janela deve ser aberta com o texto {string}", (text) => {
  alertsPage.visitNewWindowUrl()
  alertsPage.assertNewWindowText(text)
});

Then("ao retornar devo visualizar a página Browser Windows", () => {
  alertsPage.returnToMain()
  alertsPage.assertTitle()
});
