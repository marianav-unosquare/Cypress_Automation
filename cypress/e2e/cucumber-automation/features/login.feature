@regression
Feature: Webdriver University login page

    Scenario: Login using valid credentials
        Given I access the WebdriverUniversity Login Portal Page
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click on the login button
        Then I should be presented with the following message validation succeeded

    Scenario: Login using invalid credentials
        Given I access the WebdriverUniversity Login Portal Page
        When I enter a username wrebdrive
        And I enter a password webdriver555
        And I click on the login button
        Then I should be presented with the following message validation failed

    @login
    Scenario Outline: Test Login via WebDriverUniversity Login Portal
        Given I access the WebdriverUniversity Login Portal Page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | wrebdrive | webdriver555 | validation failed    |

# To execute tests/feature files using commandline and using tags:
# npx cypress-tags run -e TAGS="@regression" --headed chrome
# it uses chrome as the browser. Default is electron