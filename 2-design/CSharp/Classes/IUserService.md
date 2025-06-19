# IUserService

## Description
Interface defining the contract for user-related business logic, including registration, validation, and user retrieval. Promotes modularity and testability.

## Attributes
| Name | Type | Description |
|------|------|-------------|
| None |      |             |

## Methods
| Name           | Inputs                        | Return Type         | Access | Description |
|----------------|------------------------------|---------------------|--------|-------------|
| RegisterUser   | UserRegistrationRequest       | UserResponse        | public | Registers a new user |
| IsEmailTaken   | string (email)                | bool                | public | Checks if an email is already registered |

## Class Dependencies
- **UserRegistrationRequest**: Used as input for registration.
- **UserResponse**: Returned after successful registration.
- **User**: Used internally for domain logic.
