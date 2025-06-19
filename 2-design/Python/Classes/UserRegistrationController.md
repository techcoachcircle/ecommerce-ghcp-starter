# UserRegistrationController

## Description
The `UserRegistrationController` is responsible for handling HTTP requests related to user registration in the Flask application. It receives registration data from clients, delegates business logic to the service layer, and returns appropriate HTTP responses. This controller ensures that the API endpoints for user registration are properly managed, including error handling and response formatting.

## Attributes
| Name         | Type    | Description                                 |
|--------------|---------|---------------------------------------------|
| user_service | UserService | Service layer instance for user operations |

## Methods
| Name                | Inputs                                | Return Type      | Access    | Description                                                      |
|---------------------|---------------------------------------|------------------|-----------|------------------------------------------------------------------|
| register_user       | request: flask.Request                | flask.Response   | public    | Handles POST /users/register, processes registration requests    |
| _format_response    | data: dict, status_code: int          | flask.Response   | private   | Helper to format JSON responses                                  |

## Class Dependencies
- **UserService**: Used to perform user registration logic and validation.
- **ErrorResponse**: Used to format error responses.
- **UserResponse**: Used to format successful registration responses.

