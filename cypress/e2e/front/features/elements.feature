Feature: Elements - Web Tables

  Scenario: Cadastrar novo registro
    Given que eu estou na tela Web Tables
    When eu cadastro um novo registro
    Then o registro deve estar visível na tabela

  Scenario: Editar registro existente
    Given que eu estou na tela Web Tables
    When eu cadastro um novo registro
    And eu edito o registro
    Then o registro editado deve estar visível

  Scenario: Deletar registro
    Given que eu estou na tela Web Tables
    When eu cadastro um novo registro
    And eu deleto o registro
    Then o registro não deve mais existir

  Scenario: Criar 12 registros e deletar todos
    Given que eu estou na tela Web Tables
    When eu crio 12 usuários
    Then todos devem estar visíveis na tabela
    When eu deleto todos os registros
    Then a tabela não deve conter registros criados
