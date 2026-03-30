import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import elementsPage from "../pages/elements_page"
import { generateUser } from "../../../fixtures/generateUser"

let userData;
const editedName = "Editado"
const createdUsers = []

Given("que eu estou na tela Web Tables", () => {
  elementsPage.visit()
});

When("eu cadastro um novo registro", () => {
  userData = generateUser()
  elementsPage.addRecord(userData)
});

Then("o registro deve estar visível na tabela", () => {
  elementsPage.assertRecordVisible(userData.firstName)
});

When("eu edito o registro", () => {
  elementsPage.editRecord(userData.firstName, editedName)
});

Then("o registro editado deve estar visível", () => {
  elementsPage.assertRecordVisible(editedName)
});

When("eu deleto o registro", () => {
  elementsPage.deleteRecord(userData.firstName);
});

Then("o registro não deve mais existir", () => {
  elementsPage.assertRecordNotExist(userData.firstName);
});

// Adicionando 12 novos itens na tabela
When("eu crio 12 usuários", () => {
  elementsPage.showMoreItems()
  for (let i = 1; i <= 12; i++) {
    const user = generateUser()
    user.firstName = `${user.firstName} ${i}`
    createdUsers.push(user.firstName)
    elementsPage.addRecord(user)
  }
});

// VERIFICAR
Then("todos devem estar visíveis na tabela", () => {
  elementsPage.assertRecordVisible(createdUsers[createdUsers.length - 1]);
});

// VERIFICAR
When("eu deleto todos os registros", () => {
  const deletarCriados = () => {
    cy.get('[title="Delete"]').then($btns => {
      if ($btns.length > 3) {
        cy.wrap($btns.eq(3)).click({ force: true })
        deletarCriados()
      }
    });
  };
  deletarCriados()
});

Then("a tabela não deve conter registros criados", () => {
  cy.get('[title="Delete"]').should('have.length', 3)
});
