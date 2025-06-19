# UserService

## Description
The `UserService` class contains the business logic for user registration. It validates input data, checks for duplicate emails, hashes passwords, creates user records, and handles all error scenarios as per the API specification. It acts as an intermediary between the controller and the data access layer.

## Attributes
| Name           | Type           | Description                                 |
|----------------|----------------|---------------------------------------------|
| user_repository| UserRepository | Handles database operations for users       |
| password_hasher| PasswordHasher | Utility for hashing and verifying passwords |
| validator      | Validator      | Utility for input validation                |

## Methods
| Name                | Inputs                                 | Return Type      | Access    | Description                                                      |
|---------------------|----------------------------------------|------------------|-----------|------------------------------------------------------------------|
| register_user       | registration_data: dict                | User             | public    | Registers a new user, returns User object or raises error        |
| _validate_input     | registration_data: dict                | None             | private   | Validates registration input data                                |
| _check_duplicate    | email: str                             | None             | private   | Checks if email already exists                                   |

## Class Dependencies
- **UserRepository**: Used for user data persistence and lookup.
- **PasswordHasher**: Used for password hashing.
- **Validator**: Used for input validation.
- **User**: Used to create user entity objects.
- **ErrorResponse**: Used to raise/return error information.
