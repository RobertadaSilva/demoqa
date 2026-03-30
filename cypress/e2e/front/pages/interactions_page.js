class InteractionsPage {
  expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
  selector = '.vertical-list-container .list-group-item'

  visit() {
    cy.visit("/sortable")
  }

  sortAscending() {
    this.expectedOrder.forEach((itemText, targetIdx) => {
      cy.get(this.selector).then(($items) => {
        const currentIdx = [...$items].findIndex(el => el.innerText.trim() === itemText)
        if (currentIdx !== targetIdx) {
          cy.get(this.selector).eq(currentIdx).drag(`${this.selector}:nth-child(${targetIdx + 1})`)
        }
      })
    })
  }

  assertAscendingOrder() {
    this.expectedOrder.forEach((text, i) => {
      cy.get(this.selector).eq(i).should('have.text', text)
    })
  }
}

export default new InteractionsPage();
