class AlertsFrameWindowsPage {
  visit() {
    cy.visit("/browser-windows")
  }

  assertTitle() {
    cy.get('.text-center').should('have.text', 'Browser Windows')
  }

  clickNewWindow() {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('newWindow')
    });
    cy.get('#windowButton').click()
  }

  // Pega a url da nova janela e visita na mesma aba
  visitNewWindowUrl() {
    cy.get('@newWindow').then((stub) => {
      const url = stub.args[0][0]
      cy.visit(url)
    });
  }

  assertNewWindowText(text) {
    cy.contains(text).should('be.visible')
  }

  returnToMain() {
    cy.go('back')
  }
}

export default new AlertsFrameWindowsPage();
