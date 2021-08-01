import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I navigate to url', function () {
  cy.visit('/')
});

Then('I should be navigated to homepage', function () {
  cy.title().should('include','nopCommerce demo store')
});

When('I click on register link from navbar', function () {
  cy.get('.ico-register').click()
 

});

Then('I should be navigate to register page', function () {
  cy.title().should('include','nopCommerce demo store. Register')
});

When('I fill register form as following', function (dataTable) {
          dataTable.hashes().forEach(row =>{
            cy.get('#FirstName').type(row.firstName)
            cy.get('#LastName').type(row.lastName)
            cy.get('#Email').type(row.email)
            cy.get('#Password').type(row.password)
            cy.get('#ConfirmPassword').type(row.confirmPassword)
          })
});

When('I click on register button', function () {
  cy.get('#register-button').click()
     
  
});

Then('I should be able to register a new user', function () {
  cy.get('.result').invoke('text').as('confMsg')
  cy.get('@confMsg').should('include','Your registration completed')

});


