Feature: Search items on Amazon

Scenario Outline: Scenario Outline name: Search for different items on Amazon portal
Given I access Amazon landing page
When I enter <item> to search for
And I click on search
And I click on the first item of the list
Then I verify that the price is valid

Examples:
|item                     |
|Iphone Pro Max phone     |
|Samsung Galaxy S23 phone |
|MacBook Air              |