Feature: Interactions - Sortable

  Scenario: Ordenar elementos em ordem crescente
    Given eu esteja na página Sortable
    When eu ordeno os elementos em ordem crescente
    Then os elementos devem estar em ordem crescente
