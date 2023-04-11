/// <reference types="cypress" />

describe('Network Requests', () => {
    let message = "Unable to find a comment";

    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/network-requests");
    });

    it('Get Request', () => {
        cy.intercept({
            method: "GET",
            url: "***",
        },
            {
                body: {
                    postId: 1,
                    id: 1,
                    name: "test name 123",
                    email: "email@email.com",
                    body: "Hello world"
                }
            }).as("getComment");
        cy.get(".network-btn.btn.btn-primary").click();
        cy.wait("@getComment").its("response.statusCode").should("eq", 200);
    });

    it("POST request", () => {
        cy.intercept("POST", "/comments").as("postComment");

        cy.get(".network-post.btn.btn-success").click();

        cy.wait("@postComment").should(({ request, response }) => {
            //Do assertions to the request and responses only
            console.log(request);
            expect(request.body).to.include("body");
            console.log(response);
            expect(response.body).to.have.property("name");
            expect(request.headers).to.have.property("content-type");
            expect(request.headers).to.have.property("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
        })
    });

    it.only("Put Request", () => {
        cy.intercept({
            method: "PUT",
            url: "**/comments/*"
        }, {
            statusCode: 404,
            body: { error: message },
            delay: 500
        }).as("putComment");
        cy.get(".network-put").click();
        cy.wait("@putComment")
        cy.get(".network-put-comment").should("contain", message);
    });
});