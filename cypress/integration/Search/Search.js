import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I navigate to url', function () {
  cy.visit('/')
});

Then('I should be navigated to homepage', function () {
  cy.title().should('include','nopCommerce demo store')
});

When('I enter {string} in the search textbox', function (pName) {
  cy.get('#small-searchterms').type(pName)
});

When('I click on search button', function () {
  cy.get('#small-search-box-form > .button-1').click()
});

Then('I should see corresponding results', function () {
  cy.get(':nth-child(1) > .product-item > .details > .product-title > a').should('be.visible')
});


