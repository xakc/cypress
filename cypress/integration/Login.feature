Feature: Login to nop commerce

Scenario: Verify login with valid credentials
 Given     I navigate to url
 Then      I should be navigated to homepage
 When      I click on login
 Then      I should be navigate to login page
 When      I enter email as "qauser1@nop.com"
 And       I enter password as "Testing@123"
 And       I click on login button
 Then      I should login successfully
 
   