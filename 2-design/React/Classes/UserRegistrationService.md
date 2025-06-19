# UserRegistrationService (Class)

## Description
`UserRegistrationService` is a TypeScript class responsible for handling all API interactions related to user registration. It abstracts the HTTP requests, error handling, and response parsing for the registration process.

## Attributes
| Attribute         | Data Type         | Description                                 |
|-------------------|------------------|---------------------------------------------|
| baseUrl           | string           | Base URL for the registration API           |

## Methods
| Method           | Inputs                | Return Type         | Access    | Description                                 |
|------------------|----------------------|---------------------|-----------|---------------------------------------------|
| registerUser     | UserRegistrationRequest | Promise<UserResponse> | public    | Registers a new user via API                |
| handleError      | any (error)          | ErrorResponse        | private   | Parses and returns error response           |

## Dependencies
- Uses `UserRegistrationRequest`, `UserResponse`, and `ErrorResponse` types.
