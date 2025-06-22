# language: en
# GH Copilot code - starts
Feature: User Registration via Web UI
  As a new user of ShopSphere
  I want to register an account with my details
  So that I can shop, sell, or manage the platform

  Background:
    Given I am on the ShopSphere registration page

  # Positive scenario
  Scenario: Successful registration as a Customer
    When I enter the following details:
      | email                | password         | name         | address                | phone         | role      |
      | alice.smith@email.com | Passw0rd123!     | Alice Smith  | 123 Main St, NY, USA   | +15551234567  | Customer  |
    And I submit the registration form
    Then I should see a confirmation message
    And my account should be created with role "Customer"

  # Positive scenario for Seller
  Scenario: Successful registration as a Seller
    When I enter the following details:
      | email                | password         | name         | address                | phone         | role   |
      | bob.seller@email.com | Sell3rPass!2024  | Bob Seller   | 456 Market Rd, CA, USA | +15557654321  | Seller |
    And I submit the registration form
    Then I should see a confirmation message
    And my account should be created with role "Seller"

  # Negative scenario: Duplicate email
  Scenario: Registration fails due to duplicate email
    Given a user already exists with email "alice.smith@email.com"
    When I enter the following details:
      | email                | password      | name         |
      | alice.smith@email.com | NewPassw0rd! | Alice Smith  |
    And I submit the registration form
    Then I should see an error message "Email already exists"
    And my account should not be created

  # Negative scenario: Weak password
  Scenario: Registration fails due to weak password
    When I enter the following details:
      | email                | password | name         |
      | weak.pass@email.com  | 1234567  | Weak Pass    |
    And I submit the registration form
    Then I should see an error message "Password does not meet requirements"
    And my account should not be created

  # Negative scenario: Invalid email format
  Scenario: Registration fails due to invalid email format
    When I enter the following details:
      | email         | password      | name         |
      | not-an-email  | Passw0rd123!  | Invalid User |
    And I submit the registration form
    Then I should see an error message "Invalid email address"
    And my account should not be created

  # Negative scenario: Missing required fields
  Scenario: Registration fails due to missing required fields
    When I enter the following details:
      | email                | password         | name         |
      |                      | Passw0rd123!     |             |
    And I submit the registration form
    Then I should see an error message "Missing required fields"
    And my account should not be created

  # Corner scenario: Maximum field lengths
  Scenario: Registration with maximum allowed field lengths
    When I enter the following details:
      | email                                                                 | password                                                                 | name                                                                 | address                                                                                                   | phone                |
      | max.length.user.abcdefghijklmnopqrstuvwxyz1234567890@email.com        | P4sswordWithMaxLength1234567890!@#$%^&*()_+-=abcdefghij1234567890         | Maximilian Alexander Jonathan Christopher Smith-Johnson-Williams-Brown | 789 Long Address Lane, Some City, Some State, 12345-6789, United States of America, Earth, Solar System | +1234567890123456789 |
    And I submit the registration form
    Then I should see a confirmation message
    And my account should be created

  # Corner scenario: Invalid phone number format
  Scenario: Registration fails due to invalid phone number
    When I enter the following details:
      | email                | password      | name         | phone      |
      | phone.fail@email.com | Passw0rd123!  | Phone Fail   | abc123     |
    And I submit the registration form
    Then I should see an error message "Invalid phone number format"
    And my account should not be created

  # Negative scenario: Too many registration attempts
  Scenario: Registration fails due to too many attempts
    Given I have attempted to register unsuccessfully 5 times in the last minute
    When I enter the following details:
      | email                | password      | name         |
      | rate.limit@email.com | Passw0rd123!  | Rate Limit   |
    And I submit the registration form
    Then I should see an error message "Too many registration attempts. Please try again later."
    And my account should not be created
# GH Copilot code - end
