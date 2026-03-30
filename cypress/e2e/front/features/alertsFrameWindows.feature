Feature: Browser Windows

  Scenario: Validar abertura de nova janela
    Given eu esteja na página Browser Windows
    When aciono o botão New Window
    Then uma nova janela deve ser aberta com o texto "This is a sample page"
    And ao retornar devo visualizar a página Browser Windows
