Feature: Login to nop commerce

Scenario Outline:  Verify login with multiple valid test data 
 Given     I navigate to url
 Then      I should be navigated to homepage
 When      I click on login
 Then      I should be navigate to login page
 When      I enter email as "<email>"
 And       I enter password as "<password>"
 And       I click on login button
 Then      I should login successfully
 
        Examples:
            | email           | password    |
            | qauser1@nop.com | Testing@123 |
            | qauser2@nop.com | Testing@123 |
