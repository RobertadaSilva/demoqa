class accountService {
  createUser(body) {
    return cy.request({
      method: "POST",
      url: "/Account/v1/User",
      body,
      failOnStatusCode: false,
    });
  }

  generateToken(body) {
    return cy.request({
      method: "POST",
      url: "/Account/v1/GenerateToken",
      body,
      failOnStatusCode: false,
    });
  }

  authorized(body) {
    return cy.request({
      method: "POST",
      url: "/Account/v1/Authorized",
      body,
      failOnStatusCode: false,
    });
  }

  getUser(userId, token) {
    return cy.request({
      method: "GET",
      url: `/Account/v1/User/${userId}`,
      headers: { Authorization: `Bearer ${token}` },
      failOnStatusCode: false,
    });
  }
}

export default new accountService();
