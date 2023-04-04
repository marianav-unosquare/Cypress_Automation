/// <reference types="cypress" />

describe('Json Object', () => {
    it('Json Objects Examples', () => {
        const exampleObject = { "key": "Tim", "key2": "Jones"};
        const exampleArrayOfValues = ["sophie", "rose", "mia"];
        const exapmleArrayOfObjects = [{"key":"value"},{"key2": "value2"},{"key3":"value3"}];

        const users = {
            "firstName": "Joe",
            "lastName": "blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs",
                },
                {
                    "firstName": "Tania",
                    "lastName": "Parker",
                }
            ]
        };

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key2);

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[2])

        cy.log(users.Students[0].firstName);

        cy.log(exapmleArrayOfObjects[0].key);
        cy.log(exapmleArrayOfObjects[1].key2);
        cy.log(exapmleArrayOfObjects[2].key3);


    });
});