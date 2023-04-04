describe('Hooks', () => {
    before(() => {
        // root-level hook
        cy.log('runs once before all tests');
    })

    beforeEach(() => {
        // root-level hook
        cy.log('runs before every test block');
    })

    afterEach(() => {
        cy.log('runs after each test block');
    })

    after(() => {
        cy.log('runs once all tests are done');
    })

    it('example test 1', ()=>{
        cy.log('Example test 1');
    })

    it('example test 2', ()=>{
        cy.log('Example test 2');
    })
});
