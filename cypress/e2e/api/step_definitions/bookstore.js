import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import accountService from "../services/accountService";
import bookService from "../services/bookService";

let userId
let token
let selectedIsbns

const user = {
  userName: `testuser_${Date.now()}`,
  password: "Test@12345",
};

Given("que eu crie um novo usuário", () => {
  accountService.createUser(user).then((res) => {
    expect(res.status).to.eq(201)
    userId = res.body.userID
  });
});

When("eu gero um token", () => {
  accountService.generateToken(user).then((res) => {
    expect(res.status).to.eq(200)
    token = res.body.token
  });
});

When("valido que o usuário está autorizado", () => {
  accountService.authorized(user).then((res) => {
    expect(res.status).to.eq(200)
    expect(res.body).to.eq(true)
  });
});

When("listo os livros disponíveis", () => {
  bookService.getBooks().then((res) => {
    expect(res.status).to.eq(200)
    selectedIsbns = [res.body.books[0].isbn, res.body.books[1].isbn]
  });
});

When("alugo dois livros", () => {
  bookService.rentBooks(userId, token, selectedIsbns).then((res) => {
    expect(res.status).to.eq(201)
    expect(res.body.books).to.have.length(2)
  });
});

Then("devo ver os livros no perfil do usuário", () => {
  accountService.getUser(userId, token).then((res) => {
    expect(res.status).to.eq(200)
    expect(res.body.books).to.have.length(2)
    expect(res.body.books[0].isbn).to.eq(selectedIsbns[0])
    expect(res.body.books[1].isbn).to.eq(selectedIsbns[1])
  });
});
