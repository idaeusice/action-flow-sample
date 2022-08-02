/// <reference types="cypress" />

describe('Page Loads', () => {
    it('Page Loads', () => {
        cy.visit('');
        cy.get('#main > form > input[type=text]:nth-child(1)').should('exist');
    });
});

describe('Test Entry Works',  () => {
    it('Text Field', () => {
        cy.get('#main > form > input[type=text]:nth-child(1)').type('Test Item');
    });
    it('Submission', () => {
        cy.get('#main > form').submit();
        cy.get('#main > ul > li').should('be.visible').and('contain', 'Test Item');
    });
});