class ElementsPage {
  visit() {
    cy.visit("/webtables")
  }

  addRecord(user) {
    cy.get("#addNewRecordButton").click()
    cy.get("#firstName").type(user.firstName)
    cy.get("#lastName").type(user.lastName)
    cy.get("#userEmail").type(user.email)
    cy.get("#age").type(user.age)
    cy.get("#salary").type(user.salary)
    cy.get("#department").type(user.department)
    cy.get("#submit").click()
    cy.get(".modal").should("not.exist")
  }

  editRecord(firstName, newName) {
    cy.contains("td", firstName)
      .parent()
      .within(() => cy.get('[title="Edit"]').click({ force: true }))
    cy.get("#firstName").clear().type(newName)
    cy.get("#submit").click()
  }

  deleteRecord(firstName) {
      cy.contains("td", firstName)
        .parent()
        .within(() => cy.get('[title="Delete"]').click({ force: true }))
  }

  showMoreItems() {
    cy.get('select').select('Show 30')
  }

  assertRecordVisible(firstName) {
    cy.contains("td", firstName).should("be.visible")
  }

  assertRecordNotExist(firstName) {
    cy.get('body').should('not.contain', firstName)
  }
}

export default new ElementsPage();
