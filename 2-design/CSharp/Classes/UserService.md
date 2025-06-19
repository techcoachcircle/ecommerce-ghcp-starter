# UserService

## Description
Implements the `IUserService` interface. Handles user registration, validation, and business logic. Coordinates with repositories and other services.

## Attributes
| Name           | Type              | Description                                 |
|----------------|-------------------|---------------------------------------------|
| _userRepository| IUserRepository   | Repository for user data access             |

## Methods
| Name           | Inputs                        | Return Type         | Access | Description |
|----------------|------------------------------|---------------------|--------|-------------|
| RegisterUser   | UserRegistrationRequest       | UserResponse        | public | Registers a new user |
| IsEmailTaken   | string (email)                | bool                | public | Checks if an email is already registered |

## Class Dependencies
- **IUserRepository**: Used for data access.
- **UserRegistrationRequest**: Used as input.
- **UserResponse**: Returned after registration.
- **User**: Used for domain logic.
