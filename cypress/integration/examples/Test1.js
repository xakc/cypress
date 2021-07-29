/// <reference types="Cypress" />

describe("My first Test Suite", function(){

 
    it('Go to the home page', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        
        //Search product starting with "ca"
        cy.get('.search-keyword').type('ca');
        cy.wait(3000)
        cy.get('.product:visible').should('have.length',4);
        
        //select the second product from the product grid
        //Code example 1 
        // cy.get('nth:child(3) > .product-action > button').click();

        //Conde example with Cypress build in functions
       cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        

      })




    }
)