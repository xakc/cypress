/// <reference types="Cypress" />

describe("My first Test Suite", function(){

 
    it('Get reqested product the te shoping bag', function() {
        //navigate to the shop page
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        
        //Search product starting with "ca"
        cy.get('.search-keyword').type('ca');
        cy.wait(3000)
        cy.get('.product:visible').should('have.length',4);
        
        //select the second product from the product grid
        cy.get(':nth-child(3) > .product-action > button').click();
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
       
        // Select only product provided by string/text 
        // Line 1 Generate collection with products aka array
        // Line 2 loop over the collection with cypress build func
        // CYPRESS API DOCUMENTATION https://docs.cypress.io/api/commands/each#DOM-Elements
        cy.get('.products').find('.product')
            .each(($el, index, $list) => {

                // get the DOM element text attribute
                const textVeg  =  $el.find('h4.product-name').text();

                // search in the collection for matching results with the reqested string/txt
                if (textVeg.includes('Cashews')) {
                    //Click "ADD TO CART" btn
                    $el.find('button').click();   
                } 
            })  
       


      })




    }
)