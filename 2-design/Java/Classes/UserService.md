# UserService

## Description
`UserService` is a Spring service class that encapsulates the business logic for user registration. It validates input, checks for duplicate emails, hashes passwords, creates user and profile entities, and handles error scenarios.

## Attributes
| Attribute         | Data Type         | Description                                 |
|-------------------|------------------|---------------------------------------------|
| userRepository    | UserRepository   | Repository for User entity persistence      |
| userProfileRepository | UserProfileRepository | Repository for UserProfile persistence |
| passwordEncoder   | PasswordEncoder  | Utility for hashing passwords               |

## Methods
| Method Signature                                                                 | Input(s)                        | Return Type         | Access    | Description                                                      |
|----------------------------------------------------------------------------------|----------------------------------|---------------------|-----------|------------------------------------------------------------------|
| registerUser(UserRegistrationRequest request)                                     | UserRegistrationRequest request | UserResponse        | public    | Validates and registers a new user, returns response DTO         |
| isEmailTaken(String email)                                                        | String email                    | boolean             | public    | Checks if the email is already registered                        |

## Class Dependencies
- **UserRepository**: Used for user persistence and lookup.
- **UserProfileRepository**: Used for profile persistence.
- **PasswordEncoder**: Used to hash passwords securely.
- **UserRegistrationRequest**: Used as input for registration.
- **UserResponse**: Used as output for successful registration.
- **ErrorResponse**: Used for error handling.
