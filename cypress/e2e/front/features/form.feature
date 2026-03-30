Feature: Forms - Practice Form

  Scenario: Preencher e submeter o formulário
    Given eu esteja na página Practice Form
    When eu preencho o formulário com dados aleatórios
    And eu submeto o formulário
    Then um popup deve ser exibido
    And eu fecho o popup
