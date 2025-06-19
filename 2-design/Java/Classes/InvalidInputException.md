# InvalidInputException

## Description
`InvalidInputException` is a custom exception thrown when the registration input fails validation (e.g., invalid email, weak password, etc.). It is used to signal bad request errors to the controller and client.

## Attributes
| Attribute | Data Type | Description |
|-----------|-----------|-------------|
| message   | String    | Exception message |

## Methods
| Method Signature                         | Input(s)   | Return Type | Access | Description |
|------------------------------------------|------------|-------------|--------|-------------|
| InvalidInputException(String message)    | String message | - | public | Constructor with error message |

## Class Dependencies
- Used by `UserService` to signal validation errors.
