# UserRegistrationRequest

## Description
The `UserRegistrationRequest` class defines the schema for incoming user registration data. It is used to validate and parse the registration payload received from the client. This class ensures that all required fields are present and conform to the expected formats.

## Attributes
| Name    | Type   | Description                                 |
|---------|--------|---------------------------------------------|
| email   | str    | User's email address                        |
| password| str    | User's password (plain, to be hashed)       |
| name    | str    | Full name of the user                       |
| address | str    | User's address (optional)                   |
| phone   | str    | User's phone number (optional)              |
| role    | str    | User's role (Customer, Seller, Admin)       |

## Methods
| Name                | Inputs                                | Return Type      | Access    | Description                                                      |
|---------------------|---------------------------------------|------------------|-----------|------------------------------------------------------------------|
| validate            | None                                  | None or raises   | public    | Validates the registration data                                  |

## Class Dependencies
- **Validator**: Used for input validation.
