class InteractionsPage {
  expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

  visit() {
    cy.visit("/sortable")
  }

  getListItems() {
    return cy.get('.vertical-list-container .list-group-item')
  }

  // Ordena arrastando cada item pra posição correta
  sortAscending() {
    this.expectedOrder.forEach((itemText, targetIdx) => {
      this.getListItems().then(($items) => {
        const currentTexts = [...$items].map(el => el.innerText.trim())
        const sourceIdx = currentTexts.indexOf(itemText)
        if (sourceIdx !== targetIdx && sourceIdx !== -1) {
          this.dragItem(sourceIdx, targetIdx)
        }
      });
    });
  }

  // Arrasta item de uma posição pra outra usando dataTransfer
  dragItem(fromIndex, toIndex) {
    const dataTransfer = new DataTransfer()
    this.getListItems().eq(fromIndex)
      .trigger('dragstart', { dataTransfer, force: true })
    this.getListItems().eq(toIndex)
      .trigger('drop', { dataTransfer, force: true })
      .trigger('dragend', { dataTransfer, force: true })
  }

  // Verifica que os itens estão na ordem crescente
  assertAscendingOrder() {
    this.getListItems().each(($item, index) => {
      cy.wrap($item).should('have.text', this.expectedOrder[index])
    });
  }
}

export default new InteractionsPage();
