Feature: Bookstore API

  Scenario: Fluxo completo de aluguel de livros
    Given que eu crie um novo usuário
    When eu gero um token
    And valido que o usuário está autorizado
    And listo os livros disponíveis
    And alugo dois livros
    Then devo ver os livros no perfil do usuário
