Feature: Symphony Solutions - Saucedemo page
    The inventory on the Saucedemo page will be ordered as indicated.

    Background:
        Given A user opens a Saucedemo website

    Scenario: Order from A to Z
        When A user enters the username "standard_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then the URL will contain the inventory subdirectory
        When the user selects the "Name (A to Z)" sorting option
        Then the items on the page should be sorted by Name in ascending order

    Scenario: Order from Z to A
        When A user enters the username "standard_user"
        And A user enters the password "secret_sauce"
        And A user clicks on the login button
        Then the URL will contain the inventory subdirectory
        When the user selects the "Name (Z to A)" sorting option
        Then the items on the page should be sorted by Name in descending order