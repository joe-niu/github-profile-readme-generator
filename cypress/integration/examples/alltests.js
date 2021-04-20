// Group 8
// Created these tests to identify 10 bugs we implemented

describe('Github Profile Readme Generator', () => {
    it(`Title Bug 1`, () => {
        cy.wait(2000)
        cy.visit(`http://localhost:8000`)
        cy.wait(2000)
        cy.get(`[id="title-prefix"]`).clear().type('John')
        cy.wait(2000)
        cy.get(`[value="John"]`).should(`exist`)

    })
    it(`Title Bug 2`, () => {
        cy.wait(2000)
        cy.get(`[id="title-name"]`).clear().type('Cena')
        cy.wait(2000)
        cy.get(`[value="Cena"]`).should(`exist`)
    })
    it(`Subtitle Bug`, () => {
        cy.wait(2000)
        cy.get(`[id="subtitle"]`).clear().type('subtitle testing')
        cy.wait(2000)
        cy.get(`[value="subtitle testing"]`)
    })
    it(`Skills Check Boxes Bug`, () => {
        cy.wait(2000)
        cy.get(`[id="c"]`).click()
        cy.wait(2000)

    })
    it(`Skills Search Results Bug`, () => {
        cy.wait(2000)
        cy.get(`[placeholder="Search Skills"]`).type('javascript')
        cy.wait(2000)
        cy.get(`[for="c"]`).should(`not.exist`)
    })
    it(`Add On Check Boxes Bug`, () => {
        cy.wait(2000)
        cy.get(`[id="visitors-count"]`).click()
        cy.wait(2000)
    })
    it(`GitHub Username Bug`, () => {
        cy.wait(2000)
        cy.get(`[id="github"]`).clear().type('github username testing')
        cy.wait(2000)
        cy.get(`[value="github username testing"]`).should(`exist`)
    })
    it(`Current Work Bug 1`, () => {
        cy.wait(2000)
        cy.get(`[id="currentWork-prefix"]`).clear().type('work test 1')
        cy.wait (2000)
        cy.get(`[value="work test 1"]`).should(`exist`)
    })
    it(`Current Work Bug 2`, () => {
        cy.wait(2000)
        cy.get(`[id="currentWork"]`).clear().type('work test 2')
        cy.wait (2000)
        cy.get(`[value="work test 2"]`).should(`exist`)
    })
    it(`Current Work Bug 3`, () => {
        cy.wait(2000)
        cy.get(`[id="currentWork-link"]`).clear().type('work test 3')
        cy.wait (2000)
        cy.get(`[value="work test 3"]`).should(`exist`)
    })
})