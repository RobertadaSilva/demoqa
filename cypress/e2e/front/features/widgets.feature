Feature: Widgets - Progress Bar

  Scenario: Parar a progress bar antes dos 25%
    Given eu esteja na página Progress Bar
    When eu inicio e paro antes dos 25%
    Then o valor deve ser menor ou igual a 25%

  Scenario: Completar e resetar a progress bar
    Given eu esteja na página Progress Bar
    When eu inicio e aguardo chegar a 100%
    Then eu reseto a progress bar
