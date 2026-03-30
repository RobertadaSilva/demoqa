class bookService {
  getBooks() {
    return cy.request({
      method: "GET",
      url: "/BookStore/v1/Books",
      failOnStatusCode: false,
    });
  }

  rentBooks(userId, token, isbns) {
    return cy.request({
      method: "POST",
      url: "/BookStore/v1/Books",
      headers: { Authorization: `Bearer ${token}` },
      body: {
        userId: userId,
        collectionOfIsbns: isbns.map((isbn) => ({ isbn })),
      },
      failOnStatusCode: false,
    });
  }
}

export default new bookService();
