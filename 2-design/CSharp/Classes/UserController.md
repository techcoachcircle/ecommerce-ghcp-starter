# UserController

## Description
API controller for handling user registration requests. Exposes the `/users/register` endpoint and coordinates request validation, service invocation, and response formatting.

## Attributes
| Name           | Type          | Description                                 |
|----------------|---------------|---------------------------------------------|
| _userService   | IUserService  | Service for user-related business logic     |

## Methods
| Name           | Inputs                        | Return Type         | Access | Description |
|----------------|------------------------------|---------------------|--------|-------------|
| Register       | UserRegistrationRequest       | ActionResult<UserResponse> | public | Handles HTTP POST for user registration |

## Class Dependencies
- **IUserService**: Used to perform registration logic.
- **UserRegistrationRequest**: Used as input.
- **UserResponse**: Returned as response.
