Feature: Register and validate bloodline of racehorses 
    As a User
    I should be able to register horses 
    and to validate the bloodline of racehorses

    Scenario: Show all horses
        Given I am on the home page
        When I navigate to list of all horses
        Then I see all registered horses

    Scenario: Search for a horse
        Given I am on the home page
        When  I search for a horse by name, e.g. "Secretariat"
        Then I can see detail to the horse names "Secretariat" 

    Scenario: Show the heredity of horse
        Given I an on the details page to a horse
        When I open/navigate to the heridity of this horse
        Then I can see the heridity tree of this horse

    Scenario: Show the progeny of horse
        Given I an on the details page to a horse
        When I open/navigate to the progeny of this horse
        Then I can see all progeny as tree

    Scenario: Change the owner of horse
        Given I am the owner of the horse
        When I change the owner to other people/address
        Then Other people is the new owner of this horse

    Scenario: Register a new horse
        Given I am on the horse register screen
        When I input all data for the horse
        Then It should be able to register the horse/ save my data

    Scenario: Register a new horse negativ
        Given I am on the horse register screen
        When I input all data for the horse with the same DNA which is already registered
        Then It should not be able to register the horse
