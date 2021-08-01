@regression
Feature: search product

Scenario: verify search functionality

 Given  I navigate to url
 Then   I should be navigated to homepage
 When   I enter "laptop" in the search textbox
 And    I click on search button
 Then   I should see corresponding results 