import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import formPage from "../pages/form_page";
import { generateUser } from "../../../fixtures/generateUser";

const userData = generateUser()

Given("eu esteja na página Practice Form", () => {
  formPage.visit()
  formPage.assertTitle()
});

When("eu preencho o formulário com dados aleatórios", () => {
  formPage.fillForm(userData)
});

When("eu submeto o formulário", () => {
  formPage.submitForm();
});

Then("um popup deve ser exibido", () => {
  formPage.assertPopupVisible()
});

Then("eu fecho o popup", () => {
  formPage.closePopup()
});
