@metacoin
Feature: Send tokens with Metacoin

    As a token issuer
    In order to distribute my token
    I want to be able to send amounts to different addresses

    @metacoin
    Scenario: I can see headline
        Given I navigate to the Metacoin homepage
        Then I should see the expected headline

    @metacoin
    Scenario: I can send token
        Given I navigate to the Metacoin homepage
        When  I input valid values
        Then I should see a success notification 
