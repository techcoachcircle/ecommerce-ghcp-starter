# Validator

## Description
The `Validator` class provides utility methods for validating user input, such as email format, password strength, and phone number format. It is used throughout the registration flow to ensure data integrity and compliance with business rules.

## Attributes
| Name    | Type   | Description                                 |
|---------|--------|---------------------------------------------|
| None    |        | (Typically stateless utility class)         |

## Methods
| Name                | Inputs                                | Return Type      | Access    | Description                                                      |
|---------------------|---------------------------------------|------------------|-----------|------------------------------------------------------------------|
| validate_email      | email: str                             | None or raises   | public    | Validates the email format                                       |
| validate_password   | password: str                          | None or raises   | public    | Validates the password strength                                  |
| validate_phone      | phone: str                             | None or raises   | public    | Validates the phone number format                                |

## Class Dependencies
None (used by UserService and UserRegistrationRequest for input validation).
