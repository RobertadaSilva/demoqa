class FormPage {
  visit() {
    cy.visit("/automation-practice-form")
  }

  uploadFile(content) {
    const fileName = 'testfile.txt'
    cy.writeFile(`cypress/fixtures/${fileName}`, content)
    cy.get('#uploadPicture').selectFile(`cypress/fixtures/${fileName}`)
  }

  assertTitle() {
    cy.get('.text-center').should('have.text', 'Practice Form')
  }

  fillForm(user) {
    cy.get('#firstName').type(user.firstName)
    cy.get('#lastName').type(user.lastName)
    cy.get('#userEmail').type(user.email)
    cy.get(`label:contains("${user.gender}")`).click()
    cy.get('#userNumber').type(user.mobile)

    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select(user.birthMonth)
    cy.get('.react-datepicker__year-select').select(user.birthYear)
    cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)').first().click()

    cy.get('#subjectsInput').type(`${user.subject}{enter}`)
  
    cy.get(`label:contains("${user.hobby}")`).click()

    this.uploadFile(user.fileContent)

    cy.get('#currentAddress').type(user.address)

    cy.get('#state').click()
    cy.get('#react-select-3-option-0').click()
    cy.get('#city').click()
    cy.get('#react-select-4-option-0').click()
  }

  submitForm() {
    cy.get('#submit').click()
  }

  // Verifica que o popup de confirmação apareceu
  assertPopupVisible() {
    cy.get('.modal-dialog').should('be.visible')
    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
  }

  // Fecha o popup removendo o modal via JavaScript
  closePopup() {
    cy.get('.modal-backdrop').click({ force: true })
    cy.get('.modal-dialog').should('not.exist')
  }
}

export default new FormPage();
