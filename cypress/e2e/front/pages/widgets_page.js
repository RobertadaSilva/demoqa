class WidgetsPage {
  visit() {
    cy.visit("/progress-bar")
  }

  clickStartStop() {
    cy.get("#startStopButton").click();
  }

  // Aguarda a progress bar atingir um valor e clica Stop
  stopBefore(maxValue) {
    const checkAndStop = () => {
      cy.get('[role="progressbar"]').invoke("attr", "aria-valuenow").then((val) => {
        if (parseInt(val) >= maxValue - 5) {
          this.clickStartStop()
        } else {
          cy.wait(100)
          checkAndStop()
        }
      });
    };
    checkAndStop()
  }

  // Valida que o valor da progress bar é menor ou igual ao esperado
  assertValueLessOrEqual(maxValue) {
    cy.get('[role="progressbar"]').invoke("attr", "aria-valuenow").then((val) => {
      expect(parseInt(val)).to.be.lte(maxValue);
    });
  }

  // Aguarda a progress bar chegar a 100%
  waitUntilComplete() {
    cy.get('[role="progressbar"]', { timeout: 20000 })
      .should("have.attr", "aria-valuenow", "100")
  }

  clickReset() {
    cy.get("#resetButton").click()
  }

  assertReset() {
    cy.get("#startStopButton").should("have.text", "Start")
  }

  assertProgressBarTitle(){
    cy.get('.text-center').should('have.text', 'Progress Bar')
  }
}

export default new WidgetsPage();
