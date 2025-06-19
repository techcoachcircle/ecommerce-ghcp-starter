# UserRegistrationController

## Description
The `UserRegistrationController` is a Spring REST controller responsible for handling HTTP requests related to user registration. It exposes the `/users/register` endpoint, validates incoming requests, delegates business logic to the service layer, and returns appropriate responses based on the outcome.

## Attributes
| Attribute         | Data Type                | Description                                 |
|-------------------|-------------------------|---------------------------------------------|
| userService       | UserService              | Service for user registration logic         |

## Methods
| Method Signature                                                                 | Input(s)                        | Return Type         | Access    | Description                                                      |
|----------------------------------------------------------------------------------|----------------------------------|---------------------|-----------|------------------------------------------------------------------|
| registerUser(@RequestBody UserRegistrationRequest request)                       | UserRegistrationRequest request | ResponseEntity<UserResponse> or ErrorResponse | public    | Handles POST /users/register, validates input, delegates to service |

## Class Dependencies
- **UserService**: Used to perform registration logic and interact with repositories.
- **UserRegistrationRequest**: Used to receive registration data from the client.
- **UserResponse**: Used to return successful registration data.
- **ErrorResponse**: Used to return error details in case of failure.
