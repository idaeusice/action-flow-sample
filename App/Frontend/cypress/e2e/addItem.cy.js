/// <reference types="cypress" />

describe('Page Loads', () => {
    it('Page Loads', () => {
        cy.visit('');
        cy.get('#main > form > input[type=text]:nth-child(1)').should('exist');
    });
});


describe('Test Entry Works',  () => {
    it('text field', () => {
        cy.get('#main > form > input[type=text]:nth-child(1)').type('');
    });
});