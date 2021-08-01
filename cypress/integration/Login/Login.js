//const { Given, When, Then } = require( 'cucumber' );
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
Given('I navigate to url', function () {
   cy.visit('/')
});

Then('I should be navigated to homepage', function () {
   cy.title().should('include','nopCommerce demo store')
});

When('I click on login', function () {
   cy.get('.ico-login').click()
});

Then('I should be navigate to login page', function () {
  cy.title().should('include','nopCommerce demo store. Login')
});

When('I enter email as {string}', function (em) {
  cy.get('#Email').type(em,{log:false})
});

When('I enter password as {string}', function (pw) {
  cy.get('#Password').type(pw)
});

When('I click on login button', function () {
  cy.get('.login-button').click()
});

Then('I should login successfully', function () {
  
});


