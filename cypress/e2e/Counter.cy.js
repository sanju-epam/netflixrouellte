import {Counter} from '../../src/components/Counter'
import React from 'react';


describe('Counter Component E2E Test', () => {
  it('should increment and decrement the counter', () => {
    cy.visit('http://localhost:3000/netflixrouellet');

    cy.get('.counter').as('counterComponent');
    cy.get('@counterComponent').find('span').should('have.text', '10');

    cy.get('@counterComponent').find('button').contains('+').click();
    cy.get('@counterComponent').find('span').should('have.text', '11');

    cy.get('@counterComponent').find('button').contains('-').click();
    cy.get('@counterComponent').find('span').should('have.text', '10');
  });
});




